import { ContentPage } from "@/components/ContentPage";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Join the list — Brooklyn Suppers", "Hear first by email when the next Brooklyn Supper opens.", "/join");

export default function JoinPage() {
  return <ContentPage title="Hear about the next supper.">
    <p>Leave your name and email. You&apos;ll receive a confirmation email before joining the list.</p>
    <EmailSignupForm standalone />
  </ContentPage>;
}
