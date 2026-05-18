import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-light tracking-tight mb-1">Analytics</h2>
        <p className="text-text-secondary text-sm">Performance metrics and alpha visualization.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <p className="text-text-secondary text-sm mb-2">Total P&L</p>
          <p className="text-3xl font-light text-trading-green-text">+$12,450.00</p>
        </div>
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <p className="text-text-secondary text-sm mb-2">Win Rate</p>
          <p className="text-3xl font-light text-text-primary">68.5%</p>
        </div>
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <p className="text-text-secondary text-sm mb-2">Profit Factor</p>
          <p className="text-3xl font-light text-accent-gold">2.4</p>
        </div>
      </div>
    </div>
  );
}
