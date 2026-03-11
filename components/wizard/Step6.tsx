'use client';

import React, { useEffect, useState } from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';
import { mockApi } from '@/lib/services/api';

export default function Step6() {
  const { 
    selectedContextId, contexts, 
    selectedTemplateId, 
    tone, emojiStyle, platform, cta, offer, slideCount,
    setGeneratedContent, setCurrentStep 
  } = useWizardStore();
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const context = contexts.find(c => c.id === selectedContextId);
    if (!context || !selectedTemplateId) return;

    const startGeneration = async () => {
      // Simulate progress bar while API is running
      const timer = setInterval(() => {
        setProgress(prev => (prev >= 95 ? 95 : prev + (Math.random() * 5)));
      }, 150);

      try {
        const content = await mockApi.generateAdCopy(context, selectedTemplateId, {
          tone, emojiStyle, platform, cta, offer, slideCount
        });
        setProgress(100);
        setGeneratedContent(content);
        setTimeout(() => setCurrentStep(7), 500);
      } catch (err) {
        console.error(err);
      } finally {
        clearInterval(timer);
      }
    };

    startGeneration();
  }, [
    selectedContextId, contexts, selectedTemplateId, 
    tone, emojiStyle, platform, cta, offer, slideCount,
    setGeneratedContent, setCurrentStep
  ]);

  return (
    <div className="max-w-[720px] mx-auto px-6 py-20 text-center">
      <div className="fade-up">
        {/* Animated Spinner with outer glow */}
        <div className="relative inline-flex items-center justify-center mb-12">
          <div className="w-[120px] h-[120px] rounded-[32px] bg-violet/[0.03] border border-violet/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-[32px] border-[2px] border-t-violet border-r-violet/20 border-b-violet/10 border-l-violet/30 rounded-full animate-spin transition-all duration-300" style={{ opacity: progress / 100 + 0.2 }} />
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 animate-pulse"><path d="M12 2v4"/><path d="m16.2 4.2 2.8 2.8"/><path d="M18 12h4"/><path d="m16.2 19.8 2.8-2.8"/><path d="M12 18v4"/><path d="m4.2 19.8 2.8-2.8"/><path d="M2 12h4"/><path d="m4.2 4.2 2.8 2.8"/></svg>
          </div>
        </div>

        <h2 className="text-[2.5rem] font-black text-ink mb-2 font-display leading-tight uppercase tracking-tight">Generating Your Copy</h2>
        <p className="text-ink3 text-[1.1rem] font-medium mb-16 opacity-70">Our AI is drafting high-impact slides based on your strategy.</p>

        <div className="premium-card p-10 max-w-[500px] mx-auto">
          <div className="flex justify-between items-end mb-4">
            <span className="text-[13px] font-black text-violet uppercase tracking-widest">Progress</span>
            <span className="text-[24px] font-black text-ink font-display">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-border/20 h-2 rounded-full overflow-hidden mb-6 relative">
            <div 
              className="h-full bg-violet transition-all duration-500 ease-out shadow-[0_0_15px_rgba(46,126,245,0.4)]"
              style={{ width: `${progress}%` }}
            />
            {/* Animated shimmer over the progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full transition-all duration-300 ${progress > 20 ? 'bg-emerald' : 'bg-violet animate-ping'}`} />
               <span className={`text-[12px] font-bold ${progress > 20 ? 'text-ink opacity-40' : 'text-violet'}`}>Establishing tone & structure</span>
            </div>
            <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full transition-all duration-300 ${progress > 50 ? 'bg-emerald' : progress > 20 ? 'bg-violet animate-ping' : 'bg-border'}`} />
               <span className={`text-[12px] font-bold ${progress > 50 ? 'text-ink opacity-40' : progress > 20 ? 'text-violet' : 'text-ink3'}`}>Drafting carousel slides</span>
            </div>
            <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full transition-all duration-300 ${progress > 85 ? 'bg-emerald' : progress > 50 ? 'bg-violet animate-ping' : 'bg-border'}`} />
               <span className={`text-[12px] font-bold ${progress > 85 ? 'text-ink opacity-40' : progress > 50 ? 'text-violet' : 'text-ink3'}`}>Finalising creative polish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
