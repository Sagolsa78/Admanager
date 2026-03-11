"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#how-it-works" },
    { name: "Templates", href: "#features" },
    { name: "Pricing", href: "#capabilities" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-sora font-extrabold text-[#0F172A] tracking-tight">
          AdForge
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#64748B] hover:text-[#0F172A] transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="hidden sm:block text-[#0F172A] border border-gray-200 hover:bg-gray-50 transition-colors font-semibold text-sm px-5 py-2.5 rounded-xl"
          >
            Sign In
          </Link>
          <Link
            href="/wizard"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-blue-500/10 transition-transform active:scale-95"
          >
            Start Free
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#64748B] hover:text-[#0F172A] text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

