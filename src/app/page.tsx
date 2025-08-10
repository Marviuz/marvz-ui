import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { LandingCTA } from '~/components/landing/cta';
import { LandingFeatures } from '~/components/landing/features';
import { LandingHero } from '~/components/landing/hero';
import { LandingTestimonial } from '~/components/landing/testimonial';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <LandingHero />
        <LandingFeatures />
        <LandingTestimonial />
        <LandingCTA />
      </main>
      <Footer />
    </>
  );
}
