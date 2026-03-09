import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Database, FileText, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Features - AdForge",
  description: "Deep dive into AdForge's capabilities.",
};

const deepDives = [
  {
    title: "Analysis Engine",
    description:
      "Our proprietary AI models scan up to 50 pages of your website and read your entire LinkedIn profile history to extract the core signals of how you position your brand naturally.",
    icon: <Database className="h-12 w-12 text-primary mb-6" />,
    imagePlaceholder: "Analysis Engine Visualization",
  },
  {
    title: "Context Generation",
    description:
      "We don't just summarize. We take your raw brand DNA and map it into 5 proven structural formats tailored for ad platforms, web copy, and outbound outreach.",
    icon: <FileText className="h-12 w-12 text-primary mb-6" />,
    imagePlaceholder: "Context Generation Visualization",
  },
  {
    title: "Rating & Feedback Loop",
    description:
      "Rate the generated contexts from 1 to 5 stars. Edit them directly in the UI. Provide feedback, and re-run the analysis to get even sharper results tailored exactly to your liking.",
    icon: <ShieldCheck className="h-12 w-12 text-primary mb-6" />,
    imagePlaceholder: "Feedback Loop Visualization",
  },
  {
    title: "Dashboard & History",
    description:
      "Every context you generate and save is stored in your personal library. Turn those contexts into active campaigns using our built-in kanban board designed specifically for ad managers.",
    icon: <LayoutDashboard className="h-12 w-12 text-primary mb-6" />,
    imagePlaceholder: "Dashboard Visualization",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Deep Dive into AdForge
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Understand exactly how our engine maps your brand DNA and generates
            ready-to-use positioning contexts.
          </p>
          <Link href="/sign-up">
            <Button size="lg">Start Free Trial</Button>
          </Link>
        </div>
      </section>

      {/* Deep Dives */}
      <div className="bg-[#161616]">
        {deepDives.map((item, index) => (
          <section
            key={item.title}
            className={`py-24 ${index % 2 === 0 ? "bg-[#161616]" : "bg-[#0D0D0D]"}`}
          >
            <div
              className={`container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 !== 0 ? "md:col-start-2" : ""}>
                {item.icon}
                <h2 className="text-3xl font-bold font-display mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div
                className={`aspect-video bg-surface-2 border border-border rounded-xl shadow-glow flex items-center justify-center p-8 text-center ${index % 2 !== 0 ? "md:col-start-1" : ""}`}
              >
                <p className="text-text-secondary font-mono">
                  {item.imagePlaceholder}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Tech Trust */}
      <section className="py-24 bg-[#0D0D0D] border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-2xl font-bold font-display mb-12">
            Built on Trusted Infrastructure
          </h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
            <span className="text-2xl font-bold">OpenAI</span>
            <span className="text-2xl font-bold">LinkedIn API</span>
            <span className="text-2xl font-bold">Next.js 14</span>
            <span className="text-2xl font-bold">Supabase</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
            Ready to discover your Brand DNA?
          </h2>
          <Link href="/sign-up">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 border-transparent shadow-lg"
            >
              Analyze My Brand Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
