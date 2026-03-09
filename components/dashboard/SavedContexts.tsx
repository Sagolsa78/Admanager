"use client";

import * as React from "react";
import { ContextCard } from "@/components/analyse/ContextCard";
import { ContextObject } from "@/lib/store";

export function SavedContexts() {
  const [filter, setFilter] = React.useState("All");

  const mockSaved: ContextObject[] = [
    {
      id: "sav1",
      number: "01",
      title: "Direct Response",
      rating: 5,
      saved: true,
      body: "Are you struggling to capture high-quality leads?\n\nUnlike traditional agencies that focus on vanity metrics, our platform uses AI-driven persona mapping to deliver booked meetings in half the time.\n\nClick here to see how our clients scale effortlessly.",
    },
    {
      id: "sav2",
      number: "02",
      title: "Founder's Origin",
      rating: 4,
      saved: true,
      body: "I spent 5 years building something nobody wanted.\n\nThen I realized a fundamental truth about B2B growth: It's not about being louder, it's about being more precise.\n\nThat's why we built AdForge. It doesn't just treat the symptom of bad ads, it fixes the root cause of weak positioning.",
    },
    {
      id: "sav3",
      number: "03",
      title: "The Contrarian View",
      rating: 5,
      saved: true,
      body: "Most people think you need a massive ad budget to succeed in scaling your SaaS.\n\nThey're entirely wrong.\n\nThe data shows that strong, resonant Brand DNA is actually the fastest path to lowering CPA and increasing LTV.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {["All", "5 Stars", "4 Stars", "Direct Response"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-primary text-white"
                : "bg-[#1F1F1F] text-text-secondary hover:bg-surface-2 hover:text-white border border-[#2A2A2A]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSaved.map((ctx, index) => (
          <ContextCard key={ctx.id} context={ctx} index={index} />
        ))}
      </div>
    </div>
  );
}
