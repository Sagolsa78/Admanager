"use client";

import { motion } from "framer-motion";
import {
  Zap,
  LayoutTemplate,
  Search,
  Star,
  Download,
  LayoutDashboard,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Brand DNA Analysis",
    desc: "AI-powered engine analyzes everything visible on your domains.",
  },
  {
    icon: <LayoutTemplate className="h-6 w-6 text-primary" />,
    title: "5 Context Variations",
    desc: "We generate five distinct structural formats of your positioning.",
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "LinkedIn + Web Scraping",
    desc: "Pulls the most up-to-date information directly from your presence.",
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Rating & Feedback Loop",
    desc: "Refine results interactively and give feedback for better subsequent outputs.",
  },
  {
    icon: <Download className="h-6 w-6 text-primary" />,
    title: "One-Click Export",
    desc: "Generate beautiful PDF reports of your contexts immediately.",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
    title: "Dashboard History",
    desc: "Manage, revisit, and turn your contexts into kanban campaigns.",
  },
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="py-24 bg-[#161616]/50 border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Core Capabilities
          </h2>
          <p className="text-text-secondary">
            Everything you need to map out your brand&apos;s core positioning
            entirely automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#161616] hover:bg-[#1F1F1F] transition-colors border-[#2A2A2A]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
