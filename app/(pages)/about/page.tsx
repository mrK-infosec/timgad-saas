"use client";
import React from 'react';
import Link from 'next/link';
import { TrendUp, Handshake, ChartLineUp, ShieldCheck } from '@phosphor-icons/react';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B]">
      {/* Minimal Navbar */}
      <nav className="h-20 border-b border-[#2A2A2E] flex items-center justify-between px-6 md:px-12 bg-[#0A0A0B]/80 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors">
            <span className="text-2xl font-bold tracking-tighter">T</span>
            <TrendUp weight="bold" className="absolute -top-1 -right-2 w-4 h-4" />
          </div>
          <span className="font-semibold tracking-tight ml-2">TIMGAD</span>
        </Link>
        <Link href="/" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors">
          &larr; Back to Home
        </Link>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A951]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-[#F5F5F7]">About TIMGAD</h1>
            <div className="w-20 h-0.5 bg-[#C8A951] mt-6 mb-8" />
            <p className="text-xl text-[#A1A1A6] leading-relaxed max-w-2xl">
              Built by traders, for traders. We're on a mission to bring professional-grade trade management to every trader and fund worldwide.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-[#F5F5F7]">Our Story</h2>
          <div className="space-y-6 text-[#A1A1A6] leading-relaxed">
            <p>
              TIMGAD was born in 2024 from a simple frustration: existing project management tools weren't built for traders. We needed a command center that understood pips, risk management, and trade journals - not just generic task lists.
            </p>
            <p>
              Named after the ancient Roman city of Timgad in Algeria - a marvel of urban planning and precision - our platform brings that same level of order and discipline to your trading workflow.
            </p>
            <p>
              Today, we serve individual traders, prop firms, and hedge funds across the globe. Every feature we build is tested on our own trading desks first.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 md:px-12 bg-[#141416]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center text-[#F5F5F7]">Meet the Team</h2>
            <p className="text-[#A1A1A6] text-center mb-16 mt-4">Remote-first, trading-obsessed</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Karim A.', role: 'CEO & Co-Founder', bio: 'Ex-hedge fund trader. 12 years in FX markets.', initials: 'KA' },
                { name: 'Sarah M.', role: 'CTO & Co-Founder', bio: 'Full-stack engineer. Built trading systems at Revolut.', initials: 'SM' },
                { name: 'David K.', role: 'Head of Product', bio: 'Prop firm veteran. Turned $10k into $500k.', initials: 'DK' },
                { name: 'Amina R.', role: 'Lead Designer', bio: 'Crafted UIs used by 2M+ traders worldwide.', initials: 'AR' }
              ].map((member, i) => (
                <div key={i} className="bg-[#141416] border border-[#2A2A2E] rounded-xl p-8 text-center hover:border-[#3A3A3E] transition-colors">
                  <div className="w-20 h-20 bg-[#C8A951]/10 rounded-full mx-auto flex items-center justify-center text-[#C8A951] text-xl font-medium mb-6">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-medium text-[#F5F5F7]">{member.name}</h3>
                  <p className="text-sm text-[#C8A951] mt-1">{member.role}</p>
                  <p className="text-sm text-[#A1A1A6] mt-4 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-[#F5F5F7] mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141416] border border-[#2A2A2E] rounded-xl p-8">
              <Handshake size={48} className="text-[#C8A951] mb-6" weight="light" />
              <h3 className="text-xl font-medium text-[#F5F5F7]">Transparency</h3>
              <p className="text-[#A1A1A6] mt-3 leading-relaxed">No hidden fees. No black-box algorithms. We share our roadmap openly.</p>
            </div>
            <div className="bg-[#141416] border border-[#2A2A2E] rounded-xl p-8">
              <ChartLineUp size={48} className="text-[#C8A951] mb-6" weight="light" />
              <h3 className="text-xl font-medium text-[#F5F5F7]">Performance</h3>
              <p className="text-[#A1A1A6] mt-3 leading-relaxed">Every millisecond counts. We obsess over speed and reliability.</p>
            </div>
            <div className="bg-[#141416] border border-[#2A2A2E] rounded-xl p-8">
              <ShieldCheck size={48} className="text-[#C8A951] mb-6" weight="light" />
              <h3 className="text-xl font-medium text-[#F5F5F7]">Security</h3>
              <p className="text-[#A1A1A6] mt-3 leading-relaxed">Your trading data is encrypted and protected. Enterprise-grade security for every trader.</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-6 md:px-12 bg-[#141416]/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center text-[#F5F5F7] mb-16">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: '2024', title: 'Founded with a mission', desc: 'Karim and Sarah met at a trading conference in Dubai. Two weeks later, the first lines of TIMGAD were written.' },
                { year: 'Q1 2025', title: 'Closed Beta', desc: '50 professional traders tested TIMGAD daily. Their feedback shaped every pixel and every feature.' },
                { year: 'Q3 2025', title: 'Public Launch', desc: 'TIMGAD opens to traders worldwide. From retail traders to billion-dollar funds.' }
              ].map((milestone, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== 2 && <div className="absolute left-9 top-10 bottom-[-2rem] border-l-2 border-[#2A2A2E]" />}
                  <div className="shrink-0">
                    <span className="bg-[#C8A951]/10 text-[#C8A951] rounded-full px-4 py-1.5 text-sm font-mono border border-[#C8A951]/20">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="bg-[#141416] border border-[#2A2A2E] rounded-xl p-6 flex-1 hover:border-[#3A3A3E] transition-colors">
                    <h3 className="text-lg font-medium text-[#F5F5F7] mb-2">{milestone.title}</h3>
                    <p className="text-[#A1A1A6] leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#F5F5F7] mb-6">Ready to Command Your Trading Floor?</h2>
          <p className="text-[#A1A1A6] text-lg mb-10">Join thousands of professional traders who have already upgraded their workflow.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="bg-[#C8A951] text-[#0A0A0B] px-8 py-4 rounded-lg font-medium hover:bg-[#D4B96A] hover:shadow-[0_0_20px_rgba(200,169,81,0.3)] transition-all w-full sm:w-auto text-lg">
              Get Started Free
            </Link>
            <Link href="/#pricing" className="bg-[#141416] border border-[#2A2A2E] text-[#F5F5F7] px-8 py-4 rounded-lg font-medium hover:bg-[#2A2A2E] transition-all w-full sm:w-auto text-lg">
              See Pricing
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
