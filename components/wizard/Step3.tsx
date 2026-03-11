'use client';

import React, { useEffect } from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';
import { mockContexts } from '@/lib/mockData';

export default function Step3() {
  const { websiteUrl, setContexts, contexts, setRating, ratings, toggleBookmark, bookmarks, setCurrentStep } = useWizardStore();

  useEffect(() => {
    if (contexts.length === 0) {
      setContexts(mockContexts);
    }
  }, [contexts.length, setContexts]);

  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12">
      <div className="fade-up mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-border/20 border border-border/40 text-ink2 text-[11px] font-bold mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7-7-7"/><path d="M5 12h14"/></svg>
              New Analysis
            </div>
            <h2 className="text-[2.5rem] font-black text-ink mb-2 font-display leading-tight">Brand DNA Results</h2>
            <p className="text-violet font-medium opacity-80">{websiteUrl}</p>
            <p className="text-ink3 text-[14px] mt-2">Rate each context, then pick one to generate content from.</p>
          </div>
          <div className="flex gap-4">
            <button className="h-10 px-5 rounded-lg border border-border bg-white text-ink font-bold text-[13px] flex items-center gap-2 hover:bg-surf transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export PDF
            </button>
            <button onClick={() => setCurrentStep(4)} className="h-10 px-5 rounded-lg bg-violet text-white font-bold text-[13px] flex items-center gap-2 hover:bg-violet-hover transition-colors shadow-lg shadow-violet/20">
              Use a Context →
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-10 p-1 bg-violet-light/30 border border-violet-mid rounded-xl w-fit">
          <button className="px-5 py-1.5 rounded-lg bg-violet text-white font-bold text-[13px]">All</button>
          <button className="px-5 py-1.5 rounded-lg text-ink2 font-bold text-[13px] hover:bg-white/50 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            5 Stars
          </button>
          <button className="px-5 py-1.5 rounded-lg text-ink2 font-bold text-[13px] hover:bg-white/50 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            4 Stars
          </button>
          <button className="px-5 py-1.5 rounded-lg text-ink2 font-bold text-[13px] hover:bg-white/50 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#EF4444" stroke="#EF4444" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            Bookmarked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {contexts.map((ctx) => (
          <div key={ctx.id} className="premium-card flex flex-col group overflow-hidden">
            <div className="p-8 pb-0 flex-1">
              <div className="flex justify-between items-start mb-6">
                <div className="h-7 px-3 rounded-md bg-surf border border-border flex items-center justify-center text-[10px] font-black text-ink2 uppercase tracking-widest">
                  {ctx.id}
                </div>
              </div>
              
              <h3 className="text-[1.3rem] font-black text-ink mb-4 font-display leading-tight">{ctx.title}</h3>
              <p className="text-ink2 text-[14px] leading-relaxed mb-4 line-clamp-4 font-medium opacity-80">{ctx.body}</p>
              
              <button className="text-violet text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all group/btn mb-8">
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </button>
            </div>

            <div className="p-6 pt-0 mt-auto border-t border-surf/50">
              <div className="flex items-center justify-between py-4">
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star} 
                      onClick={() => setRating(ctx.id, star)}
                      className={`transition-all hover:scale-110 ${(ratings[ctx.id] || 0) >= star ? 'text-amber' : 'text-border hover:text-amber/50'}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                   <button className="p-1.5 rounded-lg border border-border text-ink3 hover:text-ink hover:bg-surf transition-all">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                   </button>
                   <button 
                    onClick={() => toggleBookmark(ctx.id)}
                    className={`p-1.5 rounded-lg border transition-all ${bookmarks.includes(ctx.id) ? 'bg-rose/5 border-rose/20 text-rose' : 'border-border text-ink3 hover:text-ink hover:bg-surf'}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={bookmarks.includes(ctx.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                  </button>
                  <button className="p-1.5 rounded-lg border border-border text-ink3 hover:text-ink hover:bg-surf transition-all">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setCurrentStep(4)}
                className="w-full h-11 rounded-xl border border-violet/30 bg-violet/5 text-violet font-bold text-[13px] hover:bg-violet hover:text-white transition-all duration-300"
              >
                Use This Context →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
