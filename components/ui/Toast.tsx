"use client";
import React from 'react';
import { useUiStore } from '@/store/uiStore';
import { CheckCircle, WarningCircle, Info } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export function Toast() {
  const { toasts, removeToast } = useUiStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg w-80 backdrop-blur-md
              ${toast.type === 'success' ? 'bg-[#1A3A2A]/90 border-[#4ADE80]/30' : 
                toast.type === 'error' ? 'bg-[#4A1A1A]/90 border-[#F87171]/30' : 
                'bg-[#141416]/90 border-[#2A2A2E]'}`}
          >
            {toast.type === 'success' && <CheckCircle size={20} className="text-[#4ADE80] shrink-0" weight="fill" />}
            {toast.type === 'error' && <WarningCircle size={20} className="text-[#F87171] shrink-0" weight="fill" />}
            {toast.type === 'info' && <Info size={20} className="text-[#C8A951] shrink-0" weight="fill" />}
            
            <p className="text-sm font-medium text-[#F5F5F7] flex-1">{toast.message}</p>
            
            <button 
              onClick={() => removeToast(toast.id)}
              className="text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors p-1"
            >
              ×
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
