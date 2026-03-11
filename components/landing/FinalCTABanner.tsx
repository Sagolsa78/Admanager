"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function FinalCTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto text-center py-20 px-8 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-radial-gradient from-indigo-500/20 to-transparent rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-sora font-extrabold text-white mb-6 tracking-tight">
            Ready to decode your brand?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-lg mx-auto font-inter">
            No account required to analyze. Just drop your URL and see the magic.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-white text-[#312E81] hover:bg-indigo-50 px-12 py-5 rounded-2xl font-bold text-xl shadow-xl transition-all hover:-translate-y-1 active:scale-95"
          >
            Start for free
          </Link>
        </div>
      </div>
    </section>
  );
}
