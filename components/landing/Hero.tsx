"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const CYCLING_WORDS = [
  "social posts",
  "blog posts",
  "brand creatives",
  "LinkedIn content",
  "content calendar",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Cycling word animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        // Fade in
        setWordVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-visible pt-24 pb-20 bg-white">
      {/* Subtle background radial */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(46,126,245,0.04),transparent_70%)] rounded-full pointer-events-none" />

      <div
        className="max-w-[1280px] mx-auto w-full px-8 relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6 max-w-[38rem]">
            {/* Beta badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#E0EFFF] rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#2E7EF5] animate-pulse" />
              <span className="text-[12px] font-bold text-[#2E7EF5] uppercase tracking-wider">
                Now in Public Beta
              </span>
            </div>

            {/* Headline with cycling word */}
            <h1 className="text-[clamp(2.2rem,3.8vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0D0F1C]">
              Let <span className="text-[#2E7EF5]">AI</span> create &amp; post
              an <span className="text-[#2E7EF5]">entire month's</span>{" "}
              {/* Cycling word container — fixed height so layout never jumps */}
              <span
                className="inline-block relative"
                style={{ minWidth: "220px", verticalAlign: "bottom" }}
              >
                <span
                  className="text-[#0D9488]"
                  style={{
                    display: "inline-block",
                    opacity: wordVisible ? 1 : 0,
                    transform: wordVisible
                      ? "translateY(0)"
                      : "translateY(-12px)",
                    transition: "opacity 0.28s ease, transform 0.28s ease",
                  }}
                >
                  {CYCLING_WORDS[wordIndex]}
                </span>
              </span>{" "}
              in <span className="text-[#2E7EF5]">30 min.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[1.05rem] text-[#6B7280] leading-[1.65] max-w-[95%]">
              Simply enter your website URL, and our AI agent will generate,
              write, and schedule all your social media creatives, blog posts,
              and more.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/wizard"
                className="inline-flex items-center justify-center gap-2 bg-[#2E7EF5] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(46,126,245,0.2)] text-[1rem] transition-all hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(46,126,245,0.3)]"
              >
                Analyse My Brand →
              </Link>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-[#374151] font-semibold px-8 py-3.5 rounded-xl border border-[#E5E7EB] shadow-sm text-[1rem] transition-all hover:bg-[#F9FAFB]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Watch Demo
              </button>
            </div>

            <p className="text-[13px] font-semibold text-[#2E7EF5] mt-1 opacity-80">
              Automated Blogs, Social Media Posts &amp; Scheduling
            </p>
          </div>

          {/* ── Right Column — Dashboard Mockup ── */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="hero-mockup w-full max-w-[580px] bg-white rounded-[28px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-[#F0F2F5] overflow-hidden">
              {/* Browser chrome bar */}
              <div className="h-11 bg-[#F9FAFB] border-b border-[#F0F2F5] flex items-center px-5 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="flex h-[370px]">
                {/* Sidebar */}
                <div className="w-[155px] border-r border-[#F0F2F5] p-5 flex flex-col gap-5 shrink-0">
                  <div className="font-bold text-[15px] text-[#0D0F1C] mb-1">
                    AdForge
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-bold text-[#2E7EF5] flex items-center gap-1.5">
                      Post Queue
                    </div>
                    <div className="text-[13px] font-medium text-[#9BA1B0]">
                      Scheduled
                    </div>
                    <div className="text-[13px] font-medium text-[#9BA1B0]">
                      Analytics
                    </div>
                  </div>

                  {/* 30+ Posts badge */}
                  <div className="mt-auto bg-[#F5F8FF] border border-[#E0EFFF] rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white border border-[#E0EFFF] rounded flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 bg-[#2E7EF5] rounded-[2px]" />
                      </div>
                      <span
                        className="text-[11px] font-bold text-[#2E7EF5]"
                        style={{
                          animation: "subtlePulse 2s ease-in-out infinite",
                        }}
                      >
                        30+ Posts Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-5 flex flex-col gap-4 min-w-0">
                  {/* Day labels */}
                  <div className="flex justify-between text-[10px] font-bold text-[#9BA1B0] uppercase tracking-wider px-1">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>

                  {/* Post cards grid */}
                  <div className="grid grid-cols-5 gap-2.5">
                    {[
                      { name: "Brand DNA Post", color: "bg-[#6366F1]" },
                      { name: "New Feature", color: "bg-[#3B82F6]" },
                      { name: "Carousel", color: "bg-[#4B5563]" },
                      { name: "Blog Post", color: "bg-[#10B981]" },
                      { name: "LinkedIn Post", color: "bg-[#0EA5E9]" },
                    ].map((post, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-1.5 transition-transform hover:scale-105 cursor-default"
                      >
                        <div
                          className={`aspect-[4/3] rounded-lg ${post.color} shadow-sm`}
                        />
                        <div className="text-[9px] font-bold text-[#6B7280] leading-tight truncate">
                          {post.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Status banner */}
                  <div className="mt-auto bg-[#FFF4F0] border border-[#FFE0D5] rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2E7EF5] flex items-center justify-center shrink-0 shadow-md">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-extrabold text-[#0D0F1C]">
                        All your posts are ready!
                      </div>
                      <div className="text-[11px] font-medium text-[#FF6120]">
                        32 posts scheduled for this month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative card */}
            <div
              className="absolute -bottom-5 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-[#F0F2F5] flex items-center gap-3 z-20"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <div className="w-9 h-9 bg-[#EEF2FF] rounded-xl flex items-center justify-center shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E7EF5"
                  strokeWidth="2"
                >
                  <path d="M12 2v20" />
                  <path d="m17 5-5-3-5 3" />
                  <path d="m17 19-5 3-5-3" />
                </svg>
              </div>
              <div className="text-[12px] font-bold text-[#0D0F1C] leading-snug whitespace-nowrap">
                Positions analyzed in seconds
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes subtlePulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.65;
          }
        }
      `}</style>
    </section>
  );
}
