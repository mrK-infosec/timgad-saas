"use client";
import React, { useState } from 'react';
import { ArrowRight, CircleNotch } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { GlowEffect } from './GlowEffect';
import { TickerTape } from './TickerTape';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useRouter } from 'next/navigation';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const mockupVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
  } as const;

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    setIsNavigating(true);
    router.push('/register');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      <GlowEffect color="#C8A951" position="-top-20 -right-20" opacity={0.06} />
      <GlowEffect color="#1A3A2A" position="bottom-0 -left-20" opacity={0.08} />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          variants={fadeUpVariant}
          className="flex flex-col items-start space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141416] border border-[#2A2A2E] cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#C8A951] animate-pulse"></span>
            <span className="text-xs font-medium text-[#A1A1A6]">Early Access Now Available</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-[#F5F5F7]">
            <span className="bg-gradient-to-r from-[#C8A951] via-[#D4B96A] to-[#C8A951] bg-clip-text text-transparent">Command</span>
            <br />
            Your Trading Floor.
          </h1>

          <p className="text-lg text-[#A1A1A6] max-w-lg leading-relaxed">
            The operational system for serious forex traders. Track risk, manage pipelines, and execute with precision without the clutter.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={handleGetStarted} 
              disabled={isNavigating}
              className="w-full sm:w-auto px-6 py-3 bg-[#C8A951] text-[#0A0A0B] font-medium rounded-lg hover:bg-[#D4B96A] hover:shadow-[0px_0px_20px_rgba(200,169,81,0.3)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] cursor-pointer disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2"
            >
              {isNavigating ? (
                <>
                  <CircleNotch size={16} className="animate-spin" />
                  Loading...
                </>
              ) : (
                'Get Early Access'
              )}
            </button>
            <button 
              onClick={scrollToFeatures} 
              className="w-full sm:w-auto px-6 py-3 text-[#F5F5F7] font-medium rounded-lg hover:text-[#C8A951] transition-colors flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] cursor-pointer"
            >
              See How It Works
              <ArrowRight weight="light" className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          variants={mockupVariant}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#C8A951]/20 to-[#1A3A2A]/20 blur-2xl -z-10 rounded-xl" aria-hidden="true" />
          
          <div className="bg-[#141416] border border-[#2A2A2E] rounded-xl p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 border-b border-[#2A2A2E] pb-4 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F87171]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#C8A951]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]"></div>
              </div>
              <span className="text-xs text-[#A1A1A6] font-medium">Trading Pipeline — Q2 2025</span>
            </div>

            <div className="space-y-2.5">
              <div className="bg-[#0A0A0B] rounded-lg p-3 border border-[#2A2A2E] cursor-pointer hover:border-[#3A3A3E] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#1A3A2A] text-[#4ADE80]">In Progress</span>
                  <span className="text-xs text-[#6E6E73]">#TK-042</span>
                </div>
                <h3 className="text-sm font-medium text-[#F5F5F7]">EUR/USD Technical Analysis</h3>
                <p className="text-xs text-[#A1A1A6] mt-1">Review 4H structural breaks</p>
              </div>

              <div className="bg-[#0A0A0B] rounded-lg p-3 border border-[#C8A951]/40 shadow-[0_0_15px_rgba(200,169,81,0.1)] relative">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#C8A951]/20 text-[#C8A951]">Review</span>
                  <span className="text-xs text-[#6E6E73]">#TK-041</span>
                </div>
                <h3 className="text-sm font-medium text-[#F5F5F7]">Set Risk Parameters — Q3</h3>
                <p className="text-xs text-[#A1A1A6] mt-1">Adjust maximum daily drawdown limits</p>
              </div>

              <div className="bg-[#0A0A0B] rounded-lg p-3 border border-[#2A2A2E] cursor-pointer hover:border-[#3A3A3E] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#2A2A2E] text-[#A1A1A6]">To Do</span>
                  <span className="text-xs text-[#6E6E73]">#TK-040</span>
                </div>
                <h3 className="text-sm font-medium text-[#F5F5F7]">Review Q3 Performance</h3>
                <p className="text-xs text-[#A1A1A6] mt-1">Compile win-rate statistics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <TickerTape />
    </section>
  );
};
