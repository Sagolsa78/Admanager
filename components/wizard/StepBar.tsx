"use client";

import React from "react";
import Link from "next/link";

const steps = [
  { n: 1, l: "URL" },
  { n: 2, l: "Analyse" },
  { n: 3, l: "Results" },
  { n: 4, l: "Context" },
  { n: 5, l: "Template & Options" },
  { n: 6, l: "Generate" },
  { n: 7, l: "Output" },
];

interface StepBarProps {
  currentStep: number;
}

export default function StepBar({ currentStep }: StepBarProps) {
  return (
    <div className="w-full bg-white z-[100] sticky top-0 border-b border-border shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      {/* Wizard Navbar */}
      <div className="w-full h-[64px] flex items-center justify-between px-8 border-b border-border/60">
        <Link href="/" className="text-[22px] font-extrabold text-ink tracking-[-0.5px] font-display">
          Ad<span className="text-violet">Forge</span>
        </Link>
        <Link href="/signup" className="px-5 py-2.5 text-[13px] font-extrabold text-violet border-2 border-violet/20 bg-violet/5 rounded-xl hover:bg-violet hover:text-white transition-all font-display">
          Sign Up
        </Link>
      </div>

      {/* Step Bar Tracker */}
      <div className="max-w-[1240px] mx-auto px-6 py-5 relative">
        <div className="flex justify-between items-center relative z-10 px-2 lg:px-6">
          
          {/* Background Grey Line */}
          <div className="absolute left-[5%] right-[5%] top-1/2 -translate-y-1/2 h-[2px] bg-border -z-10" />
          
          {/* Active Green Line */}
          <div 
            className="absolute left-[5%] top-1/2 -translate-y-1/2 h-[2px] bg-emerald transition-all duration-500 -z-10"
            style={{ width: `calc(${(currentStep - 1) / (steps.length - 1) * 90}%)` }} 
          />

          {steps.map((s) => {
            const isCompleted = s.n < currentStep;
            const isActive = s.n === currentStep;

            return (
              <div key={s.n} className="flex items-center gap-2.5 bg-white px-3 relative">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-violet text-white shadow-lg shadow-violet/20"
                      : isCompleted
                        ? "bg-emerald/10 border-2 border-emerald text-emerald"
                        : "bg-surf border-2 border-border text-ink3"
                  }`}
                >
                  {isCompleted ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    s.n
                  )}
                </div>
                <span className={`text-[13px] font-bold font-display whitespace-nowrap transition-colors duration-300 hidden sm:block ${
                  isActive
                    ? "text-violet"
                    : isCompleted
                      ? "text-emerald"
                      : "text-ink3"
                }`}>
                  {s.l}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
