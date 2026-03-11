"use client";

import React, { useEffect, useRef } from "react";

const features = [
  {
    title: "Deep Brand DNA Extraction",
    description:
      "Unlike generic ChatGPT prompts, our scrape-and-analyze engine pulls the exact vocabulary, tone, and proof points from your live website.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    span: "md:col-span-2",
    bg: "bg-[#EFF6FF]",
    color: "text-[#2E7EF5]",
  },
  {
    title: "LinkedIn Sync",
    description:
      "Connect your profile to capture your authentic voice and recent updates automatically.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    span: "md:col-span-1",
    bg: "bg-[rgba(219,39,119,0.1)]",
    color: "text-[#DB2777]",
  },
  {
    title: "10+ Templates",
    description:
      'Turn one context into "Myth vs Reality", "Step-by-Step", or "Behind the Scenes" formats.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    span: "md:col-span-1",
    bg: "bg-[rgba(16,185,129,0.1)]",
    color: "text-[#059669]",
  },
  {
    title: "Instant Image Prompts & PDFs",
    description:
      "We don't just write text. We generate the perfect Midjourney prompts for your carousel slides and allow 1-click PDF exports for immediate posting.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    span: "md:col-span-2",
    bg: "bg-[#FFF7ED]",
    color: "text-[#EA580C]",
  },
];

export default function FeaturesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 bg-[#F8FAFC] border-t border-black/5"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="fade-up mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(139,92,246,0.06)] text-[#7C3AED] rounded-full text-[11px] font-bold font-display w-fit mb-4">
            Core Features
          </div>
          <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold text-[#0D0F1C] tracking-[-0.03em] font-display max-w-[500px] leading-[1.2]">
            Everything you need to automate your social presence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`fade-up bg-white rounded-[24px] p-8 border border-[#F0F2F5] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group flex flex-col ${feature.span}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:-rotate-3 ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-[1.25rem] font-bold text-[#0D0F1C] mb-2.5 font-display">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed font-body text-[0.9rem] max-w-[90%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
