"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname.startsWith("/analyse")) return "New Analysis";
    if (pathname.startsWith("/analyses")) return "My Analyses";
    if (pathname.startsWith("/campaigns")) return "Campaigns";
    if (pathname.startsWith("/saved")) return "Saved Contexts";
    if (pathname.startsWith("/settings")) return "Settings";
    return "";
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-[#2A2A2A] bg-[#0D0D0D]/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-display font-bold text-white tracking-tight">
          {getTitle()}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-text-secondary hover:text-white transition-colors rounded-full hover:bg-surface-2">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-[#0D0D0D]" />
        </button>
        <div className="hidden sm:block">
          <Link href="/analyse">
            <Button size="sm">
              <Wand2 className="mr-2 h-4 w-4" />
              New Analysis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
