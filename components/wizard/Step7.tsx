'use client';

import React from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';
import Link from 'next/link';

export default function Step7() {
  const { generatedContent, resetWizard } = useWizardStore();

  if (!generatedContent) return null;

  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12">
      <div className="fade-up mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald text-[11px] font-bold mb-4">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Ready to Publish
          </div>
          <h2 className="text-[2.5rem] font-black text-ink mb-2 font-display leading-tight">Your High-Performance Content</h2>
          <p className="text-ink3 text-[1.1rem] font-medium opacity-70">Review your bespoke carousel slides and social copy.</p>
        </div>
        <div className="flex gap-4">
          <button 
            className="h-11 px-6 bg-white border border-border rounded-xl font-black font-display text-ink text-[13px] hover:bg-surf transition-all flex items-center gap-2"
            onClick={() => window.print()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export as PDF
          </button>
          <button 
            onClick={resetWizard}
            className="h-11 px-8 bg-violet text-white font-black font-display text-[13px] rounded-xl shadow-lg shadow-violet/20 hover:bg-violet-hover hover:-translate-y-1 transition-all"
          >
            Generate More →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,440px] gap-12 items-start">
        {/* Left Column: Carousel Preview */}
        <div className="space-y-10 fade-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet/5 text-violet flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <h3 className="text-[1.3rem] font-black text-ink font-display">Carousel Feed Preview</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generatedContent.slides.map((slide, idx) => (
              <div 
                key={slide.num}
                className={`aspect-square rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group border transition-all duration-700 ${
                  slide.cov 
                    ? 'bg-violet text-white border-violet shadow-2xl shadow-violet/20' 
                    : 'bg-white text-ink border-border shadow-md hover:border-violet/30'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {slide.cov && (
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v4"/><path d="m16.2 4.2 2.8 2.8"/></svg>
                  </div>
                )}
                
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                  <span>Slide {slide.num.toString().padStart(2, '0')}</span>
                  {slide.cov && <span className="px-2 py-0.5 rounded border border-white/30">Cover</span>}
                </div>
                
                <div className={`font-display font-black leading-tight tracking-tight ${slide.cov ? 'text-[2.2rem]' : 'text-[1.5rem]'}`}>
                  {slide.h}
                </div>
                
                {!slide.cov && (
                  <div className="text-[14px] font-medium opacity-70 leading-relaxed font-body">
                    {slide.b}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-current/10">
                  <span className="text-[11px] font-black tracking-widest uppercase opacity-40">AdForge.com</span>
                  <div className="flex gap-1.5 overflow-hidden">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === slide.num ? 'bg-current pulse' : 'bg-current opacity-20'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Social Copy & Prompts */}
        <div className="space-y-8 fade-up" style={{ animationDelay: '400ms' }}>
          <div className="premium-card p-8 shadow-xl shadow-ink/5">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/40">
              <h3 className="font-black text-ink font-display tracking-tight text-[1.1rem]">Social Caption</h3>
              <button 
                onClick={() => navigator.clipboard.writeText(generatedContent.caption)}
                className="px-3 py-1 rounded-lg bg-violet/5 text-violet text-[11px] font-black uppercase tracking-widest hover:bg-violet hover:text-white transition-all"
              >
                Copy
              </button>
            </div>
            <div className="text-[15px] text-ink2 leading-relaxed font-body whitespace-pre-wrap mb-6">
              {generatedContent.caption}
            </div>
            <div className="flex flex-wrap gap-2">
              {generatedContent.hashtags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-surf text-violet font-bold text-[12px]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="premium-card p-8 shadow-xl shadow-ink/5">
             <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/40">
              <h3 className="font-black text-ink font-display tracking-tight text-[1.1rem]">AI Visual Prompts</h3>
              <div className="w-8 h-8 rounded-lg bg-violet/10 text-violet flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              </div>
            </div>
            <div className="space-y-4">
              {generatedContent.prompts.map((p, idx) => (
                <div key={idx} className="group p-4 rounded-2xl bg-surf/30 border border-border/50 hover:border-violet/30 transition-all">
                  <div className="text-[10px] font-black text-ink3 uppercase mb-2 tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                    {p.lbl}
                  </div>
                  <div className="text-[13px] text-ink font-medium leading-tight opacity-80">{p.txt}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-white border border-border text-ink font-black rounded-xl text-[13px] hover:bg-surf transition-all flex items-center justify-center gap-2 tracking-tight">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy All Prompts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
