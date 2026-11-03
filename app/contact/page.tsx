import { ContentPage } from "@/components/ContentPage";
import { contactSettings } from "@/lib/contact";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = pageMetadata("Contact — Brooklyn Suppers", "Questions about a dinner or the supper club? Get in touch with Brooklyn Suppers.", "/contact");

export default function ContactPage() {
  const enabled = Boolean(contactSettings());
  return <ContentPage title={enabled ? "Send me a note." : "Get in touch."}>
    {enabled ? <>
    <p>Questions about a dinner, working together, or just want to say hi? I read every note and will reply as soon as I can.</p>
    <p>You can also message <a className="underline" href={site.instagramUrl}>{site.instagramHandle} on Instagram</a>.</p>
    <ContactForm />
    </> : <>
      <p>The contact form is temporarily unavailable.</p>
      <p>For dinner questions, message <a className="underline" href={site.instagramUrl}>{site.instagramHandle} on Instagram</a>.</p>
    </>}
  </ContentPage>;
}
