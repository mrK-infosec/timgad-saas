"use client";
import React, { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { List, X, TrendUp, CircleNotch } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const isScrolled = scrollPosition > 20;
  
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleMainCTA = () => {
    setIsNavigating(true);
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/register');
    }
  };

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-[#2A2A2E] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => { setIsOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); router.push('/') }} className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded cursor-pointer">
          <div className="relative flex items-center justify-center text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors duration-200">
            <span className="text-2xl font-bold tracking-tighter">T</span>
            <TrendUp weight="bold" className="absolute -top-1 -right-2 w-4 h-4" />
          </div>
          <span className="font-semibold tracking-tight text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors duration-200 ml-2">
            TIMGAD
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className={`text-sm transition-colors duration-200 cursor-pointer ${pathname === '/products' ? 'text-[#C8A951]' : 'text-[#A1A1A6] hover:text-[#F5F5F7]'}`}>
            Product
          </Link>
          <button onClick={() => handleScrollTo('features')} className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors duration-200 cursor-pointer">
            Features
          </button>
          <button onClick={() => handleScrollTo('pricing')} className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors duration-200 cursor-pointer">
            Pricing
          </button>
          <Link href="/about" className={`text-sm transition-colors duration-200 cursor-pointer ${pathname === '/about' ? 'text-[#C8A951]' : 'text-[#A1A1A6] hover:text-[#F5F5F7]'}`}>
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => router.push('/login')} className="text-sm font-medium text-[#F5F5F7] hover:text-[#C8A951] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded px-3 py-2 cursor-pointer">
            Sign In
          </button>
          <button 
            onClick={handleMainCTA}
            disabled={status === 'loading' || isNavigating}
            className="text-sm font-medium bg-[#C8A951] text-[#0A0A0B] px-5 py-2.5 rounded-md hover:bg-[#D4B96A] hover:shadow-[0px_0px_20px_rgba(200,169,81,0.3)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] disabled:opacity-50 disabled:cursor-wait cursor-pointer flex items-center justify-center min-w-[170px]"
          >
            {status === 'loading' || isNavigating ? (
              <CircleNotch size={18} className="animate-spin text-[#0A0A0B]" />
            ) : (
              'Start Trading Smarter'
            )}
          </button>
        </div>

        <button 
          className="md:hidden text-[#F5F5F7] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#141416] border-b border-[#2A2A2E] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href="/products" onClick={() => setIsOpen(false)} className={`block py-2 cursor-pointer ${pathname === '/products' ? 'text-[#C8A951]' : 'text-[#A1A1A6]'}`}>
                Product
              </Link>
              <button onClick={() => handleScrollTo('features')} className="text-left text-[#A1A1A6] hover:text-[#F5F5F7] py-2 cursor-pointer">
                Features
              </button>
              <button onClick={() => handleScrollTo('pricing')} className="text-left text-[#A1A1A6] hover:text-[#F5F5F7] py-2 cursor-pointer">
                Pricing
              </button>
              <Link href="/about" onClick={() => setIsOpen(false)} className={`block py-2 cursor-pointer ${pathname === '/about' ? 'text-[#C8A951]' : 'text-[#A1A1A6]'}`}>
                About
              </Link>
              
              <hr className="border-[#2A2A2E] my-2" />
              <button onClick={() => router.push('/login')} className="text-left py-2 font-medium cursor-pointer">Sign In</button>
              <button 
                onClick={handleMainCTA}
                disabled={status === 'loading' || isNavigating}
                className="bg-[#C8A951] text-[#0A0A0B] px-4 py-3 rounded-md font-medium text-center disabled:opacity-50 cursor-pointer flex justify-center items-center"
              >
                {status === 'loading' || isNavigating ? <CircleNotch size={18} className="animate-spin text-[#0A0A0B]" /> : 'Start Trading Smarter'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
