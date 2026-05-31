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
          color: "#574638",
          letterSpacing: "0",
          lineHeight: 1,
        }}
        className={compact ? "text-[13px]" : "text-[15px]"}
      >
        brooklyn
      </span>
      <span
        aria-hidden="true"
        className={compact ? "h-1 w-1 rounded-full" : "h-1.5 w-1.5 rounded-full"}
        style={{ background: "#a04e33", transform: "translateY(1px)" }}
      />
      <span
        style={{
          fontFamily: "var(--font-newsreader)",
          color: "#2a1f16",
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
