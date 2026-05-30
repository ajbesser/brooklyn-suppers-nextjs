"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
          style={{ background: "#faf6ee", fontFamily: "Georgia, serif" }}
        >
          <p style={{ color: "#a04e33", fontSize: "20px", marginBottom: "16px" }}>
            something went wrong
          </p>
          <h1
            style={{
              color: "#2a1f16",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 400,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            An unexpected error occurred.
          </h1>
          <p style={{ color: "#574638", fontSize: "18px", lineHeight: 1.7, marginBottom: "40px" }}>
            Something went wrong on our end. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#2a1f16",
              color: "#f4eee2",
              border: "none",
              borderRadius: "9999px",
              padding: "16px 32px",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
