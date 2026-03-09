"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";

const filters = [
  "All",
  "LinkedIn Post",
  "Website Copy",
  "Ad Creative",
  "Email",
  "Blog",
];

const templates = [
  {
    id: 1,
    name: "The Thought Leader",
    category: "LinkedIn Post",
    locked: false,
    content:
      "Start with a contrarian hook. Break down the core problem. Provide a 3-step actionable framework based on your Brand DNA.",
  },
  {
    id: 2,
    name: "Direct Response Hero",
    category: "Website Copy",
    locked: false,
    content:
      "H1: Value Prop. Sub: How you solve the problem. Bullet constraints. Primary CTA.",
  },
  {
    id: 3,
    name: "Pain Point Agitator",
    category: "Ad Creative",
    locked: false,
    content:
      "Visual: Problem state. Text: Are you tired of [Pain]? Here's how [Brand] fixes it using [Mechanism].",
  },
  {
    id: 4,
    name: "The Founder Story",
    category: "Email",
    locked: true,
    content:
      "Origin story format. Why we built this. The specific moment we realized the industry was broken, mapped to your DNA.",
  },
  {
    id: 5,
    name: "Deep Dive Guide",
    category: "Blog",
    locked: true,
    content:
      "2000-word SEO structured post outlining the philosophy behind your product's approach.",
  },
  {
    id: 6,
    name: "Case Study Breakdown",
    category: "LinkedIn Post",
    locked: true,
    content:
      "How [Client] achieved [Result] using [Mechanism]. Step 1, Step 2, Step 3.",
  },
];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredTemplates = templates.filter(
    (t) => activeFilter === "All" || t.category === activeFilter,
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Output Templates
            </h1>
            <p className="text-lg text-text-secondary">
              Explore the structural formats your Brand DNA can be mapped into.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-text-secondary hover:bg-surface-2 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className="flex flex-col h-full hover:border-primary/50 transition-colors bg-[#161616]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-[#1F1F1F]">
                      {template.category}
                    </Badge>
                    {template.locked && (
                      <Badge
                        variant="outline"
                        className="border-warning/50 text-warning"
                      >
                        <Lock className="w-3 h-3 mr-1" /> Pro
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="p-4 bg-[#1F1F1F] rounded-md border border-[#2A2A2A] text-sm text-text-secondary font-mono leading-relaxed relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F1F1F] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {template.content}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={template.locked ? "secondary" : "primary"}
                  >
                    {template.locked
                      ? "Upgrade to Unlock"
                      : "Use This Template"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
