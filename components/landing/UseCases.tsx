"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCyclingWords } from "@/hooks/useCyclingWords";

const useCases = [
  {
    title: "Founders & Startups",
    labels: ["brand positioning", "thought leadership", "investor presence", "content at scale"],
    desc: "Stop spending weekends writing posts. AdForge builds your brand voice and fills your content calendar automatically.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Marketing Teams",
    labels: ["campaign strategy", "multi-platform posts", "brand consistency", "bulk scheduling"],
    desc: "Generate a month of on-brand content across LinkedIn, X, Facebook, and your blog — in one session.",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    title: "Content Creators",
    labels: ["content pillars", "posting strategy", "audience growth", "creative variety"],
    desc: "Never stare at a blank page again. AdForge extracts your brand DNA and turns it into ready-to-post content.",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    title: "Agencies",
    labels: ["client brands", "bulk generation", "white-label reports", "PDF exports"],
    desc: "Run Brand DNA analysis and generate content for multiple clients. Export beautiful PDF reports in one click.",
    gradient: "from-orange-400 to-rose-500",
  },
];

export default function UseCases() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-[#0F172A]">
            Built for every kind of brand builder
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase, index }: { useCase: any; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const { currentWord } = useCyclingWords(useCase.labels, 2000);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group bg-white rounded-[2rem] border border-gray-100 shadow-sm p-4 transition-all duration-700 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className={`h-48 rounded-[1.5rem] bg-gradient-to-br ${useCase.gradient} mb-8 relative overflow-hidden`}>
         <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-sora font-bold text-[#0F172A]">{useCase.title}</h3>
        </div>
        
        <div className="h-6 mb-6 overflow-hidden">
          <div key={currentWord} className="text-sm font-bold text-[#2563EB] uppercase tracking-widest animate-reveal-text">
            {currentWord}
          </div>
        </div>
        
        <p className="text-[#64748B] leading-relaxed mb-6">
          {useCase.desc}
        </p>
      </div>

      <style jsx>{`
        @keyframes reveal-text {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-text {
          animation: reveal-text 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
