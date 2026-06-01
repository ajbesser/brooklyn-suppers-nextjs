// Env-driven announcement banner for the next dinner.
// Set in Vercel dashboard (no code deploy needed):
//   NEXT_PUBLIC_NEXT_DINNER_DATE  = "June 14"
//   NEXT_PUBLIC_NEXT_DINNER_SPOTS = "3"   (optional)
// Leave unset to hide the banner entirely.

import Link from "next/link";

export function DinnerBanner() {
  const date = process.env.NEXT_PUBLIC_NEXT_DINNER_DATE;
  const spots = process.env.NEXT_PUBLIC_NEXT_DINNER_SPOTS;

  if (!date) return null;

  return (
    <div
      className="w-full py-2.5 px-6 flex items-center justify-center gap-3 flex-wrap text-center"
      style={{ background: "var(--color-terracotta)" }}
      role="banner"
      aria-label="Next dinner announcement"
    >
      <p
        style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-cream)", lineHeight: "1.4" }}
        className="text-[14px]"
      >
        <span style={{ fontFamily: "var(--font-kalam)" }} className="text-[16px] mr-1">
          Next dinner:
        </span>{" "}
        {date}
        {spots && (
          <span style={{ color: "rgba(250,246,238,0.75)" }}>
            {" "}· {spots} {parseInt(spots) === 1 ? "spot" : "spots"} remaining
          </span>
        )}
        {" "}·{" "}
        <Link
          href="/#save-a-seat"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: "var(--color-cream)" }}
        >
          Join the list to hear first
        </Link>
      </p>
    </div>
  );
}
