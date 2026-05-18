"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { SquaresFour, ChartLineUp, ListBullets, Gear, TrendUp, SignOut } from '@phosphor-icons/react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <SquaresFour size={20} /> },
    { name: 'Trades', path: '/dashboard/trades', icon: <ListBullets size={20} /> },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <ChartLineUp size={20} /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Gear size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-dark-bg text-text-primary">
      {/* Sidebar */}
      <aside className="w-64 border-r border-dark-border bg-dark-surface hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 text-text-primary hover:text-accent-gold transition-colors">
            <div className="relative flex items-center justify-center">
              <span className="text-2xl font-bold tracking-tighter">T</span>
              <TrendUp weight="bold" className="absolute -top-1 -right-2 w-4 h-4" />
            </div>
            <span className="font-semibold tracking-tight ml-2">TIMGAD</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-dark-border text-text-primary font-medium' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-dark-border/50'
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-dark-border">
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-text-secondary hover:text-loss-red-text hover:bg-loss-red-bg/20 transition-colors"
          >
            <SignOut size={20} />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-dark-border flex items-center px-6 md:px-8 bg-dark-surface/50 backdrop-blur-md">
          <h1 className="text-lg font-medium">Trading Floor</h1>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
