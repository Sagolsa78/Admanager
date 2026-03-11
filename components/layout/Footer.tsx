"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-[#2A2A2A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-16 mb-20">
          <div>
            <div className="text-[20px] font-bold text-white font-display mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF8A50] to-[#E8500A] flex items-center justify-center text-white text-[12px]">👨</span>
              Ad<span className="text-[#E8500A]">Forge</span>
            </div>
            <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed max-w-[22rem] font-body">
              AI-powered Brand DNA analysis. Extract positioning angles, context strategies, and insights automatically for your social presence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 font-display text-[0.95rem]">Product</h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-[#666666] hover:text-[#E8500A] text-[0.9rem] font-body transition-colors">Features</Link>
              <Link href="#" className="text-[#666666] hover:text-[#E8500A] text-[0.9rem] font-body transition-colors">Templates</Link>
              <Link href="#" className="text-[#666666] hover:text-[#E8500A] text-[0.9rem] font-body transition-colors">Pricing</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 font-display text-[0.95rem]">Resources</h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-[#666666] hover:text-[#E8500A] text-[0.9rem] font-body transition-colors">Blog</Link>
              <Link href="#" className="text-[#666666] hover:text-[#E8500A] text-[0.9rem] font-body transition-colors">Documentation</Link>
              <Link href="#" className="text-[#666666] hover:text-[#E8500A] text-[0.9rem] font-body transition-colors">Support</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[0.85rem] text-[#666666] font-body">
            © 2026 AdForge. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[#666666] hover:text-[#E8500A] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </Link>
            <Link href="#" className="text-[#666666] hover:text-[#E8500A] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="#" className="text-[#666666] hover:text-[#E8500A] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
