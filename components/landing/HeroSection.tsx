"use client";

import { useCyclingWords } from "@/hooks/useCyclingWords";
import Link from "next/link";

export default function HeroSection() {
  const words = ["social posts", "blog posts", "brand creatives", "LinkedIn content", "content calendar"];
  const { currentWord, index } = useCyclingWords(words, 2500);

  return (
    <section className="pt-20 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-[10px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] mr-2 animate-pulse" />
            Now in public beta
          </div>

          <h1 className="text-6xl md:text-[76px] font-sora font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.03em]">
            Let <span className="text-[#2563EB]">AI</span> create & post <br />
            an <span className="text-[#2563EB]">entire month's</span> <br />
            <span className="relative inline-block h-[1.1em] min-w-[300px] overflow-hidden align-bottom text-[#2563EB]">
              <span
                key={currentWord}
                className="absolute left-0 bottom-0 animate-hero-word-in"
              >
                {currentWord}
              </span>
            </span>{" "}
            in <span className="text-[#2563EB]">30 min.</span>
          </h1>

          <p className="text-lg text-[#64748B] leading-relaxed max-w-xl font-inter">
            Simply enter your website URL, and our AI agent will generate, write, and schedule all
            your social media creatives, blog posts, and more.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/wizard"
              className="bg-[#2E7EF5] hover:bg-[#1D4ED8] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/10 transition-all hover:-translate-y-1 active:scale-95"
            >
              Try it for free
            </Link>
            <button className="flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg text-[#374151] bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-100 italic">
                <svg
                  className="w-5 h-5 text-[#374151] fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E0E7FF] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#3730A3] z-[3]">JD</div>
              <div className="w-8 h-8 rounded-full bg-[#FCE7F3] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#9D174D] z-[2]">AS</div>
              <div className="w-8 h-8 rounded-full bg-[#D1FAE5] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#065F46] z-[1]">MK</div>
            </div>
            <div className="text-sm text-[#6B7280]">
              <span className="font-bold text-[#0D0F1C]">1,200+ founders</span> saving hours daily
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Main Dashboard UI Mockup - Exact Match to Screenshot */}
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden flex animate-float-slow">
            {/* Sidebar */}
            <div className="w-48 bg-[#F9FAFB] border-r border-gray-100 p-8 flex flex-col space-y-10">
              <div className="text-sm font-sora font-extrabold text-[#0F172A]">AdForge</div>
              <div className="space-y-6 flex-1">
                <div className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest flex items-center gap-2">
                   Post Queue
                </div>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">
                  Scheduled
                </div>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">
                  Analytics
                </div>
              </div>
              <div className="mt-auto">
                 <div className="bg-white border border-[#DBEAFE] p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#2563EB] flex items-center justify-center">
                       <div className="w-2.5 h-2.5 border-2 border-white rounded-[1px]" />
                    </div>
                    <div className="text-[9px] font-bold text-[#0F172A] leading-tight flex-1">
                      30+ Posts Ready
                    </div>
                 </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-10">
              <div className="flex items-center justify-between mb-8">
                 <div className="grid grid-cols-7 w-full gap-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[10px] font-bold text-[#94A3B8]">{d}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-5 gap-4 mb-8">
                <div className="space-y-3">
                   <div className="text-[10px] font-bold text-[#94A3B8]">Mon</div>
                   <div className="h-16 rounded-xl bg-[#6366F1]" />
                   <div className="text-[10px] font-medium text-[#0F172A] leading-tight">Brand DNA Post</div>
                </div>
                <div className="space-y-3">
                   <div className="text-[10px] font-bold text-[#94A3B8]">Tue</div>
                   <div className="h-16 rounded-xl bg-[#3B82F6]" />
                   <div className="text-[10px] font-medium text-[#0F172A] leading-tight">New Feature</div>
                </div>
                <div className="space-y-3">
                   <div className="text-[10px] font-bold text-[#94A3B8]">Wed</div>
                   <div className="h-16 rounded-xl bg-[#475569]" />
                   <div className="text-[10px] font-medium text-[#0F172A] leading-tight">Carousel</div>
                </div>
                <div className="space-y-3">
                   <div className="text-[10px] font-bold text-[#94A3B8]">Thu</div>
                   <div className="h-16 rounded-xl bg-[#10B981]" />
                   <div className="text-[10px] font-medium text-[#0F172A] leading-tight">Blog Post</div>
                </div>
                <div className="space-y-3">
                   <div className="text-[10px] font-bold text-[#94A3B8]">Fri</div>
                   <div className="h-16 rounded-xl bg-[#0EA5E9]" />
                   <div className="text-[10px] font-medium text-[#0F172A] leading-tight">LinkedIn Post</div>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-5 rounded-[24px] flex items-center space-x-4">
                 <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                 </div>
                 <div className="space-y-0.5">
                    <div className="text-xs font-bold text-[#9A3412]">All your posts are ready!</div>
                    <div className="text-[10px] font-medium text-[#C2410C]">32 posts scheduled for this month</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Background Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-radial-gradient from-blue-50/50 to-transparent -z-10 opacity-60" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes hero-word-in {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-hero-word-in {
          animation: hero-word-in 0.28s ease-out forwards;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


