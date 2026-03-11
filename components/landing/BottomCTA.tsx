"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function BottomCTA() {
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
    <section ref={sectionRef} className="px-8 py-12 md:py-24 bg-white">
      <div className="fade-up max-w-[1000px] mx-auto text-center py-12 px-8 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-[28px] shadow-[0_24px_60px_rgba(49,46,129,0.15)] relative overflow-hidden">
        {/* Abstract glow */}
        <div className="absolute top-[-40%] left-[-15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_60%)] rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold text-white tracking-[-0.03em] mb-4 font-display">
            Ready to decode your brand?
          </h2>
          <p className="text-[#C7D2FE] text-[1rem] mb-8 font-display max-w-[440px] mx-auto opacity-80">
            No account required to analyze. Just drop your URL and see the
            magic.
          </p>
          <Link
            href="/wizard"
            className="inline-flex items-center gap-3 bg-white text-[#312E81] font-extrabold font-display px-10 py-4 rounded-xl shadow-lg text-[1rem] transition-transform hover:-translate-y-1"
          >
            Start for free
          </Link>
        </div>
      </div>
    </section>
  );
}
