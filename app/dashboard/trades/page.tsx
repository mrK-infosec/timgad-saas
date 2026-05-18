import React from 'react';

export default function TradesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-light tracking-tight mb-1">Trade Log</h2>
          <p className="text-text-secondary text-sm">Your complete history of execution.</p>
        </div>
        <button className="bg-accent-gold text-dark-bg px-4 py-2 rounded-md font-medium text-sm">New Trade</button>
      </div>
      
      <div className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-dark-bg border-b border-dark-border text-text-secondary">
            <tr>
              <th className="px-6 py-3 font-medium">Pair</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">P&L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border">
            <tr className="hover:bg-dark-bg/50 transition-colors">
              <td className="px-6 py-4 font-medium">EUR/USD</td>
              <td className="px-6 py-4">Long</td>
              <td className="px-6 py-4"><span className="text-trading-green-text bg-trading-green-bg px-2 py-1 rounded-full text-xs">Closed</span></td>
              <td className="px-6 py-4 text-right text-trading-green-text font-mono">+$450.00</td>
            </tr>
            <tr className="hover:bg-dark-bg/50 transition-colors">
              <td className="px-6 py-4 font-medium">GBP/JPY</td>
              <td className="px-6 py-4">Short</td>
              <td className="px-6 py-4"><span className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-full text-xs">In Progress</span></td>
              <td className="px-6 py-4 text-right text-text-secondary font-mono">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
