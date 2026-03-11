"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function MidPageCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-[#EFF6FF]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-[#0F172A] mb-6">
            Ready to automate your entire content pipeline?
          </h2>
          <p className="text-xl text-[#2563EB] font-bold mb-10 opacity-80">
            Enter your URL. Get 30+ posts ready in 30 minutes.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/10 transition-transform hover:scale-[1.05]"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  );
}
