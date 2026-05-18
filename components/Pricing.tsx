"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from '@phosphor-icons/react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { pricingData } from '../data/pricingData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsYearly(!isYearly);
    }
  };

  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <SectionHeading 
          label="PRICING" 
          title="Simple, Transparent Pricing" 
          subtitle="Everything you need to scale your trading operations, with no hidden fees."
        />

        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-3">
            <span className={`text-sm ${!isYearly ? 'text-text-primary font-medium' : 'text-text-secondary'}`}>Monthly</span>
            <div 
              className="w-14 h-7 bg-dark-surface border border-dark-border rounded-full p-1 cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              onClick={() => setIsYearly(!isYearly)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle yearly billing"
            >
              <motion.div 
                className="w-5 h-5 bg-accent-gold rounded-full absolute top-0.5"
                initial={false}
                animate={{ left: isYearly ? "28px" : "3px" }}
                transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={`text-sm ${isYearly ? 'text-text-primary font-medium' : 'text-text-secondary'}`}>
              Yearly <span className="ml-1 text-[10px] bg-trading-green-bg text-trading-green-text px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData.map((plan, idx) => (
            <div 
              key={plan.id}
              className={`bg-dark-surface border rounded-xl p-8 relative flex flex-col ${
                plan.highlighted ? 'border-accent-gold/40 shadow-[0_0_30px_rgba(200,169,81,0.05)]' : 'border-dark-border'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-dark-bg text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-xl font-medium text-text-primary">{plan.name}</h3>
              <p className="text-sm text-text-secondary mt-2 min-h-[40px]">{plan.description}</p>
              
              <div className="mt-6 mb-8 flex items-end gap-1">
                <span className="text-5xl font-light text-text-primary flex">
                  <span className="text-2xl mt-2 mr-1">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                    >
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-text-secondary pb-1">/mo</span>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-success-indicator shrink-0 mt-0.5" weight="bold" />
                    <span className="text-sm text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold ${
                  plan.highlighted 
                    ? 'bg-accent-gold text-dark-bg hover:bg-accent-gold-light hover:shadow-[0px_0px_20px_rgba(200,169,81,0.3)]' 
                    : 'bg-transparent border border-dark-border text-text-primary hover:border-text-secondary'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

