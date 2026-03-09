"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";

export function Hero() {
  const [demoOpen, setDemoOpen] = React.useState(false);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-12 pb-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 max-w-xl"
          >
            <Badge
              variant="outline"
              className="border-[#E8500A]/30 text-[#E8500A] bg-transparent px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(232,80,10,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8500A] mr-2 inline-block"></span>
              Now in public beta
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight tracking-tight text-white mb-4">
              Let{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#E8500A]">
                AI
              </span>{" "}
              create & post an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#E8500A]">
                entire month&apos;s content
              </span>
              <br />
              for you in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#E8500A]">
                30 minutes.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#A0A0A0] leading-relaxed max-w-[95%] font-normal mb-6">
              Simply enter your website URL, and our AI agent will generate,
              write, and schedule all your social media creatives, blog posts,
              and more. Just sit back and watch as your content calendar fills{" "}
              <span className="animate-pulse">||</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#FF8A50] to-[#E8500A] hover:from-[#FF9B6A] hover:to-[#FF6120] text-white font-semibold border-none px-8 rounded-lg shadow-[0_0_20px_rgba(232,80,10,0.3)]"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold px-8 rounded-lg border-[#2A2A2A] hover:bg-[#1F1F1F]"
                onClick={() => setDemoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 text-[15px] text-[#E8500A] font-medium tracking-wide">
              Automated Blogs, Social Media Posts & Scheduling
            </div>
          </motion.div>

          {/* Right: Mockup Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
          >
            {/* The live simulated dashboard/queue */}
            {/* The live simulated dashboard/queue */}
            <div className="w-full max-w-[650px] bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative text-white">
              {/* Mockup Topbar */}
              <div className="h-8 border-b border-[#2A2A2A] flex items-center px-4 bg-[#111111]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
              </div>

              {/* Mockup Content Area */}
              <div className="flex h-[420px]">
                {/* Sidebar */}
                <div className="w-1/4 border-r border-[#2A2A2A] p-4 flex flex-col gap-6 bg-[#161616]">
                  <div className="flex items-center gap-2 font-display font-bold text-lg">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF8A50] to-[#E8500A] flex items-center justify-center text-white text-xs">
                      👨‍🦰
                    </span>
                    AdForge
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-[#A0A0A0]">
                    <div className="flex items-center gap-2 text-white">
                      <span>Post Queue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Scheduled</span>
                    </div>
                  </div>
                  <div className="mt-2 p-2 rounded-lg bg-[#2A2A2A]/50 text-xs flex items-center gap-2 text-white border border-[#2A2A2A]">
                    <span className="text-white bg-[#E8500A] px-1 rounded-sm">
                      ▣
                    </span>{" "}
                    30+ Posts Ready
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col relative bg-[#1A1A1A]">
                  {/* Top Bar inside main */}
                  <div className="border-b border-[#2A2A2A] p-4 flex flex-col gap-4">
                    <div className="flex justify-between text-xs text-[#A0A0A0] px-2 font-medium">
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                      <span>S</span>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="flex-1 p-4 grid grid-cols-4 gap-3 relative overflow-hidden">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-[#A0A0A0]">Mon</span>
                      <div className="h-24 rounded-lg bg-[#242424] border border-[#333] p-0 flex flex-col relative overflow-hidden shadow-sm">
                        <div className="w-full h-1/2 bg-gradient-to-br from-blue-700 to-blue-900 border-b border-[#333] relative">
                          <div className="absolute top-1 left-1 bg-[#1A56DB] rounded-sm w-4 h-4 flex items-center justify-center text-[10px]">
                            f
                          </div>
                        </div>
                        <div className="p-1 px-2 text-[10px] font-semibold leading-tight text-white mt-1">
                          5 Proven Home Workouts
                        </div>
                      </div>
                      <div className="h-24 rounded-lg bg-[#242424] border border-[#333] p-0 flex flex-col relative overflow-hidden shadow-sm">
                        <div className="w-full h-1/2 bg-gradient-to-br from-sky-600 to-sky-800 border-b border-[#333] relative">
                          <div className="absolute top-1 left-1 bg-[#1A56DB] rounded-sm w-4 h-4 flex items-center justify-center text-[10px]">
                            in
                          </div>
                        </div>
                        <div className="p-1 px-2 text-[10px] font-semibold leading-tight text-white mt-1">
                          Time to Train...
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-[#A0A0A0]">Tue</span>
                      <div className="h-24 rounded-lg bg-[#242424] border border-[#333] p-0 flex flex-col relative overflow-hidden shadow-sm">
                        <div className="w-full h-1/2 bg-gradient-to-br from-orange-400 to-orange-600 border-b border-[#333] relative">
                          <div className="absolute top-1 left-1 bg-[#E8500A] rounded-sm w-4 h-4 flex items-center justify-center text-[10px]">
                            f
                          </div>
                        </div>
                        <div className="p-1 px-2 text-[10px] font-semibold leading-tight text-white mt-1">
                          New Feature Drop
                        </div>
                      </div>
                      <div className="h-24 rounded-lg bg-[#242424] border border-[#333] p-0 flex flex-col relative overflow-hidden shadow-sm">
                        <div className="w-full h-1/2 bg-[#1A1A1A] border-b border-[#333] relative">
                          <span className="absolute top-1 left-1 text-[10px]">
                            X
                          </span>
                        </div>
                        <div className="p-1 px-2 text-[10px] font-semibold leading-tight text-white mt-1">
                          Prototyping tips
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-[#A0A0A0]">Wed</span>
                      <div className="h-24 rounded-lg bg-[#242424] border border-[#333] p-0 flex flex-col relative overflow-hidden shadow-sm">
                        <div className="w-full h-1/2 bg-gradient-to-br from-gray-600 to-gray-800 border-b border-[#333] relative">
                          <div className="absolute top-1 left-1 bg-[#1A56DB] rounded-sm w-4 h-4 flex items-center justify-center text-[10px]">
                            in
                          </div>
                        </div>
                        <div className="p-1 px-2 text-[10px] font-semibold leading-tight text-white mt-1">
                          Happy Friday!
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-[#A0A0A0]">Thur</span>
                      <div className="h-24 rounded-lg bg-[#242424] border border-[#333] p-0 flex flex-col relative overflow-hidden shadow-sm">
                        <div className="w-full h-1/2 bg-gradient-to-br from-green-600 to-green-800 border-b border-[#333] relative">
                          <div className="absolute top-1 left-1 bg-[#1A56DB] rounded-sm w-4 h-4 flex items-center justify-center text-[10px]">
                            f
                          </div>
                        </div>
                        <div className="p-1 px-2 text-[10px] font-semibold leading-tight text-white mt-1">
                          Boost Your Brand...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Popups */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-24 right-4 left-4 bg-[#FFEEE1] p-4 rounded-xl shadow-[0_10px_40px_rgba(232,80,10,0.15)] flex items-start gap-4 text-black z-20"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8500A] flex-shrink-0 flex items-center justify-center shadow-lg pt-1 relative overflow-hidden border-2 border-white">
                      <div className="w-7 h-5 bg-white rounded-[10px] relative flex justify-center mt-1">
                        <div className="w-1.5 h-1.5 bg-[#E8500A] rounded-full absolute top-[3px] left-[5px]"></div>
                        <div className="w-1.5 h-1.5 bg-[#E8500A] rounded-full absolute top-[3px] right-[5px]"></div>
                        <div className="w-3 h-0.5 bg-[#E8500A] rounded-full absolute bottom-[3px]"></div>
                      </div>
                    </div>
                    <div className="pr-4">
                      <div className="font-bold text-[16px] mb-1 text-[#3E1A06]">
                        All your posts are ready!
                      </div>
                      <div className="text-[#6C4D3E] text-[13px] leading-relaxed">
                        We created 30+ posts for your entire month.
                        <br />
                        Scheduled and ready to be posted automatically.
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-6 right-8 left-12 bg-[#D19D83] p-3 px-5 rounded-2xl rounded-tr-sm shadow-xl flex items-center z-10 text-[#3E1A06] text-sm font-medium border border-[#D19D83]/20"
                  >
                    <div>
                      Awesome! All my content is ready to go—time to sit back
                      and relax!
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={demoOpen} onClose={() => setDemoOpen(false)}>
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
          <p className="text-text-secondary">Demo video placeholder</p>
        </div>
      </Modal>
    </section>
  );
}
