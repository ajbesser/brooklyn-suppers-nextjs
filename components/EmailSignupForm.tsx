"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { FormFields, useSiteForm } from "@/components/FormFields";

export function EmailSignupForm({ ringOffsetColor = "var(--color-cream)", standalone = false }: { ringOffsetColor?: string; standalone?: boolean }) {
  const statusRef = useRef<HTMLParagraphElement>(null);
  const form = useSiteForm("newsletter");
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const containTab = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const items = [...event.currentTarget.querySelectorAll<HTMLElement>('button, input, textarea, select, a[href], [tabindex="0"]')].filter((element) => element.getClientRects().length > 0 && !element.matches(":disabled"));
    const first = items[0];
    const last = items.at(-1);
    if ((!event.shiftKey && document.activeElement === last) || (event.shiftKey && document.activeElement === first)) {
      event.preventDefault();
      (event.shiftKey ? last : first)?.focus();
    }
  };

  useEffect(() => {
    if (!showModal || form.complete) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Native modal dialogs contain focus, make the background inert, and enter
    // the top layer even inside a transformed reveal/hero ancestor.
    dialog.showModal();
    dialog.querySelector<HTMLInputElement>('[name="firstName"]')?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; if (dialog.open) dialog.close(); };
  }, [showModal, form.complete]);

  useEffect(() => { if (form.complete) statusRef.current?.focus(); }, [form.complete]);

  if (form.complete) return <p ref={statusRef} tabIndex={-1} role="status" className="text-[18px] leading-relaxed">{form.message}</p>;

  const details = <form action="/api/newsletter" method="post" noValidate onSubmit={form.submit} aria-label="Mailing list details" aria-busy={form.pending}>
    <FormFields kind="newsletter" form={form} />
    {form.message && <p role="alert" className="mt-4 text-[16px]">{form.message}</p>}
    <p className="mt-4 text-[16px] leading-relaxed">Joining the list doesn&apos;t reserve a seat. Questions or missed an invitation? <Link className="underline" href="/contact">Send Alex a note.</Link></p>
    <noscript><p>Your browser will open a confirmation page after you submit.</p></noscript>
  </form>;

  if (standalone) return details;

  return <>
    <form action="/join" method="get" onSubmit={(event) => { event.preventDefault(); setShowModal(true); }} aria-label="Join the mailing list" className="flex gap-2 flex-wrap sm:flex-nowrap" style={{ "--form-ring-offset": ringOffsetColor } as React.CSSProperties}>
      {/* No name on this input: the no-JS GET fallback must not leak email in a URL. */}
      <input type="email" aria-label="Email address" autoComplete="email" value={form.fields.email || ""} onChange={(event) => form.setField("email", event.target.value)} placeholder="your@email.com" required maxLength={254} className="site-input flex-1 min-w-0 !rounded-full" />
      <button ref={triggerRef} type="submit" className="site-button shrink-0">Hear first →</button>
    </form>
    {!showModal && form.message && <p role="alert" className="mt-4 text-[16px]">{form.message}</p>}
    {showModal && <dialog ref={dialogRef} onKeyDown={containTab} aria-labelledby={titleId} aria-describedby={descriptionId} className="signup-dialog on-light" onClose={() => { setShowModal(false); triggerRef.current?.focus(); }} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      <div className="p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 id={titleId} className="text-[26px] leading-tight">A couple quick details</h2>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close signup details" className="min-w-11 min-h-11 rounded-full text-[24px] focus-visible:outline-2">×</button>
        </div>
        <p id={descriptionId} className="mb-5 text-[16px] leading-relaxed">Your first and last name help me greet you properly. Dietary notes are optional.</p>
        {details}
      </div>
    </dialog>}
  </>;
}
