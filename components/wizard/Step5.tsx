'use client';

import React from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';

const templates = [
  { id: 'hook', tag: 'HOOK', title: 'Curiosity Hook', desc: 'Intriguing open question' },
  { id: 'myth', tag: 'MYTH', title: 'Myth vs Reality', desc: 'Bust a common belief' },
  { id: 'problem', tag: 'PROBLEM', title: 'Problem → Solution', desc: 'Pain, agitation, fix' },
  { id: 'step', tag: 'FRAMEWORK', title: 'Step-by-Step', desc: 'Clear numbered process' },
  { id: 'social', tag: 'RESULT', title: 'Social Proof', desc: 'Real result-led story' },
  { id: 'didu', tag: 'DID YOU KNOW?', title: 'Did You Know', desc: 'Surprising stat or insight' },
  { id: 'vision', tag: 'VISION', title: 'Vision', desc: 'Future-state imagination' },
  { id: 'bts', tag: 'BTS 🎥', title: 'Behind the Scenes', desc: 'Raw, unfiltered process' },
  { id: 'oldnew', tag: 'X OLD | ✓ NEW', title: 'Old vs New', desc: 'Side-by-side contrast' },
  { id: 'community', tag: 'FOR YOU IF...', title: 'Community', desc: 'Speak directly to your tribe' }
];

const toneOptions = [
  { id: 'luxury', label: '👑 Luxury' },
  { id: 'fun', label: '🎉 Fun & Playful' },
  { id: 'authority', label: '🎯 Authority' },
  { id: 'bold', label: '⚡ Bold & Direct' },
  { id: 'warm', label: '🤝 Warm & Human' }
];

export default function Step5() {
  const { 
    selectedTemplateId, setSelectedTemplateId, 
    tone, setTone,
    cta, setCta,
    offer, setOffer,
    slideCount, setSlideCount,
    setCurrentStep 
  } = useWizardStore();

  return (
    <div className="max-w-[1240px] mx-auto px-6 py-8">
      <div className="fade-up mb-8">
        <div className="flex items-center gap-3 mb-8">
           <button onClick={() => setCurrentStep(4)} className="h-9 px-4 rounded-full bg-white border border-border text-ink2 font-bold text-[13px] flex items-center gap-2 hover:bg-surf transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <div className="px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100/50 text-violet text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-violet" />
            Step 5 of 7
          </div>
        </div>

        <h2 className="text-[2.8rem] font-bold text-ink mb-2 font-display tracking-tight">Template <span className="text-violet">& Options</span></h2>
        <p className="text-ink2 text-[1.1rem] font-medium opacity-80">Pick a template, then fine-tune the output. All options are optional.</p>
      </div>

      <div className="w-full bg-[#fdf5f2] border border-[#f5e1da] rounded-xl p-5 mb-10 flex items-start gap-4 fade-up">
        <div className="mt-1.5 w-2 h-2 rounded-full bg-violet shrink-0" />
        <div>
          <div className="text-[10px] font-black text-violet tracking-[0.15em] uppercase mb-1">Selected Context</div>
          <div className="text-[15px] font-bold text-ink">Direct Response</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8 items-start">
        {/* Left Column: Templates */}
        <div className="fade-up">
          <div className="font-bold text-[15px] text-ink mb-6 font-display">
            Choose a Template <span className="text-[#EF4444]">*</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {templates.map((tpl) => (
              <button 
                key={tpl.id}
                onClick={() => setSelectedTemplateId(tpl.id)}
                className={`bg-white rounded-[16px] text-left transition-all duration-300 relative overflow-hidden flex flex-col h-full border ${
                  selectedTemplateId === tpl.id 
                    ? 'border-violet ring-1 ring-violet shadow-md' 
                    : 'border-border shadow-sm hover:border-border-m'
                }`}
              >
                {/* Visual Top Half Mockup */}
                <div className="h-[100px] w-full bg-[#111322] relative p-3 flex flex-col justify-center">
                  <div className="text-[9px] font-bold text-white/50 bg-white/10 px-2 py-0.5 rounded flex w-max mb-3 uppercase tracking-wider">{tpl.tag}</div>
                  <div className="w-3/4 h-2 bg-white/20 rounded-full mb-1.5" />
                  <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                </div>
                {/* Text Bottom Half */}
                <div className="p-4 bg-white flex-1 flex flex-col">
                  <div className="font-bold text-ink text-[14px] font-display mb-1">{tpl.title}</div>
                  <div className="text-ink3 text-[12px] font-medium leading-snug mt-auto">{tpl.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <div className="font-bold text-[15px] text-ink mb-4 font-display">
              Tone of Voice <span className="text-ink3 font-medium text-[13px]">(Optional)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {toneOptions.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTone(t.id)}
                  className={`px-4 py-2.5 rounded-lg border text-[13px] font-bold transition-all ${
                    tone === t.id ? 'bg-white border-violet text-violet shadow-sm' : 'bg-white border-border text-ink2 hover:border-border-m'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Content Settings */}
        <div className="fade-up lg:sticky lg:top-24">
          <div className="bg-white border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] p-8">
            <div className="text-[11px] font-bold text-[#8ba3cc] uppercase tracking-widest mb-8 font-display">
              Content Settings
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-ink font-display">
                  Call to Action <span className="text-ink3 font-medium text-[13px]">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. Book a free call"
                    value={cta || ''}
                    onChange={(e) => setCta(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 bg-white border border-border/80 rounded-xl text-[14px] text-ink placeholder:text-ink3 outline-none focus:border-violet transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-ink font-display">
                  Offer / Hook <span className="text-ink3 font-medium text-[13px]">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. Free brand audit"
                    value={offer || ''}
                    onChange={(e) => setOffer(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 bg-white border border-border/80 rounded-xl text-[14px] text-ink placeholder:text-ink3 outline-none focus:border-violet transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-ink font-display">
                  Number of Slides
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="number" 
                    min="3" max="10"
                    value={slideCount || 6}
                    onChange={(e) => setSlideCount(parseInt(e.target.value))}
                    className="w-20 h-12 px-4 bg-white border border-border/80 rounded-xl text-[14px] font-medium text-ink outline-none focus:border-violet transition-colors text-center"
                  />
                  <span className="text-ink3 text-[13px] font-medium">3–10 slides</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40 mt-8">
                <button 
                  disabled={!selectedTemplateId}
                  onClick={() => setCurrentStep(6)}
                  className={`w-full py-4 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-all ${
                    selectedTemplateId 
                      ? 'bg-[#B2CCFF] text-white hover:bg-[#9EBEFF]' 
                      : 'bg-[#B2CCFF]/50 text-white cursor-not-allowed'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Generate Content
                </button>
                <div className="text-center mt-4 text-[12px] text-ink3 font-medium">
                  Select a template to continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
