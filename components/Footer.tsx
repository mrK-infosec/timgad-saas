"use client";
import React from 'react';
import Link from 'next/link';
import { TrendUp, XLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

export const Footer = () => {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="border-t border-[#2A2A2E] py-16 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2">
            <button onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); router.push('/'); }} className="flex items-center gap-2 mb-4 group inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded">
              <div className="relative flex items-center justify-center text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors">
                <span className="text-3xl font-bold tracking-tighter">T</span>
                <TrendUp weight="bold" className="absolute -top-1 -right-2 w-5 h-5" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors ml-2">
                TIMGAD
              </span>
            </button>
            <p className="text-sm text-[#A1A1A6] max-w-xs mb-6">
              The operational system for serious forex traders. Command your trading floor with precision.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/timgad" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-[#A1A1A6] hover:text-[#C8A951] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded p-1">
                <XLogo size={20} weight="light" />
              </a>
              <a href="https://linkedin.com/company/timgad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#A1A1A6] hover:text-[#C8A951] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded p-1">
                <LinkedinLogo size={20} weight="light" />
              </a>
              <a href="https://github.com/timgad" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#A1A1A6] hover:text-[#C8A951] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] rounded p-1">
                <GithubLogo size={20} weight="light" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#F5F5F7] font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('features')} className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Features</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Pricing</button></li>
              <li><Link href="/products" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Products</Link></li>
              <li><Link href="/products" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F5F7] font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">About</Link></li>
              <li><Link href="/blog" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F5F7] font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors focus:outline-none">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2A2E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6E6E73]">
            © {new Date().getFullYear()} TIMGAD. All rights reserved.
          </p>
          <p className="text-xs text-[#6E6E73]">
            Built for traders, by traders.
          </p>
        </div>
      </div>
    </footer>
  );
};
