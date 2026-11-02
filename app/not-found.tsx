import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <div style={{ background: "#fafaf5", minHeight: "100vh" }}>
      <Nav />
      <div className="flex flex-col items-center justify-center px-6 text-center" style={{ minHeight: "100vh" }}>
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#0c5a3c" }}
          className="text-[22px] mb-4"
        >
          lost at the table
        </p>
        <h1
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#0c1f17",
            letterSpacing: "-1px",
            lineHeight: "1.1",
          }}
          className="text-[clamp(48px,6vw,72px)] font-normal mb-6"
        >
          This page doesn&apos;t exist.
        </h1>
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#3f4f46", lineHeight: "1.7" }}
          className="text-[18px] max-w-[480px] mb-10"
        >
          The seat you&apos;re looking for isn&apos;t here. Head back to the table.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[17px] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafaf5]"
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "#0c1f17",
            color: "#eef2ea",
          }}
        >
          Back to Brooklyn Suppers →
        </Link>
      </div>
    </div>
  );
}
