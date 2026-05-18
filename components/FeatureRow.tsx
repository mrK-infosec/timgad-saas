"use client";
import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import { ScrollReveal } from './ScrollReveal';

export const FeatureRow = () => {
  return (
    <div className="py-20">
      {/* Row 1 */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="uppercase tracking-widest text-xs font-semibold text-accent-gold mb-4 block">
                JOURNALING
              </span>
              <h3 className="text-3xl font-light tracking-tight text-text-primary mb-6">
                Your Trading Journal, Reinvented.
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Stop using messy spreadsheets. TIMGAD automatically organizes your trade logs with rich metadata, tagging, and seamless charting integrations.
              </p>
              <ul className="space-y-4">
                {['Automatic P&L calculation', 'Custom tagging system', 'Attach chart screenshots directly'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent-gold shrink-0 mt-0.5" weight="light" />
                    <span className="text-sm text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-surface/80 z-10 bottom-0 h-1/2 pointer-events-none"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-4 text-xs text-text-tertiary pb-2 border-b border-dark-border">
                  <span>Pair</span>
                  <span>Lot Size</span>
                  <span>Tags</span>
                  <span className="text-right">P&L</span>
                </div>
                {[
                  { pair: 'GBP/JPY', size: '2.5', tag: 'Breakout', pnl: '+$1,240.00', win: true },
                  { pair: 'EUR/USD', size: '5.0', tag: 'Scalp', pnl: '-$450.00', win: false },
                  { pair: 'XAU/USD', size: '1.0', tag: 'Swing', pnl: '+$3,100.00', win: true },
                  { pair: 'USD/CAD', size: '2.0', tag: 'News', pnl: '+$85.00', win: true },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 text-sm items-center py-2 border-b border-dark-border/50">
                    <span className="font-medium">{row.pair}</span>
                    <span className="text-text-secondary">{row.size}</span>
                    <span className="text-xs bg-dark-bg px-2 py-1 rounded w-fit border border-dark-border text-text-secondary">{row.tag}</span>
                    <span className={`text-right font-mono ${row.win ? 'text-trading-green-text' : 'text-loss-red-text'}`}>{row.pnl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Row 2 */}
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-dark-surface border border-dark-border rounded-xl p-6 shadow-2xl relative">
              <div className="space-y-4">
                <div className="grid grid-cols-3 text-xs text-text-tertiary pb-2 border-b border-dark-border">
                  <span>Trader</span>
                  <span>Win Rate</span>
                  <span className="text-right">Open Positions</span>
                </div>
                {[
                  { name: 'Alex M.', rate: '68%', pos: 3 },
                  { name: 'Sarah J.', rate: '72%', pos: 1 },
                  { name: 'David K.', rate: '54%', pos: 5 },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 text-sm items-center py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-dark-border flex items-center justify-center text-[10px]">{row.name.charAt(0)}</div>
                      <span className="font-medium">{row.name}</span>
                    </div>
                    <span className="text-text-secondary">{row.rate}</span>
                    <span className="text-right text-text-tertiary">{row.pos}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="uppercase tracking-widest text-xs font-semibold text-accent-gold mb-4 block">
                TEAM OVERSIGHT
              </span>
              <h3 className="text-3xl font-light tracking-tight text-text-primary mb-6">
                Scale Your Fund's Intelligence.
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Get a bird's-eye view of your entire trading desk. Monitor open exposure, track individual performance metrics, and enforce risk parameters globally.
              </p>
              <ul className="space-y-4">
                {['Real-time desk exposure', 'Individual performance tracking', 'Custom compliance rulesets'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent-gold shrink-0 mt-0.5" weight="light" />
                    <span className="text-sm text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

