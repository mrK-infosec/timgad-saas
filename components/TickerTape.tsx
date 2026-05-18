"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { tickerData } from '../data/tickerData';

export const TickerTape = () => {
  const prefersReducedMotion = useReducedMotion();
  const displayData = [...tickerData, ...tickerData];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-dark-bg/90 backdrop-blur-sm border-y border-dark-border py-2 overflow-hidden z-20">
      <div 
        aria-label="Live forex market data" 
        role="marquee" 
        aria-live="polite"
        className="flex"
      >
        {prefersReducedMotion ? (
          <div className="flex gap-8 px-4 whitespace-nowrap overflow-x-auto no-scrollbar">
            {tickerData.map((item, idx) => (
              <TickerItem key={idx} item={item} />
            ))}
          </div>
        ) : (
          <motion.div 
            className="flex gap-8 whitespace-nowrap shrink-0 pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          >
            {displayData.map((item, idx) => (
              <TickerItem key={idx} item={item} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const TickerItem = ({ item }: { item: any }) => (
  <div className="flex items-center gap-2 text-xs font-mono">
    <span className="text-text-primary font-medium">{item.symbol}</span>
    <span className="text-text-secondary">{item.price}</span>
    <span className={item.up ? 'text-trading-green-text' : 'text-loss-red-text'}>
      {item.change}
    </span>
  </div>
);

