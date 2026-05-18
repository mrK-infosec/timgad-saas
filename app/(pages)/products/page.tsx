"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { TrendUp, Kanban, ChartBar, UsersThree, CheckCircle, Question, CaretDown, ShieldCheck } from '@phosphor-icons/react';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'pro' | 'fund'>('pro');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { name: 'Trade Pipeline (Kanban Board)', pro: true, fund: true, desc: 'Visual drag-and-drop board for tracking trade lifecycle.' },
    { name: 'Analytics Dashboard', pro: true, fund: true, desc: 'Deep insights into win rates, R:R, and profit factors.' },
    { name: 'Team Collaboration', pro: false, fund: true, desc: 'Shared journals, comments, and tagging for trading desks.' },
    { name: 'Multi-User Access', pro: false, fund: 'Up to 20', desc: 'Add multiple traders to the same workspace.' },
    { name: 'API Access', pro: false, fund: true, desc: 'Programmatic access to your trading data.' },
    { name: 'Priority Support', pro: 'Email', fund: '24/7 Chat', desc: 'Get help when you need it.' },
    { name: 'Custom Integrations', pro: false, fund: true, desc: 'Connect to external tools and brokers.' },
    { name: 'Advanced Risk Management', pro: 'Basic', fund: 'Advanced', desc: 'Enforce daily drawdown limits and position sizing rules.' },
    { name: 'Audit Logs', pro: false, fund: true, desc: 'Track every action taken by your team members.' },
    { name: 'Data Export', pro: 'CSV', fund: 'CSV + PDF + API', desc: 'Export your journals for tax and investor reporting.' },
    { name: 'Economic Calendar', pro: true, fund: true, desc: 'Built-in calendar with impact warnings.' },
    { name: 'Real-time Market Data', pro: 'Delayed', fund: 'Real-time', desc: 'Live price feeds directly in your dashboard.' },
    { name: 'White Label', pro: false, fund: 'Add-on', desc: 'Use your own logo and branding.' },
    { name: 'SLA Guarantee', pro: '99.5%', fund: '99.99%', desc: 'Uptime guarantee for your trading infrastructure.' },
  ];

  const faqs = [
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically." },
    { q: "Is there a free trial?", a: "We offer a 14-day free trial on both Pro and Fund plans. No credit card required to start." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. For Enterprise annual plans, we also accept wire transfers." },
    { q: "Can I cancel anytime?", a: "Absolutely. There are no long-term contracts for monthly plans. You can cancel your subscription at any time with one click." },
    { q: "Do you offer refunds?", a: "We have a 14-day no-questions-asked money-back guarantee. If you're not satisfied within your first 14 days of a paid plan, we'll refund you completely." },
    { q: "Is my trading data secure?", a: "Security is our top priority. We use bank-grade 256-bit encryption. We are SOC 2 Type II compliant and perform regular security audits." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B]">
      {/* Minimal Navbar */}
      <nav className="h-20 border-b border-[#2A2A2E] flex items-center justify-between px-6 md:px-12 bg-[#0A0A0B]/80 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative flex items-center justify-center text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors duration-200">
            <span className="text-2xl font-bold tracking-tighter">T</span>
            <TrendUp weight="bold" className="absolute -top-1 -right-2 w-4 h-4" />
          </div>
          <span className="font-semibold tracking-tight ml-2">TIMGAD</span>
        </Link>
        <Link href="/" className="text-sm text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors cursor-pointer">
          &larr; Back to Home
        </Link>
      </nav>

      <main className="flex-1">
        {/* HERO */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A951]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#F5F5F7] mb-6">
              Pricing that scales<br />with your <span className="text-[#C8A951]">profits</span>.
            </h1>
            <p className="text-xl text-[#A1A1A6] leading-relaxed max-w-2xl mx-auto mb-10">
              Simple, transparent pricing. Everything you need to plan, execute, and analyze your trades.
            </p>
            <div className="flex items-center justify-center gap-8 text-[#6E6E73] text-sm">
              <div className="flex items-center gap-2"><CheckCircle weight="fill" className="text-[#C8A951]" /> 500+ Traders</div>
              <div className="flex items-center gap-2"><CheckCircle weight="fill" className="text-[#C8A951]" /> 4.9/5 Rating</div>
              <div className="flex items-center gap-2"><CheckCircle weight="fill" className="text-[#C8A951]" /> SOC 2 Compliant</div>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-12">
            <div className="bg-[#141416] border border-[#2A2A2E] rounded-full p-1 flex items-center relative">
              <button 
                onClick={() => setBilling('monthly')} 
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${billing === 'monthly' ? 'text-[#0A0A0B]' : 'text-[#A1A1A6] hover:text-[#F5F5F7]'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBilling('yearly')} 
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${billing === 'yearly' ? 'text-[#0A0A0B]' : 'text-[#A1A1A6] hover:text-[#F5F5F7]'}`}
              >
                Yearly
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${billing === 'yearly' ? 'bg-[#0A0A0B] text-[#C8A951]' : 'bg-[#C8A951]/20 text-[#C8A951]'}`}>Save 17%</span>
              </button>
              <motion.div 
                className="absolute top-1 bottom-1 bg-[#C8A951] rounded-full z-0"
                initial={false}
                animate={{ 
                  left: billing === 'monthly' ? '4px' : 'calc(50% - 22px)', 
                  width: billing === 'monthly' ? '92px' : '150px' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Pro Card */}
            <div className="bg-[#141416] border border-[#2A2A2E] rounded-2xl p-8 hover:border-[#3A3A3E] transition-all duration-300">
              <h3 className="text-xl font-medium text-[#F5F5F7] mb-2">Pro Trader</h3>
              <p className="text-[#A1A1A6] text-sm mb-6 h-10">For serious individual traders managing their own capital.</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#F5F5F7]">$</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={billing}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-5xl font-bold text-[#F5F5F7] tracking-tight"
                  >
                    {billing === 'monthly' ? '29' : '24'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[#A1A1A6] ml-1">/ mo</span>
              </div>
              <Link href={`/register?plan=pro&billing=${billing}`} className="block w-full py-3 bg-[#2A2A2E] text-[#F5F5F7] text-center font-medium rounded-lg hover:bg-[#3A3A3E] transition-colors cursor-pointer mb-3">
                Start Free Trial
              </Link>
              <p className="text-center text-xs text-[#6E6E73] mb-8">14 days free. No credit card required.</p>
              
              <div className="space-y-4">
                <p className="text-sm font-medium text-[#F5F5F7] mb-4">Everything you need:</p>
                {['Trade Pipeline Kanban', 'Full Analytics Dashboard', 'Economic Calendar Integration', 'Basic Risk Management'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle weight="fill" className="text-[#C8A951]" size={18} />
                    <span className="text-sm text-[#A1A1A6]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fund Card */}
            <div className="bg-[#141416] border-2 border-[#C8A951] rounded-2xl p-8 shadow-[0_0_30px_rgba(200,169,81,0.1)] relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A951] text-[#0A0A0B] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full animate-pulse">
                Most Popular
              </div>
              <h3 className="text-xl font-medium text-[#F5F5F7] mb-2">Fund & Team</h3>
              <p className="text-[#A1A1A6] text-sm mb-6 h-10">For prop firms and trading desks scaling their operations.</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#F5F5F7]">$</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={billing}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-5xl font-bold text-[#F5F5F7] tracking-tight"
                  >
                    {billing === 'monthly' ? '99' : '82'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[#A1A1A6] ml-1">/ mo</span>
              </div>
              <Link href={`/register?plan=fund&billing=${billing}`} className="block w-full py-3 bg-[#C8A951] text-[#0A0A0B] text-center font-medium rounded-lg hover:bg-[#D4B96A] hover:shadow-[0_0_20px_rgba(200,169,81,0.3)] transition-all cursor-pointer mb-3">
                Start Free Trial
              </Link>
              <p className="text-center text-xs text-[#6E6E73] mb-8">14 days free. Up to 5 users included.</p>
              
              <div className="space-y-4">
                <p className="text-sm font-medium text-[#F5F5F7] mb-4">Everything in Pro, plus:</p>
                {['Multi-User Team Console', 'Advanced Risk Enforcement', 'Audit Logs & Reporting', 'API Access', '24/7 Priority Support'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle weight="fill" className="text-[#C8A951]" size={18} />
                    <span className="text-sm text-[#A1A1A6]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-center text-[#F5F5F7] mb-16">Compare all features</h2>
          
          {/* Mobile Tabs */}
          <div className="flex md:hidden bg-[#141416] p-1 rounded-lg mb-8">
            <button onClick={() => setActiveTab('pro')} className={`flex-1 py-2 text-sm rounded-md transition-colors ${activeTab === 'pro' ? 'bg-[#2A2A2E] text-[#F5F5F7]' : 'text-[#A1A1A6]'}`}>Pro Trader</button>
            <button onClick={() => setActiveTab('fund')} className={`flex-1 py-2 text-sm rounded-md transition-colors ${activeTab === 'fund' ? 'bg-[#C8A951] text-[#0A0A0B] font-medium' : 'text-[#A1A1A6]'}`}>Fund & Team</button>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left min-w-[600px]">
              <thead className="sticky top-20 bg-[#0A0A0B] z-20">
                <tr className="border-b border-[#2A2A2E]">
                  <th className="py-6 px-6 font-medium text-[#A1A1A6] w-[40%]">Features</th>
                  <th className={`py-6 px-6 font-medium text-center w-[30%] ${activeTab === 'fund' ? 'hidden md:table-cell text-[#A1A1A6]' : 'text-[#F5F5F7]'}`}>Pro Trader</th>
                  <th className={`py-6 px-6 font-medium text-center w-[30%] ${activeTab === 'pro' ? 'hidden md:table-cell text-[#A1A1A6]' : 'text-[#C8A951]'}`}>Fund & Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A2E]">
                {features.map((row, i) => (
                  <tr key={i} className="hover:bg-[#141416] transition-colors group cursor-default">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-[#F5F5F7] text-sm">{row.name}</span>
                        <div className="relative group/tooltip">
                          <Question size={16} className="text-[#6E6E73] cursor-help" />
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-[#2A2A2E] text-xs text-[#F5F5F7] rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-30 pointer-events-none">
                            {row.desc}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-[#2A2A2E]" />
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className={`py-5 px-6 text-center ${activeTab === 'fund' ? 'hidden md:table-cell' : ''}`}>
                      {row.pro === true ? <CheckCircle size={20} className="text-[#4ADE80] mx-auto" weight="fill" /> : 
                       row.pro === false ? <span className="text-[#6E6E73]">-</span> : 
                       <span className="text-[#A1A1A6] text-sm">{row.pro}</span>}
                    </td>
                    
                    <td className={`py-5 px-6 text-center ${activeTab === 'pro' ? 'hidden md:table-cell' : ''}`}>
                      {row.fund === true ? <CheckCircle size={20} className="text-[#4ADE80] mx-auto" weight="fill" /> : 
                       row.fund === false ? <span className="text-[#6E6E73]">-</span> : 
                       <span className="text-[#C8A951] text-sm font-medium">{row.fund}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 px-6 md:px-12 bg-[#141416]/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-center text-[#F5F5F7] mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#0A0A0B] border border-[#2A2A2E] rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                  >
                    <span className="font-medium text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors">{faq.q}</span>
                    <CaretDown size={20} className={`text-[#6E6E73] transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#C8A951]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-[#A1A1A6] leading-relaxed border-t border-[#2A2A2E]/50 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE CTA */}
        <section className="py-24 px-6 md:px-12 border-y border-[#2A2A2E]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-[#F5F5F7] mb-4">Need a custom plan?</h2>
            <p className="text-[#A1A1A6] mb-8">For large prop firms and hedge funds needing white-labeling, custom SLAs, and dedicated account management.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2A2A2E] hover:bg-[#3A3A3E] text-[#F5F5F7] px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer">
              Contact Sales
            </Link>
          </div>
        </section>

        {/* GUARANTEE BANNER */}
        <section className="py-12 bg-[#141416]">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-center gap-4 text-[#A1A1A6]">
            <ShieldCheck size={32} className="text-[#C8A951]" weight="light" />
            <span className="text-lg">14-day money-back guarantee. No questions asked.</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
