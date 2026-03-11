'use client';

import React, { useEffect, useState } from 'react';
import { useWizardStore } from '@/lib/store/wizardStore';
import { mockApi } from '@/lib/services/api';

export default function Step2() {
  const { websiteUrl, linkedinUrl, setContexts, setCurrentStep } = useWizardStore();
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const lines = [
    "Scraping website content",
    "Extracting brand signals",
    "Analysing tone & positioning",
    "Generating 5 brand contexts",
    "Finalising output"
  ];

  useEffect(() => {
    let isMounted = true;

    const startAnalysis = async () => {
      // Simulate progress bar
      const progressTimer = setInterval(() => {
        if (!isMounted) return;
        setProgress((prev) => (prev >= 98 ? 98 : prev + (Math.random() * 2)));
      }, 100);

      const lineTimer = setInterval(() => {
        if (!isMounted) return;
        setActiveIdx((prev) => (prev + 1) % lines.length);
      }, 1200);

      try {
        const results = await mockApi.analyzeBrand(websiteUrl, linkedinUrl);
        if (isMounted) {
          setProgress(100);
          setContexts(results);
          setTimeout(() => setCurrentStep(3), 800);
        }
      } catch (err) {
        console.error(err);
      } finally {
        clearInterval(progressTimer);
        clearInterval(lineTimer);
      }
    };

    startAnalysis();

    return () => {
      isMounted = false;
    };
  }, [websiteUrl, linkedinUrl, setContexts, setCurrentStep]);

  return (
    <div className="max-w-[720px] mx-auto px-6 py-20 text-center">
      <div className="fade-up">
        <div className="relative inline-flex items-center justify-center mb-12">
          <div className="w-[100px] h-[100px] rounded-full border-[3px] border-violet/10 relative">
            <div className="absolute inset-0 rounded-full border-[3px] border-t-violet animate-spin transition-all duration-300" style={{ opacity: progress / 100 + 0.2 }} />
            <div className="absolute inset-2 rounded-full border border-dashed border-violet/20" />
          </div>
        </div>

        <h2 className="text-[2.5rem] font-black text-ink mb-2 font-display leading-tight uppercase tracking-tight">Analysing Your Brand</h2>
        <p className="text-violet font-medium text-[1.1rem] mb-12 opacity-80">{websiteUrl}</p>

        <div className="premium-card p-2 text-left shadow-lg border-border/40 overflow-hidden max-w-[500px] mx-auto">
          {lines.map((line, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 p-4 last:border-0 border-b border-border/30 transition-all duration-500 ${
                progress > (idx + 1) * 20 ? 'bg-emerald/[0.02]' : activeIdx === idx ? 'bg-violet/[0.02]' : ''
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                progress > (idx + 1) * 20 
                  ? 'bg-emerald text-white scale-100 shadow-lg shadow-emerald/20' 
                  : activeIdx === idx 
                  ? 'bg-violet text-white scale-110 shadow-lg shadow-violet/20' 
                  : 'bg-surf border border-border text-ink3 scale-90'
              }`}>
                {progress > (idx + 1) * 20 ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <span className="text-[10px] font-bold">{idx + 1}</span>
                )}
              </div>
              <span className={`text-[15px] font-semibold transition-colors duration-500 ${
                progress > (idx + 1) * 20 ? 'text-ink opacity-60' : activeIdx === idx ? 'text-violet' : 'text-ink3'
              }`}>
                {line}
              </span>
              {activeIdx === idx && progress <= (idx + 1) * 20 && (
                <div className="ml-auto w-1 h-1 rounded-full bg-violet animate-ping" />
              )}
            </div>
          ))}
          
          <div className="h-1 bg-border/20 w-full mt-2">
            <div 
              className="h-full bg-violet transition-all duration-300 ease-out shadow-[0_0_10px_rgba(46,126,245,0.4)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
