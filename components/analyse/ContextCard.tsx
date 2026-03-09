"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, Edit2, Bookmark, Check, X } from "lucide-react";
import { ContextObject, useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ContextCardProps {
  context: ContextObject;
  index: number;
}

export function ContextCard({ context }: ContextCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const editingContextId = useAppStore((state) => state.editingContextId);
  const setEditingContextId = useAppStore((state) => state.setEditingContextId);
  const updateContext = useAppStore((state) => state.updateContext);

  const isEditing = editingContextId === context.id;
  const [editValue, setEditValue] = React.useState(context.body);

  const handleSaveEdit = () => {
    updateContext(context.id, { body: editValue });
    setEditingContextId(null);
  };

  const handleRating = (rating: number) => {
    updateContext(context.id, { rating });
  };

  const handleToggleSave = () => {
    updateContext(context.id, { saved: !context.saved });
    // In a real app we'd trigger POST /api/contexts/save here
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className={cn(
        "bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 flex flex-col space-y-4 hover:border-primary/30 transition-colors",
        context.saved &&
          "border-primary/50 shadow-[0_0_15px_rgba(232,80,10,0.05)]",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-[#E8500A] font-mono text-sm bg-[#E8500A]/10 px-2 py-0.5 rounded font-bold">
          {context.number}
        </div>
        <h3 className="font-display text-[20px] text-white font-semibold">
          {context.title}
        </h3>
      </div>

      <div className="flex-1 relative">
        {isEditing ? (
          <div className="space-y-3">
            <textarea
              className="w-full h-40 bg-[#1F1F1F] border border-[#2A2A2A] rounded-md p-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setEditingContextId(null)}
              >
                <X className="h-4 w-4 mr-1" /> Cancel
              </Button>
              <Button size="sm" onClick={handleSaveEdit}>
                <Check className="h-4 w-4 mr-1" /> Save text
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div
              className={cn(
                "text-sm text-[#A0A0A0] leading-relaxed",
                !expanded && "line-clamp-4",
              )}
            >
              {context.body.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            {context.body.length > 200 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-sm text-primary hover:underline font-medium"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 mt-auto border-t border-[#2A2A2A] flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleRating(star)}
              className="p-1 focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={star <= context.rating ? "#E8500A" : "transparent"}
                stroke={star <= context.rating ? "#E8500A" : "#2A2A2A"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="icon"
            size="icon"
            className="h-8 w-8 text-text-secondary hover:text-white"
            title="Thumbs Up"
          >
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button
            variant="icon"
            size="icon"
            className="h-8 w-8 text-text-secondary hover:text-error"
            title="Thumbs Down"
          >
            <ThumbsDown className="h-4 w-4" />
          </Button>
          <Button
            variant="icon"
            size="icon"
            className="h-8 w-8 text-text-secondary hover:text-white"
            onClick={() => setEditingContextId(context.id)}
            title="Edit"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="icon"
            size="icon"
            className={cn(
              "h-8 w-8",
              context.saved
                ? "text-primary"
                : "text-text-secondary hover:text-white",
            )}
            onClick={handleToggleSave}
            title={context.saved ? "Unsave" : "Save"}
          >
            <Bookmark
              className="h-4 w-4"
              fill={context.saved ? "currentColor" : "none"}
            />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
