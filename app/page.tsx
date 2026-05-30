import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Menus } from "@/components/Menus";
import { WhatToExpect } from "@/components/WhatToExpect";
import { SaveASeat } from "@/components/SaveASeat";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <WhatToExpect />
        <Menus />
        <SaveASeat />
      </main>
      <Footer />
    </>
  );
}
