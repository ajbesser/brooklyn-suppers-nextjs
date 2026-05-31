export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className="inline-flex items-baseline gap-1.5 whitespace-nowrap"
      aria-label="Brooklyn Suppers"
    >
      <span
        style={{
          fontFamily: "var(--font-newsreader)",
          color: "#2a1f16",
          letterSpacing: "0",
        }}
        className={compact ? "text-[17px]" : "text-[19px]"}
      >
        Brooklyn
      </span>
      <span
        style={{
          fontFamily: "var(--font-kalam)",
          color: "#a04e33",
          letterSpacing: "0",
        }}
        className={compact ? "text-[16px]" : "text-[18px]"}
      >
        Suppers
      </span>
    </span>
  );
}
