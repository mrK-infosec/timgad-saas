"use client";
import React from 'react';

interface GlowEffectProps {
  color: string;
  position: string;
  opacity?: number;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({ color, position, opacity = 0.08 }) => {
  return (
    <div 
      className={`absolute w-96 h-96 rounded-full blur-[100px] pointer-events-none -z-10 ${position}`}
      style={{ backgroundColor: color, opacity }}
      aria-hidden="true"
    />
  );
};

