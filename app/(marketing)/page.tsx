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
      <div className="container mx-auto px-4 md:px-8 pb-16">
        <div className="flex flex-wrap justify-between items-center gap-6 text-[18px] font-medium text-white max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-[#E8500A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="tracking-wide">30+ Posts Generated</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-[#E8500A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="tracking-wide">All Content Scheduled</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-[#E8500A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="tracking-wide">100% Automated</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-[#E8500A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="tracking-wide">100% Automated</span>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 text-xs tracking-wider text-[#A0A0A0] font-medium">
          <span className="w-4 h-[1px] bg-[#2A2A2A]"></span>
          Automated{" "}
          <span className="text-[#E8500A] font-semibold">
            Blogs, Social Media Posts & Scheduling
          </span>
          <span className="w-4 h-[1px] bg-[#2A2A2A]"></span>
        </div>
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
