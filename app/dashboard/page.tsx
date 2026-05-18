"use client";
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-light tracking-tight mb-2">Kanban Board</h2>
        <p className="text-text-secondary text-sm">Manage your trading pipeline and execute with precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Idea Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">Idea</h3>
            <span className="bg-dark-border text-text-secondary text-xs px-2 py-0.5 rounded-full">1</span>
          </div>
          <div className="bg-dark-surface border border-dark-border rounded-lg p-4 cursor-pointer hover:border-dark-border-hover transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-dark-border text-text-secondary">To Do</span>
              <span className="text-xs text-text-tertiary">#TK-040</span>
            </div>
            <h4 className="text-sm font-medium text-text-primary mb-1">Review Q3 Performance</h4>
            <p className="text-xs text-text-secondary">Compile win-rate statistics</p>
          </div>
        </div>

        {/* Analysis Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-accent-gold uppercase tracking-wider">Analysis</h3>
            <span className="bg-accent-gold/20 text-accent-gold text-xs px-2 py-0.5 rounded-full">1</span>
          </div>
          <div className="bg-dark-surface border border-accent-gold/40 shadow-[0_0_15px_rgba(200,169,81,0.1)] rounded-lg p-4 cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-gold">Review</span>
              <span className="text-xs text-text-tertiary">#TK-041</span>
            </div>
            <h4 className="text-sm font-medium text-text-primary mb-1">Set Risk Parameters</h4>
            <p className="text-xs text-text-secondary">Adjust maximum daily drawdown limits</p>
          </div>
        </div>

        {/* Execution Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-blue-500 uppercase tracking-wider">Execution</h3>
            <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-0.5 rounded-full">1</span>
          </div>
          <div className="bg-dark-surface border border-dark-border rounded-lg p-4 cursor-pointer hover:border-dark-border-hover transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-500">In Progress</span>
              <span className="text-xs text-text-tertiary">#TK-042</span>
            </div>
            <h4 className="text-sm font-medium text-text-primary mb-1">EUR/USD Analysis</h4>
            <p className="text-xs text-text-secondary">Review 4H structural breaks</p>
          </div>
        </div>

        {/* Closed Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-trading-green-text uppercase tracking-wider">Closed</h3>
            <span className="bg-trading-green-bg text-trading-green-text text-xs px-2 py-0.5 rounded-full">0</span>
          </div>
          <div className="h-32 border-2 border-dashed border-dark-border rounded-lg flex items-center justify-center text-sm text-text-tertiary">
            Drag here to close trade
          </div>
        </div>
      </div>
    </div>
  );
}
