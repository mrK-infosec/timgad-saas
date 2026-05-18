"use client";
import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  label, 
  title, 
  subtitle, 
  className = '', 
  centered = true 
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      <span className="uppercase tracking-widest text-xs font-semibold text-accent-gold mb-4 block">
        {label}
      </span>
      <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

