"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { validate, type Fields, type FormKind, type FormResult } from "@/lib/forms";
import { readSource } from "@/lib/attribution";

export function useSiteForm(kind: FormKind) {
  const [fields, setFields] = useState<Fields>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const [pending, setPending] = useState(false);
  const inFlight = useRef(false);
  const setField = (name: string, value: string) => setFields((previous) => ({ ...previous, [name]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries([...new FormData(form)].map(([key, value]) => [key, String(value).trim()]));
    const focusError = (nextErrors: Record<string, string>) => {
      const input = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (input instanceof HTMLElement) input.focus();
    };
    const nextErrors = validate(values, kind);
    setErrors(nextErrors);
    setMessage("");
    if (Object.keys(nextErrors).length) { focusError(nextErrors); return; }
    if (kind === "newsletter") {
      try { const source = readSource(window.localStorage); if (source) values.source = source; } catch {}
    }
    inFlight.current = true;
    setPending(true);
    try {
      const response = await fetch(`/api/${kind}`, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values), signal: AbortSignal.timeout(15_000),
      });
      const result: FormResult = await response.json();
      if (typeof result.message !== "string") throw new Error("Invalid response");
      setMessage(result.message);
      if (response.ok) setComplete(true);
      else if (result.errors) { setErrors(result.errors); focusError(result.errors); }
    } catch {
      setMessage(kind === "contact" ? "We couldn't confirm your message was sent. Please try again, or email Alex directly." : "We couldn't confirm your signup. Please try again, or email Alex.");
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }
  return { fields, errors, message, complete, pending, setField, submit };
}

export function FormFields({ kind, form }: { kind: FormKind; form: ReturnType<typeof useSiteForm> }) {
  const id = useId();
  const definitions = kind === "contact"
    ? [{ name: "name", label: "Name", autoComplete: "name" }, { name: "email", label: "Email", autoComplete: "email" }, { name: "message", label: "Message" }]
    : [{ name: "email", label: "Email", autoComplete: "email" }, { name: "firstName", label: "First name", autoComplete: "given-name" }, { name: "lastName", label: "Last name", autoComplete: "family-name" }, { name: "dietary", label: "Dietary restrictions (optional)" }];
  return <fieldset disabled={form.pending} className="space-y-4 min-w-0">
    <legend className="sr-only">{kind === "contact" ? "Your message" : "Mailing list details"}</legend>
    {definitions.map(({ name, label, autoComplete }) => {
      const props = {
        id: `${id}-${name}`, name, value: form.fields[name] || "",
        onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => form.setField(name, event.target.value),
        required: name !== "dietary", "aria-required": name !== "dietary",
        "aria-invalid": !!form.errors[name], "aria-describedby": form.errors[name] ? `${id}-${name}-error` : undefined,
        maxLength: name === "message" ? 5000 : name === "dietary" ? 2000 : name === "email" ? 254 : 100,
        className: "site-input", autoComplete,
      };
      return <div key={name}>
        <label className="block mb-1.5 text-[16px]" htmlFor={props.id}>{label}{name !== "dietary" && <span className="sr-only"> (required)</span>}</label>
        {name === "message" || name === "dietary" ? <textarea {...props} rows={name === "message" ? 6 : 3} /> : <input {...props} type={name === "email" ? "email" : "text"} />}
        {form.errors[name] && <p className="mt-1 text-[16px]" id={`${id}-${name}-error`} role="alert">{form.errors[name]}</p>}
      </div>;
    })}
    <div hidden aria-hidden="true"><label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button type="submit" className="site-button w-full" disabled={form.pending}>{form.pending ? "Sending…" : kind === "contact" ? "Send a note →" : "Join the list →"}</button>
  </fieldset>;
}
