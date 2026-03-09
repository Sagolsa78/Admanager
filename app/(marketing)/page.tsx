import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-primary px-4 py-3 text-center text-sm font-medium text-white flex justify-center items-center gap-6 overflow-hidden">
        <span className="whitespace-nowrap">30+ Posts Generated</span>
        <span className="opacity-50">•</span>
        <span className="whitespace-nowrap">All Content Scheduled</span>
        <span className="opacity-50">•</span>
        <span className="whitespace-nowrap">100% Automated</span>
      </div>
      <HowItWorks />
      <FeaturesGrid />

      {/* Pricing Teaser */}
      <section id="pricing" className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Simple Pricing
          </h2>
          <p className="text-text-secondary mb-12 max-w-xl mx-auto">
            Start for free, scale when you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <div className="border border-border bg-surface p-8 rounded-xl opacity-90">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-text-secondary mb-6">3 analyses per month</p>
              <div className="text-4xl font-bold mb-8">
                $0
                <span className="text-xl text-text-secondary font-normal">
                  /mo
                </span>
              </div>
              <button className="w-full py-3 rounded-md border border-border bg-transparent text-white font-semibold hover:bg-surface-2 transition">
                Start Free
              </button>
            </div>
            <div className="border border-primary bg-surface p-8 rounded-xl shadow-[0_0_30px_rgba(232,80,10,0.15)] relative scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
              <p className="text-text-secondary mb-6">
                Unlimited analyses + Export
              </p>
              <div className="text-4xl font-bold mb-8">
                $29
                <span className="text-xl text-text-secondary font-normal">
                  /mo
                </span>
              </div>
              <button className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition">
                Upgrade to Pro
              </button>
            </div>
            <div className="border border-border bg-surface p-8 rounded-xl opacity-90">
              <h3 className="text-2xl font-bold mb-2">Agency</h3>
              <p className="text-text-secondary mb-6">Custom white-labeling</p>
              <div className="text-4xl font-bold mb-8">
                $99
                <span className="text-xl text-text-secondary font-normal">
                  /mo
                </span>
              </div>
              <button className="w-full py-3 rounded-md border border-border bg-transparent text-white font-semibold hover:bg-surface-2 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
