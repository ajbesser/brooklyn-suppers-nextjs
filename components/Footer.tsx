import Link from "next/link";
import { BackToTop } from "@/components/BackToTop";

export function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{ borderTop: "1px solid rgba(42,31,22,0.1)", background: "#f4eee2" }}
    >
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <p
            style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16" }}
            className="text-[18px] mb-1"
          >
            Brooklyn Suppers
          </p>
          <p
            style={{ fontFamily: "var(--font-newsreader)", color: "#574638", fontStyle: "italic" }}
            className="text-[15px] mb-3"
          >
            A long dinner, once a month, in Brooklyn.
          </p>
          <Link
            href="/dinners"
            style={{ fontFamily: "var(--font-newsreader)", color: "#574638" }}
            className="text-[14px] hover:text-[#2a1f16] transition-colors"
          >
            Past dinners →
          </Link>
        </div>

        <nav aria-label="Footer" style={{ fontFamily: "var(--font-newsreader)", color: "#574638" }} className="text-[15px] md:text-right">
          <ul className="space-y-1.5 list-none">
            <li>
              <a
                href="https://instagram.com/brooklynsuppers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a1f16] transition-colors"
              >
                Instagram — @brooklynsuppers
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@brooklynsuppers.com"
                className="hover:text-[#2a1f16] transition-colors"
              >
                hello@brooklynsuppers.com
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 pt-3 md:justify-end">
            <p style={{ color: "#6f5f51" }} className="text-[13px]">
              © 2026
            </p>
            <BackToTop />
          </div>
        </nav>
      </div>
    </footer>
  );
}
