import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Menus } from "@/components/Menus";
import { WhatToExpect } from "@/components/WhatToExpect";
import { SaveASeat } from "@/components/SaveASeat";
import { Footer } from "@/components/Footer";
import { RevealSection } from "@/components/RevealSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <RevealSection>
          <About />
        </RevealSection>
        <RevealSection delay={100}>
          <WhatToExpect />
        </RevealSection>
        <RevealSection>
          <Menus />
        </RevealSection>
        <RevealSection delay={100}>
          <SaveASeat />
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
