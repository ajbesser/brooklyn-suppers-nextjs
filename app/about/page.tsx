import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About Alex — Brooklyn Suppers", "Meet Alex, the home cook behind Brooklyn Suppers, a monthly supper club in his Brooklyn apartment.", "/about");

export default function AboutPage() {
  return <ContentPage title="Hi, I'm Alex.">
    <p>Hi, I&apos;m Alex. I&apos;m a home cook in Brooklyn.</p>
    <p>Brooklyn Suppers began as a cooking project during the pandemic in 2020, when I set out to cook recipes from all over the world. In January 2023 it grew into a supper club, a way to build connections around food and to learn about, and feel closer to, different cultures through what we eat.</p>
    <p>Once a month I host a group dinner in my apartment. I plan the menu based on what&apos;s in season and what cuisines I&apos;m feeling inspired by in the moment.</p>
    <p>If you&apos;d like to come, <Link className="underline" href="/#save-a-seat">join the list</Link> and you&apos;ll get first notice by email when the next dinner opens.</p>
  </ContentPage>;
}
