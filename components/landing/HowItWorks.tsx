"use client";

import React, { useEffect, useRef } from "react";

const steps = [
  {
    num: 1,
    title: "Enter your website URL",
    description:
      "Our AI engine scans your domain, reading your homepage, about page, and case studies to extract your positioning and brand DNA automatically.",
    color: "bg-violet",
  },
  {
    num: 2,
    title: "Review your brand contexts",
    description:
      "We generate 5 distinct angles and frameworks based on your DNA (e.g., Problem-Solution, Founder's Origin). Pick the one that resonates most.",
    color: "bg-[#8B5CF6]",
  },
  {
    num: 3,
    title: "Generate and schedule",
    description:
      "Select your desired format—LinkedIn carousel, Twitter thread, or Blog post. Hit generate, and your 100% on-brand content is ready to publish.",
    color: "bg-[#10B981]",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="py-20 bg-white border-t border-black/5"
    >
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="fade-up text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(46,126,245,0.06)] text-violet rounded-full text-[11px] font-bold font-display w-fit mb-4 mx-auto">
            How it works
          </div>
          <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold text-ink tracking-[-0.03em] font-display leading-[1.2]">
            From URL to content in 3 steps
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="fade-up flex items-start gap-8 mb-12 last:mb-0 group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${step.color} text-white flex items-center justify-center text-[16px] font-bold shrink-0 shadow-md relative`}
              >
                {step.num}
                {idx !== steps.length - 1 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-violet/20 to-transparent"></div>
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="text-[1.15rem] font-bold text-ink mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-ink2 leading-relaxed font-body text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
