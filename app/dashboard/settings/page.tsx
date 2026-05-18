import React from 'react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-light tracking-tight mb-1">Settings</h2>
        <p className="text-text-secondary text-sm">Manage your preferences and profile.</p>
      </div>
      
      <div className="bg-dark-surface border border-dark-border rounded-xl p-8 max-w-2xl">
        <h3 className="text-lg font-medium mb-6 border-b border-dark-border pb-4">Profile Information</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-text-secondary mb-2">Display Name</label>
            <input type="text" defaultValue="Alex M." className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-2 text-sm focus:border-accent-gold focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-text-secondary mb-2">Default Risk %</label>
            <input type="number" defaultValue="2.0" className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-2 text-sm focus:border-accent-gold focus:outline-none" />
          </div>
          <button className="bg-accent-gold text-dark-bg px-6 py-2 rounded-md font-medium text-sm">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
