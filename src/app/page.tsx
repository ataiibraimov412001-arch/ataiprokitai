import { Hero } from "@/components/site/hero";
import {
  ParticleShowcase,
  Services,
  About,
  WhyUs,
  Reviews,
  Faq,
  Contact,
  FinalCta,
  Footer,
} from "@/components/site/sections";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ParticleShowcase />
      <Services />
      <About />
      <WhyUs />
      <Reviews />
      <Faq />
      <Contact />
      <FinalCta />
      <Footer />
    </main>
  );
}
