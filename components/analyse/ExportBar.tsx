"use client";

import * as React from "react";
import { MessageSquare, RefreshCw, FileText, SaveAll } from "lucide-react";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export function ExportBar() {
  const [feedbackOpen, setFeedbackOpen] = React.useState(false);
  const [feedbackText, setFeedbackText] = React.useState("");
  const [isExporting, setIsExporting] = React.useState(false);

  const resetAnalysis = useAppStore((state) => state.resetAnalysis);
  const contexts = useAppStore((state) => state.contexts);
  const currentJobId = useAppStore((state) => state.currentJobId);

  const handleSubmitFeedback = async () => {
    // Mock POST /api/feedback
    console.log("Submitting feedback:", feedbackText);
    setFeedbackOpen(false);
    setFeedbackText("");
    alert("Feedback submitted successfully.");
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const pdf = new jsPDF("p", "pt", "a4");

      pdf.setFontSize(24);
      pdf.setTextColor(232, 80, 10); // Primary orange
      pdf.text("AdForge - Brand DNA Contexts", 40, 60);

      pdf.setFontSize(12);
      pdf.setTextColor(150, 150, 150);
      pdf.text(`Job ID: ${currentJobId || "N/A"}`, 40, 80);

      let yOffset = 120;

      contexts.forEach((ctx) => {
        if (yOffset > 750) {
          pdf.addPage();
          yOffset = 60;
        }

        pdf.setFontSize(16);
        pdf.setTextColor(0, 0, 0);
        pdf.text(
          `${ctx.number}. ${ctx.title} (Rating: ${ctx.rating}/5)`,
          40,
          yOffset,
        );

        pdf.setFontSize(11);
        pdf.setTextColor(80, 80, 80);
        const splitText = pdf.splitTextToSize(ctx.body, 500);
        pdf.text(splitText, 40, yOffset + 24);

        yOffset += 40 + splitText.length * 15;
      });

      pdf.save(`AdForge_Contexts_${currentJobId}.pdf`);
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleSaveAll = () => {
    // Mock saving all
    alert("All 5 contexts saved to your dashboard!");
  };

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#161616]/90 backdrop-blur-md border-t border-[#2A2A2A] p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="container mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={() => setFeedbackOpen(true)}
            className="flex-1 sm:flex-none"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Submit Feedback</span>
            <span className="sm:hidden">Feedback</span>
          </Button>

          <Button
            variant="secondary"
            onClick={resetAnalysis}
            className="flex-1 sm:flex-none"
          >
            <RefreshCw className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Re-analyse</span>
          </Button>

          <Button
            variant="secondary"
            onClick={handleExportPDF}
            loading={isExporting}
            className="flex-1 sm:flex-none"
          >
            <FileText className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Export PDF</span>
          </Button>

          <Button onClick={handleSaveAll} className="flex-1 sm:flex-none">
            <SaveAll className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Save All to Dashboard</span>
            <span className="sm:hidden">Save All</span>
          </Button>
        </div>
      </motion.div>

      <Modal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        title="Submit Feedback"
        description="Help us improve our AI engine for your brand."
      >
        <div className="space-y-4">
          <textarea
            className="w-full h-32 bg-surface-2 border border-border rounded-md p-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            placeholder="Tell us what you liked or what could be improved..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setFeedbackOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmitFeedback}
              disabled={!feedbackText.trim()}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
