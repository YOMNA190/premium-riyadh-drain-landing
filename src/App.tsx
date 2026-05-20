import { useScrollReveal } from './hooks/useScrollReveal';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import BeforeAfter from './sections/BeforeAfter';
import CoverageAreas from './sections/CoverageAreas';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import CTABanner from './sections/CTABanner';
import Footer from './sections/Footer';
import StickyMobileCTA from './sections/StickyMobileCTA';

export default function App() {
  useScrollReveal(0.15);

  return (
    <div className="min-h-screen bg-dark-bg" dir="rtl" lang="ar">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <CoverageAreas />
        <Reviews />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
