import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <div style={{ background: "#faf6ee", minHeight: "100vh" }}>
      <Nav />
      <div className="flex flex-col items-center justify-center px-6 text-center" style={{ minHeight: "100vh" }}>
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
          className="text-[22px] mb-4"
        >
          lost at the table
        </p>
        <h1
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#2a1f16",
            letterSpacing: "-1px",
            lineHeight: "1.1",
          }}
          className="text-[clamp(48px,6vw,72px)] font-normal mb-6"
        >
          This page doesn&apos;t exist.
        </h1>
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.7" }}
          className="text-[18px] max-w-[480px] mb-10"
        >
          The seat you&apos;re looking for isn&apos;t here. Head back to the table.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[17px] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "#2a1f16",
            color: "#f4eee2",
          }}
        >
          Back to Brooklyn Suppers →
        </Link>
      </div>
    </div>
  );
}
