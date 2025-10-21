import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="main-content" role="main">
        <Hero />
        <ValueProposition />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
