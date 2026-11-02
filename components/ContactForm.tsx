"use client";

import { useEffect, useRef } from "react";
import { FormFields, useSiteForm } from "@/components/FormFields";

export function ContactForm() {
  const statusRef = useRef<HTMLParagraphElement>(null);
  const form = useSiteForm("contact");
  useEffect(() => { if (form.complete) statusRef.current?.focus(); }, [form.complete]);
  if (form.complete) return <p ref={statusRef} tabIndex={-1} role="status" className="text-[20px] leading-relaxed">{form.message}</p>;
  return <form action="/api/contact" method="post" noValidate onSubmit={form.submit} aria-label="Contact Alex" aria-busy={form.pending}>
    <FormFields kind="contact" form={form} />
    {form.message && <p role="alert" className="mt-4 text-[16px]">{form.message}</p>}
    <p className="mt-4 text-[16px] leading-relaxed">Your message goes straight to Alex&apos;s inbox and is only used to reply.</p>
  </form>;
}
