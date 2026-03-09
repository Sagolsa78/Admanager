"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Wand2,
  ListOrdered,
  KanbanSquare,
  Bookmark,
  Settings,
  LogOut,
  ChevronLeft,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { signOut } from "next-auth/react";

const SIDEBAR_LINKS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "New Analysis", href: "/analyse", icon: Wand2 },
  { name: "My Analyses", href: "/analyses", icon: ListOrdered },
  { name: "Campaigns", href: "/campaigns", icon: KanbanSquare },
  { name: "Saved Contexts", href: "/saved", icon: Bookmark },
  { name: "Templates", href: "/templates", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();
  const collapsed = useAppStore((state) => state.sidebarCollapsed);
  const setCollapsed = useAppStore((state) => state.setSidebarCollapsed);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 64 : 240 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden md:flex flex-col h-screen fixed left-0 top-0 bottom-0 bg-[#0D0D0D] border-r border-[#2A2A2A] z-40 overflow-hidden shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#2A2A2A] shrink-0">
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="flex items-center"
              >
                <Link
                  href="/"
                  className="flex items-center gap-1 group overflow-hidden whitespace-nowrap"
                >
                  <span className="text-xl font-bold font-display text-white tracking-tight">
                    Ad<span className="text-primary">Forge</span>
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={toggleCollapse}
            className="p-1 rounded-md text-text-secondary hover:text-white hover:bg-surface-2 transition-colors ml-auto flex-shrink-0 flex items-center justify-center w-8 h-8"
          >
            <ChevronLeft
              className={cn(
                "h-5 w-5 transition-transform",
                collapsed && "rotate-180",
              )}
            />
          </button>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden">
          {SIDEBAR_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                title={collapsed ? link.name : undefined}
                className={cn(
                  "flex items-center px-3 h-10 rounded-md transition-colors group relative",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-text-secondary hover:bg-surface-2 hover:text-white",
                )}
              >
                <link.icon
                  className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-text-secondary group-hover:text-white",
                  )}
                />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3 truncate whitespace-nowrap text-sm"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        <div className="p-2 border-t border-[#2A2A2A]">
          <Link
            href="/settings"
            title={collapsed ? "Settings" : undefined}
            className={cn(
              "flex items-center px-3 h-10 rounded-md transition-colors group relative",
              pathname.startsWith("/settings")
                ? "bg-surface-2 text-white font-medium"
                : "text-text-secondary hover:bg-surface-2 hover:text-white",
            )}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="ml-3 truncate whitespace-nowrap text-sm"
                >
                  Settings
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            title={collapsed ? "Sign Out" : undefined}
            className="w-full flex items-center px-3 h-10 rounded-md transition-colors text-text-secondary hover:bg-surface-2 hover:text-error group mt-1"
          >
            <LogOut className="h-5 w-5 flex-shrink-0 group-hover:text-error" />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="ml-3 truncate whitespace-nowrap text-sm"
                >
                  Sign Out
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.aside>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0D0D0D] border-t border-[#2A2A2A] z-40 flex items-center justify-around px-2 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
        {SIDEBAR_LINKS.slice(0, 5).map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1",
                isActive ? "text-primary" : "text-text-secondary",
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium leading-none">
                {link.name.split(" ")[0]}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
