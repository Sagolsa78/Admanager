"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[300] h-[60px] flex items-center transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F0F2F5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto w-full px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-[18px] font-extrabold text-ink tracking-[-0.5px] no-underline font-display"
        >
          Ad<span className="text-violet">Forge</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href="#features"
            className="text-[13px] font-bold text-[#6B7280] hover:text-ink transition-colors font-display"
          >
            Features
          </Link>
          <Link
            href="#templates"
            className="text-[13px] font-bold text-[#6B7280] hover:text-ink transition-colors font-display"
          >
            Templates
          </Link>
          <Link
            href="#pricing"
            className="text-[13px] font-bold text-[#6B7280] hover:text-ink transition-colors font-display"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-[13px] font-bold text-ink2 bg-transparent border border-border rounded-lg hover:bg-surf transition-all font-display">
            Sign In
          </button>
          <Link
            href="/wizard"
            className="px-5 py-2 text-[13px] font-bold text-white bg-violet rounded-lg shadow-vsoft hover:opacity-90 transition-all font-display"
          >
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
