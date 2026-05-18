import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { FeatureRow } from '@/components/FeatureRow';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <section id="features" className="scroll-mt-20">
          <BentoGrid />
          <FeatureRow />
        </section>
        <section id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </section>
        <section id="pricing" className="scroll-mt-20">
          <Pricing />
        </section>
      </main>
      <Footer />
    </>
  );
}
