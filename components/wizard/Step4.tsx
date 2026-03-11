'use client';

import React from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';

export default function Step4() {
  const { contexts, selectedContextId, setSelectedContextId, setCurrentStep } = useWizardStore();

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12">
      <div className="fade-up mb-12">
        <div className="flex items-center justify-between mb-8">
           <button onClick={() => setCurrentStep(3)} className="h-9 px-4 rounded-lg bg-surface border border-border text-ink2 font-bold text-[12px] flex items-center gap-2 hover:bg-surf transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <div className="px-3 py-1 rounded-full bg-violet-light border border-violet-mid text-violet text-[10px] font-black uppercase tracking-widest">
            Step 4 of 7
          </div>
        </div>

        <h2 className="text-[2.5rem] font-black text-ink mb-3 font-display leading-tight">Choose Your <span className="text-[#2176FF]">Context</span></h2>
        <p className="text-ink2 text-[1.1rem] font-medium opacity-70">Select the positioning angle you want to turn into content.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-16">
        {contexts.map((ctx) => (
          <button 
            key={ctx.id} 
            onClick={() => setSelectedContextId(ctx.id)}
            className={`premium-card text-left p-6 transition-all duration-500 relative flex items-center gap-6 ${
              selectedContextId === ctx.id 
                ? 'border-violet ring-1 ring-violet shadow-xl shadow-violet/5' 
                : 'hover:border-violet/30 hover:shadow-lg'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-500 ${
              selectedContextId === ctx.id ? 'bg-violet border-violet text-white scale-110 shadow-lg shadow-violet/20' : 'bg-surf border-border text-ink3 scale-100'
            }`}>
               <span className="text-[10px] font-black">{ctx.id.toString().padStart(2, '0')}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[1.1rem] font-black text-ink mb-1 font-display tracking-tight">{ctx.title}</h3>
              <p className="text-ink2 text-[14px] leading-snug font-medium opacity-60 line-clamp-1">{ctx.body}</p>
            </div>
            {selectedContextId === ctx.id && (
              <div className="w-5 h-5 rounded-full bg-violet flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-end sticky bottom-8 z-[200]">
        <button 
          disabled={!selectedContextId}
          onClick={() => setCurrentStep(5)}
          className={`h-14 px-10 rounded-2xl font-black text-[15px] font-display transition-all duration-500 ${
            selectedContextId 
              ? 'bg-violet text-white shadow-xl shadow-violet/20 hover:bg-violet-hover hover:-translate-y-1 active:scale-[0.98]' 
              : 'bg-border/40 text-ink3 cursor-not-allowed opacity-50'
          }`}
        >
          Pick Template & Options →
        </button>
      </div>
    </div>
  );
}
