import Link from "next/link";
import { BackToTop } from "@/components/BackToTop";
import { BrandWordmark } from "@/components/BrandWordmark";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="on-green px-6 py-12"
      style={{ borderTop: "6px solid #5b1f26", background: "#093525" }}
    >
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <div className="mb-1">
            <BrandWordmark />
          </div>
          <p
            style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)", fontStyle: "italic" }}
            className="text-[15px] mb-3"
          >
            A long dinner, once a month, in Brooklyn.
          </p>
          <Link
            href="/dinners"
            style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)" }}
            className="text-[14px] hover:text-[var(--color-dark)] transition-colors"
          >
            Past dinners →
          </Link>
        </div>

        <nav aria-label="Footer" style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)" }} className="text-[15px] md:text-right">
          <ul className="space-y-1.5 list-none">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-dark)] transition-colors"
              >
                Instagram — @brooklynsuppers
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-[var(--color-dark)] transition-colors"
              >
                {site.email}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 pt-3 md:justify-end">
            <p style={{ color: "var(--color-muted)" }} className="text-[13px]">
              © 2026
            </p>
            <BackToTop />
          </div>
        </nav>
      </div>
    </footer>
  );
}
