export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className="group inline-flex items-center gap-1.5 whitespace-nowrap"
      aria-label="Brooklyn Suppers"
    >
      <span
        style={{
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "var(--color-body)",
          letterSpacing: "0",
          lineHeight: 1,
          fontWeight: 600,
        }}
        className={compact ? "text-[14px]" : "text-[17px]"}
      >
        brooklyn
      </span>
      <span
        aria-hidden="true"
        className={compact ? "h-1 w-1 rounded-full" : "h-1.5 w-1.5 rounded-full"}
        style={{ background: "var(--color-terracotta)", transform: "translateY(1px)" }}
      />
      <span
        style={{
          fontFamily: "var(--font-newsreader)",
          color: "var(--color-dark)",
          letterSpacing: "0",
          lineHeight: 1,
          fontStyle: "italic",
        }}
        className={compact ? "text-[19px]" : "text-[22px]"}
      >
        suppers
      </span>
    </span>
  );
}
