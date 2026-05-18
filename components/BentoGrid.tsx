"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { TrendUp, ArrowRight, Kanban, ChartBar, UsersThree, ShieldCheck, Lightning } from '@phosphor-icons/react';

export const BentoGrid = () => {
  // Trade cycle state for Card 1
  const [currentTradeIndex, setCurrentTradeIndex] = useState(0);
  const trades = [
    { pair: 'EUR/USD', action: 'Support Breakout', status: 'Analysis', direction: 'Long', entry: '1.0850' },
    { pair: 'XAU/USD', action: 'Trend Following', status: 'Execution', direction: 'Long', entry: '2345.50' },
    { pair: 'GBP/JPY', action: 'Scalp Setup', status: 'Idea', direction: 'Short', entry: '190.20' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTradeIndex((prev) => (prev + 1) % trades.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trades.length]);

  // Activity Feed state for Card 3
  const [messages, setMessages] = useState<{id: number, user: string, action: string, time: string, color: string, initials: string}[]>([]);
  
  useEffect(() => {
    const activities = [
      { user: 'Sarah', action: 'moved EUR/USD to Analysis', time: 'Just now', color: '#C8A951', initials: 'S' },
      { user: 'Karim', action: 'closed GBP/JPY +$450', time: '2m ago', color: '#4ADE80', initials: 'K' },
      { user: 'David', action: 'added risk note to XAU', time: '5m ago', color: '#3B82F6', initials: 'D' },
      { user: 'Amina', action: 'opened EUR/JPY', time: '8m ago', color: '#F87171', initials: 'A' },
    ];
    let i = 0;
    
    // Initial load
    setMessages(activities.slice(0, 3).map(a => ({...a, id: Math.random()})));
    i = 3;

    const interval = setInterval(() => {
      setMessages(prev => {
        const newFeed = [...prev, { ...activities[i], id: Date.now() }];
        return newFeed.length > 3 ? newFeed.slice(1) : newFeed;
      });
      i = (i + 1) % activities.length;
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Use count ups
  const winRate = useCountUp(67, 2000, true);
  const profit = useCountUp(12450, 2500, true);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light text-[#F5F5F7] mb-6 tracking-tight">Everything you need to <br/><span className="text-[#C8A951]">execute with precision</span></h2>
        <p className="text-[#A1A1A6] max-w-2xl mx-auto text-lg">A fully integrated command center that brings your ideas, risk, and analytics into one unified workflow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* CARD 1: Trade Pipeline (2x1) */}
        <div className="md:col-span-2 bg-[#141416] rounded-2xl border border-[#2A2A2E] p-8 overflow-hidden relative group hover:border-[#3A3A3E] transition-all hover:shadow-[0_0_30px_rgba(200,169,81,0.05)] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1A1A1D] to-[#141416]">
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#C8A951]/10 rounded-lg">
                  <Kanban size={24} className="text-[#C8A951]" />
                </div>
                <h3 className="text-xl font-medium text-[#F5F5F7]">Trade Pipeline</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]"></span>
                </span>
                <span className="text-xs text-[#A1A1A6] font-medium">Live Sync</span>
              </div>
            </div>

            {/* Mini Kanban */}
            <div className="flex-1 flex gap-4 overflow-hidden mt-4">
              {['Idea', 'Analysis', 'Execution'].map((column) => (
                <div key={column} className="flex-1 bg-[#0A0A0B] border border-[#2A2A2E] rounded-xl p-3 flex flex-col">
                  <div className="text-xs font-medium text-[#6E6E73] mb-3 flex justify-between">
                    {column} <span>{trades[currentTradeIndex].status === column ? '1' : '0'}</span>
                  </div>
                  
                  <AnimatePresence mode="popLayout">
                    {trades[currentTradeIndex].status === column && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-[#141416] border border-[#3A3A3E] rounded-lg p-3 shadow-lg"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${trades[currentTradeIndex].direction === 'Long' ? 'bg-[#4ADE80]/10 text-[#4ADE80]' : 'bg-[#F87171]/10 text-[#F87171]'}`}>
                            {trades[currentTradeIndex].direction}
                          </span>
                          <span className="text-[10px] text-[#A1A1A6]">{trades[currentTradeIndex].pair}</span>
                        </div>
                        <p className="text-xs text-[#F5F5F7] font-medium leading-snug">{trades[currentTradeIndex].action}</p>
                        <p className="text-[10px] text-[#6E6E73] mt-2">Entry: {trades[currentTradeIndex].entry}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 2: Risk Management (1x1) */}
        <div className="bg-[#141416] rounded-2xl border border-[#2A2A2E] p-8 overflow-hidden relative group hover:border-[#3A3A3E] transition-all hover:shadow-[0_0_30px_rgba(200,169,81,0.05)] flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-[#4ADE80]/10 rounded-lg">
              <TrendUp size={24} className="text-[#4ADE80]" />
            </div>
            <h3 className="text-xl font-medium text-[#F5F5F7]">Risk Control</h3>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            {/* Animated Donut Chart */}
            <svg viewBox="0 0 120 120" className="w-40 h-40 transform -rotate-90">
              {/* Background Arc */}
              <circle cx="60" cy="60" r="50" fill="none" stroke="#2A2A2E" strokeWidth="12" />
              
              {/* EUR/USD 2% */}
              <motion.circle 
                cx="60" cy="60" r="50" fill="none" stroke="#C8A951" strokeWidth="12"
                strokeDasharray="314"
                initial={{ strokeDashoffset: 314 }}
                whileInView={{ strokeDashoffset: 314 - (314 * 0.02 * 10) }} // 20% of circle visual
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="drop-shadow-[0_0_8px_rgba(200,169,81,0.5)]"
              />
              
              {/* XAU/USD 1.5% */}
              <motion.circle 
                cx="60" cy="60" r="50" fill="none" stroke="#4ADE80" strokeWidth="12"
                strokeDasharray="314"
                initial={{ strokeDashoffset: 314 }}
                whileInView={{ strokeDashoffset: 314 - (314 * 0.015 * 10) }} // 15% of circle visual
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                transform="rotate(72 60 60)" // Start after the gold one
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-light text-[#F5F5F7]">3.5<span className="text-sm text-[#A1A1A6]">%</span></span>
              <span className="text-[10px] text-[#A1A1A6] uppercase tracking-wider">Total Risk</span>
            </div>
          </div>
        </div>

        {/* CARD 3: Team Collaboration (1x1) */}
        <div className="bg-[#141416] rounded-2xl border border-[#2A2A2E] p-8 overflow-hidden relative group hover:border-[#3A3A3E] transition-all hover:shadow-[0_0_30px_rgba(200,169,81,0.05)] flex flex-col">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2.5 bg-[#3B82F6]/10 rounded-lg">
              <UsersThree size={24} className="text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-medium text-[#F5F5F7]">Activity Feed</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent z-10 pointer-events-none h-10 bottom-0" />
            <div className="space-y-3">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#0A0A0B] shrink-0" style={{ backgroundColor: msg.color }}>
                      {msg.initials}
                    </div>
                    <div>
                      <p className="text-xs text-[#F5F5F7] leading-snug"><span className="font-medium text-[#A1A1A6]">{msg.user}</span> {msg.action}</p>
                      <p className="text-[10px] text-[#6E6E73] mt-0.5">{msg.time}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CARD 4: Performance Analytics (1x2) */}
        <div className="md:col-span-2 bg-[#141416] rounded-2xl border border-[#2A2A2E] p-8 overflow-hidden relative group hover:border-[#3A3A3E] transition-all hover:shadow-[0_0_30px_rgba(200,169,81,0.05)] flex flex-col">
          <div className="flex items-center justify-between mb-8 z-10 relative">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#C8A951]/10 rounded-lg">
                <ChartBar size={24} className="text-[#C8A951]" />
              </div>
              <h3 className="text-xl font-medium text-[#F5F5F7]">Performance Analytics</h3>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <div className="text-xs text-[#A1A1A6]">Win Rate</div>
                <div className="text-lg font-medium text-[#F5F5F7]">{winRate}%</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#A1A1A6]">P&L</div>
                <div className="text-lg font-medium text-[#4ADE80]">+{profit.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full h-full min-h-[150px]">
            {/* Animated Line Chart SVG */}
            <svg viewBox="0 0 400 150" className="w-full h-full drop-shadow-[0_0_15px_rgba(200,169,81,0.3)]" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C8A951" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C8A951" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="#2A2A2E" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="400" y2="75" stroke="#2A2A2E" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#2A2A2E" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Area Fill */}
              <motion.path 
                d="M0 120 C 50 110, 100 80, 150 90 C 200 100, 250 50, 300 40 C 350 30, 380 20, 400 10 L 400 150 L 0 150 Z" 
                fill="url(#gradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Line */}
              <motion.path 
                d="M0 120 C 50 110, 100 80, 150 90 C 200 100, 250 50, 300 40 C 350 30, 380 20, 400 10" 
                fill="none" 
                stroke="#C8A951" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Data points */}
              <motion.circle cx="150" cy="90" r="4" fill="#141416" stroke="#C8A951" strokeWidth="2" 
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
              <motion.circle cx="300" cy="40" r="4" fill="#141416" stroke="#C8A951" strokeWidth="2" 
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }} />
              <motion.circle cx="400" cy="10" r="4" fill="#C8A951" 
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};
