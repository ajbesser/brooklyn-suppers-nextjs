import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function ContentPage({ title, children }: { title: string; children: ReactNode }) {
  return <><Nav /><main id="main-content" className="max-w-[720px] mx-auto px-6 pt-28 pb-20">
    <h1 className="text-[clamp(40px,7vw,60px)] leading-tight mb-8">{title}</h1>
    <div className="text-[18px] leading-relaxed space-y-6">{children}</div>
  </main><Footer /></>;
}
