"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useAppStore } from "@/lib/store";

const STATUS_MESSAGES = [
  "Scanning your website...",
  "Reading LinkedIn profile...",
  "Extracting brand signals...",
  "Mapping positioning angles...",
  "Generating 5 contexts...",
];

export function LoadingOrb() {
  const [messageIndex, setMessageIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const currentJobId = useAppStore((state) => state.currentJobId);
  const setAnalysePhase = useAppStore((state) => state.setAnalysePhase);
  const setContexts = useAppStore((state) => state.setContexts);

  // Cycle messages
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Fake progress bar for visual feedback
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (40000 / 100), 95)); // Slowly reach 95% over 40s
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Poll status
  useQuery({
    queryKey: ["analysis", currentJobId],
    queryFn: async () => {
      if (!currentJobId) return null;
      const res = await fetch(`/api/analyse?jobId=${currentJobId}`);
      const data = await res.json();

      if (data.status === "complete") {
        setProgress(100);
        setContexts(data.contexts);
        setTimeout(() => setAnalysePhase("results"), 500); // Small delay to show 100%
      }
      return data;
    },
    refetchInterval: (query) =>
      query.state.data?.status === "complete" ? false : 3000,
    enabled: !!currentJobId,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="relative w-40 h-40 flex items-center justify-center mb-12">
        {/* Core glowing orb */}
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-[#FF8A50] blur-md z-10" />

        {/* Pulsing rings */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/50 mix-blend-screen"
            style={{
              width: "80px",
              height: "80px",
              animation: `pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(3); opacity: 0; border-width: 2px; }
          }
        `,
          }}
        />
      </div>

      <div className="h-8 relative w-full max-w-sm flex items-center justify-center mb-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg font-display text-white absolute"
          >
            {STATUS_MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="w-full max-w-md flex flex-col items-center">
        <div className="w-full h-[2px] bg-surface-2 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-text-secondary">
          Usually takes 20–40 seconds
        </p>
      </div>
    </div>
  );
}
