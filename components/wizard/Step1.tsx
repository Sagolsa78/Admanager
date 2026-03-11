'use client';

import React, { useState } from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';

export default function Step1() {
  const { websiteUrl, linkedinUrl, setWebsiteUrl, setLinkedinUrl, setCurrentStep } = useWizardStore();
  const [error, setError] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) {
      setError('Please enter your website URL to proceed');
      return;
    }
    setError('');
    setCurrentStep(2);
  };

  return (
    <div className="max-w-[720px] mx-auto px-6 py-12 text-center">
      <div className="fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-light border border-violet-mid text-violet text-[11px] font-bold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
          AI-Powered Brand Analysis
        </div>
        
        <h1 className="text-[3.5rem] font-black text-ink leading-[1.1] tracking-tight mb-6 font-display">
          Decode Your <span className="text-[#2176FF]">Brand DNA</span>
        </h1>
        
        <p className="text-ink2 text-[1.15rem] leading-relaxed mb-12 max-w-[600px] mx-auto">
          Enter your URL. We'll generate 5 sharp positioning contexts — then turn the best one into ready-to-post content in your chosen format.
        </p>

        <div className="premium-card p-8 text-left mb-8 shadow-xl border-border/50">
          <form onSubmit={handleNext} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] font-bold text-ink flex items-center gap-1.5">
                Website URL <span className="text-rose">*</span>
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink3 group-focus-within:text-violet transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <input 
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className={`w-full h-14 bg-white border ${error ? 'border-rose' : 'border-border'} rounded-xl pl-12 pr-4 font-medium text-ink outline-none transition-all focus:border-violet focus:shadow-[0_0_0_4px_rgba(46,126,245,0.08)]`}
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>
              {error && <p className="text-rose text-[12px] font-bold mt-1 pl-1">{error}</p>}
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] font-bold text-ink flex items-center justify-between">
                LinkedIn Profile URL
                <span className="text-[12px] font-medium text-ink3">(Optional)</span>
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink3 group-focus-within:text-violet transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <input 
                  type="url"
                  placeholder="https://linkedin.com/in/yourhandle"
                  className="w-full h-14 bg-white border border-border rounded-xl pl-12 pr-4 font-medium text-ink outline-none transition-all focus:border-violet focus:shadow-[0_0_0_4px_rgba(46,126,245,0.08)]"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-[#F3F7FF] rounded-xl p-5 border border-[#E0E9FF]">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#4A72CC] mb-4">What you'll receive</h4>
              <div className="flex flex-col gap-3">
                {[
                  "5 unique brand positioning contexts",
                  "Each with a title + ~300-word copy block",
                  "Pick template + options → carousel, caption & hashtags"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white border border-[#CEDCFF] flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2E7EF5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[#1E293B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              type="submit"
              className="mt-2 h-14 bg-violet text-white font-bold rounded-xl text-[1.1rem] transition-all hover:bg-violet-hover hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet/20 flex items-center justify-center gap-2 group"
            >
              Analyse My Brand
              <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <p className="text-center text-[13px] font-medium text-ink3">No account needed · Free to try</p>
          </form>
        </div>
      </div>
    </div>
  );
}
