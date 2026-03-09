"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";

export function Hero() {
  const [demoOpen, setDemoOpen] = React.useState(false);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-12 pb-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 max-w-xl"
          >
            <Badge
              variant="outline"
              className="border-primary/50 text-white bg-primary/10 px-3 py-1"
            >
              🚀 NOW IN PUBLIC BETA
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight">
              Extract your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF8A50]">
                Brand DNA
              </span>{" "}
              in seconds.
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              AdForge analyzes your website and LinkedIn to generate 5 powerful
              positioning contexts. Rate, edit, export, and deploy campaigns
              instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link href="/sign-up">
                <Button size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setDemoOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8 text-sm text-text-secondary">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-surface-2 flex items-center justify-center text-[10px] text-white"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <p>Join 2,000+ marketers already building on AdForge.</p>
            </div>
          </motion.div>

          {/* Right: Mockup Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
          >
            {/* The live simulated dashboard/queue */}
            <div className="w-full max-w-lg aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-surface border border-border rounded-xl shadow-glow overflow-hidden flex flex-col">
              {/* Mockup Topbar */}
              <div className="h-12 border-b border-border flex items-center px-4 justify-between bg-surface-2/50 backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="h-4 w-24 bg-border rounded" />
              </div>

              {/* Mockup Content */}
              <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
                <div className="h-8 w-48 bg-surface-2 animate-pulse rounded" />

                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                    className="p-4 rounded-lg border border-border bg-surface-2 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-mono text-xs font-bold">
                      0{i}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-border rounded w-3/4" />
                      <div className="h-3 bg-border rounded w-1/2" />
                    </div>
                  </motion.div>
                ))}

                {/* Floating analyze button in mockup */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  className="absolute bottom-6 right-6"
                >
                  <Button
                    size="icon"
                    className="rounded-full h-12 w-12 shadow-lg shadow-primary/20"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4V20M20 12H4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={demoOpen} onClose={() => setDemoOpen(false)}>
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
          <p className="text-text-secondary">Demo video placeholder</p>
        </div>
      </Modal>
    </section>
  );
}
