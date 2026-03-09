"use client";

import { useAppStore } from "@/lib/store";
import { URLForm } from "@/components/analyse/URLForm";
import { LoadingOrb } from "@/components/analyse/LoadingOrb";
import { ContextCard } from "@/components/analyse/ContextCard";
import { ExportBar } from "@/components/analyse/ExportBar";
import { motion, AnimatePresence } from "framer-motion";

export default function AnalysePage() {
  const analysePhase = useAppStore((state) => state.analysePhase);
  const contexts = useAppStore((state) => state.contexts);

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col relative pb-32 pt-12 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {analysePhase === "input" && (
            <motion.div
              key="input"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-center justify-center min-h-[60vh]"
            >
              <URLForm />
            </motion.div>
          )}

          {analysePhase === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex items-center justify-center min-h-[60vh]"
            >
              <LoadingOrb />
            </motion.div>
          )}

          {analysePhase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl font-display font-bold text-white mb-2">
                  Analysis Complete
                </h1>
                <p className="text-text-secondary">
                  Here are 5 unique positioning contexts mapped from your Brand
                  DNA.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                {contexts.map((ctx, index) => (
                  <div
                    key={ctx.id}
                    className={
                      index === 4
                        ? "md:col-span-2 md:max-w-2xl md:mx-auto w-full"
                        : ""
                    }
                  >
                    <ContextCard context={ctx} index={index} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {analysePhase === "results" && <ExportBar />}
      </AnimatePresence>
    </div>
  );
}
