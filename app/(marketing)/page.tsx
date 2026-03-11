import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCases from "@/components/landing/UseCases";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import MidPageCTA from "@/components/landing/MidPageCTA";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTABanner from "@/components/landing/FinalCTABanner";
import Footer from "@/components/landing/Footer";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <UseCases />
        <FeaturesGrid />
        <MidPageCTA />
        <Testimonials />
        <FinalCTABanner />
      </main>
      <Footer />
    </div>
  );
}
