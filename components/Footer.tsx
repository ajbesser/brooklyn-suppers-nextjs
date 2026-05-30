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
            className="text-[15px] mb-1"
          >
            A long dinner, once a month, in Brooklyn.
          </p>
        </div>

        <div
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638" }}
          className="text-[15px] space-y-1.5 text-right"
        >
          <p>
            <a
              href="https://instagram.com/brooklynsuppers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2a1f16] transition-colors"
            >
              Instagram — @brooklynsuppers
            </a>
          </p>
          <p>
            <a
              href="mailto:hello@brooklynsuppers.com"
              className="hover:text-[#2a1f16] transition-colors"
            >
              hello@brooklynsuppers.com
            </a>
          </p>
          <p style={{ color: "#6f5f51" }} className="text-[13px] pt-2">
            © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
