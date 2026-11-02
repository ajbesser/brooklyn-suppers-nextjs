import { ContentPage } from "@/components/ContentPage";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = pageMetadata("Contact Alex — Brooklyn Suppers", "Questions about a dinner or want to say hello? Send Alex a note.", "/contact");

export default function ContactPage() {
  return <ContentPage title="Send me a note.">
    <p>Questions about a dinner, working together, or just want to say hi? I read every note and will reply as soon as I can.</p>
    <p>Prefer your own email? <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
    <ContactForm />
  </ContentPage>;
}
