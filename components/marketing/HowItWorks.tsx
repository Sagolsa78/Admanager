"use client";

import { motion } from "framer-motion";
import { Link2, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Enter URLs",
    description: "Submit your website and LinkedIn profile.",
    icon: <Link2 className="h-6 w-6 text-primary" />,
  },
  {
    num: "02",
    title: "AI Analyses",
    description: "Our engine reads and extracts your brand signals.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
  },
  {
    num: "03",
    title: "5 Contexts Ready",
    description: "Get five distinct positioning angles instantly.",
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            How It Works
          </h2>
          <p className="text-text-secondary">
            From empty slate to comprehensive brand guidelines in less than a
            minute.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-border z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center mb-6 shadow-xl relative group-hover:border-primary/50 transition-colors">
                  <div className="absolute inset-2 rounded-full border border-dashed border-border/50 animate-[spin_10s_linear_infinite]" />
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
