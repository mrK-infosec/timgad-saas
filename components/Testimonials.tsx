"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { testimonialsData } from '../data/testimonialsData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section id="testimonials" className="py-24 bg-dark-surface/30 border-y border-dark-border">
      <div className="max-w-4xl mx-auto px-6 relative">
        <ScrollReveal>
          <SectionHeading 
            label="TESTIMONIALS" 
            title="Trusted by Professional Traders" 
          />
          
          <div 
            className="relative min-h-[250px] flex flex-col items-center justify-center text-center mt-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <Quotes size={120} weight="fill" className="absolute top-0 text-accent-gold/5 -z-10 -translate-y-1/4" aria-hidden="true" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                className="w-full"
              >
                <blockquote className="text-2xl md:text-3xl font-light text-text-primary italic leading-relaxed mb-8">
                  "{testimonialsData[currentIndex].quote}"
                </blockquote>
                <div className="text-sm">
                  <span className="font-medium text-text-primary">{testimonialsData[currentIndex].author}</span>
                  <span className="text-text-secondary"> — {testimonialsData[currentIndex].title} at {testimonialsData[currentIndex].company}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-12">
              <button 
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2 text-text-secondary hover:text-accent-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded"
              >
                <CaretLeft size={24} weight="light" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    aria-current={idx === currentIndex ? "true" : "false"}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-accent-gold' : 'bg-dark-border hover:bg-text-secondary'}`}
                  />
                ))}
              </div>
              <button 
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 text-text-secondary hover:text-accent-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded"
              >
                <CaretRight size={24} weight="light" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

