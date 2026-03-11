"use client";

import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Jenks",
    role: "Founder, TechFlow",
    headline: "Transformed our content",
    text: "It completely transformed how we create content! The analysis precision is impressive, and output organization is perfect. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "B2B Consultant",
    headline: "2 minutes instead of 2 hours",
    text: "Usually I’d need hours just to draft a decent carousel for LinkedIn. Now it’s just 2 minutes of AdForge, and it sounds exactly like my brand.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Growth",
    headline: "Essential tool for teams",
    text: "I use it everyday. It is an essential tool in the toolkit of our marketing team. Extremely powerful at keeping our messaging consistent.",
  },
];

export default function Testimonials() {
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
      ref={sectionRef}
      className="py-20 bg-white border-t border-black/5"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="fade-up text-center mb-12">
          <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold text-[#0D0F1C] tracking-[-0.03em] font-display">
            Loved by founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((tm, idx) => (
            <div
              key={idx}
              className="fade-up bg-white rounded-[24px] p-7 border border-[#F0F2F5] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
            >
              <div className="text-[#F59E0B] tracking-[2px] text-[12px] mb-2.5">
                ★★★★★
              </div>
              <h4 className="font-bold text-[1.05rem] text-ink font-display mb-1.5">
                {tm.headline}
              </h4>
              <p className="text-ink2 text-[0.85rem] leading-relaxed font-body italic mb-6 flex-1">
                "{tm.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-surf"></div>
                <div>
                  <div className="font-bold text-[0.85rem] text-ink font-display">
                    {tm.name}
                  </div>
                  <div className="text-[0.75rem] text-ink3 font-display">
                    {tm.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
