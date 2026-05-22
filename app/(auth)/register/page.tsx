"use client";
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { TrendUp, Eye, EyeSlash, GoogleLogo, GithubLogo, CircleNotch } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/validations';
import { z } from 'zod';
import { useUiStore } from '@/store/uiStore';
import { motion } from 'framer-motion';

type RegisterForm = z.infer<typeof registerSchema>;

function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  
  const { data: session, status } = useSession();
  const { addToast } = useUiStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const passwordValue = watch('password', '');

  const getPasswordStrength = () => {
    if (!passwordValue) return 0;
    let score = 0;
    if (passwordValue.length >= 8) score++;
    if (/[A-Z]/.test(passwordValue)) score++;
    if (/[0-9]/.test(passwordValue)) score++;
    return score;
  };

  const strength = getPasswordStrength();

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, password: data.password, plan })
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Registration failed');

      const signInRes = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (signInRes?.error) throw new Error('Auto sign-in failed');

      addToast('success', `Welcome to TIMGAD, ${data.name}! 🎉`);
      router.push('/dashboard');
    } catch (err: any) {
      addToast('error', err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A951]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A3A2A]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md bg-[#141416] border border-[#2A2A2E] rounded-xl p-8 shadow-2xl relative z-10 mt-10 mb-10"
      >
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 group mb-6 cursor-pointer">
            <div className="relative flex items-center justify-center text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors duration-200">
              <span className="text-4xl font-bold tracking-tighter">T</span>
              <TrendUp weight="bold" className="absolute -top-1 -right-3 w-6 h-6" />
            </div>
            <span className="text-2xl font-semibold tracking-tight ml-3 text-[#F5F5F7]">TIMGAD</span>
          </Link>
          <h1 className="text-2xl font-light text-[#F5F5F7] tracking-tight">Create your account</h1>
          <p className="text-[#A1A1A6] text-sm mt-2 text-center">Start managing your trades like a pro</p>
        </div>

        {plan && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#C8A951]/10 border border-[#C8A951]/30 rounded-lg p-3 mb-6 text-sm text-[#C8A951] text-center"
          >
            🎯 You're signing up for the {plan === 'pro' ? 'Pro Trader' : 'Fund & Team'} plan
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm text-[#A1A1A6]">Full Name</label>
            <input
              {...register('name')}
              type="text"
              className={`w-full bg-[#0A0A0B] border ${errors.name ? 'border-[#F87171]' : 'border-[#2A2A2E]'} rounded-lg px-4 py-2.5 text-[#F5F5F7] focus:outline-none focus:border-[#C8A951] focus:ring-1 focus:ring-[#C8A951]/30 transition-colors duration-200`}
              placeholder="Ahmed El Trader"
            />
            {errors.name && <p className="text-[#F87171] text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#A1A1A6]">Email</label>
            <input
              {...register('email')}
              type="email"
              className={`w-full bg-[#0A0A0B] border ${errors.email ? 'border-[#F87171]' : 'border-[#2A2A2E]'} rounded-lg px-4 py-2.5 text-[#F5F5F7] focus:outline-none focus:border-[#C8A951] focus:ring-1 focus:ring-[#C8A951]/30 transition-colors duration-200`}
              placeholder="ahmed@example.com"
            />
            {errors.email && <p className="text-[#F87171] text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div className="space-y-1.5">
            <label className="text-sm text-[#A1A1A6]">Password</label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className={`w-full bg-[#0A0A0B] border ${errors.password ? 'border-[#F87171]' : 'border-[#2A2A2E]'} rounded-lg px-4 py-2.5 text-[#F5F5F7] focus:outline-none focus:border-[#C8A951] focus:ring-1 focus:ring-[#C8A951]/30 transition-colors duration-200`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1A6] hover:text-[#F5F5F7] transition-colors duration-200 cursor-pointer"
              >
                {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            {/* Animated Password Strength Indicator */}
            <div className="flex gap-1 mt-2">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    strength >= level
                      ? level === 1 ? 'bg-[#F87171]' : level === 2 ? 'bg-[#C8A951]' : 'bg-[#4ADE80]'
                      : 'bg-[#2A2A2E]'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs mt-1 text-[#6E6E73]">
              {strength === 1 && 'Weak - Add uppercase and numbers'}
              {strength === 2 && 'Fair - Add numbers for stronger password'}
              {strength === 3 && 'Strong password!'}
            </p>
            {errors.password && <p className="text-[#F87171] text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#A1A1A6]">Confirm Password</label>
            <input
              {...register('confirmPassword')}
              type="password"
              className={`w-full bg-[#0A0A0B] border ${errors.confirmPassword ? 'border-[#F87171]' : 'border-[#2A2A2E]'} rounded-lg px-4 py-2.5 text-[#F5F5F7] focus:outline-none focus:border-[#C8A951] focus:ring-1 focus:ring-[#C8A951]/30 transition-colors duration-200`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <p className="text-[#F87171] text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 bg-[#C8A951] text-[#0A0A0B] font-medium rounded-lg hover:bg-[#D4B96A] hover:shadow-[0px_0px_20px_rgba(200,169,81,0.3)] transition-all duration-200 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed disabled:pointer-events-none flex items-center justify-center gap-2 mt-4"
          >
            {isLoading ? (
              <><CircleNotch size={18} className="animate-spin" /> Creating your account...</>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#2A2A2E]"></div>
          <span className="text-xs text-[#6E6E73]">or continue with</span>
          <div className="flex-1 h-px bg-[#2A2A2E]"></div>
        </div>

        <div className="flex gap-4">
          <button onClick={() => addToast('info', 'OAuth not configured')} className="flex-1 flex items-center justify-center gap-2 bg-[#0A0A0B] border border-[#2A2A2E] hover:border-[#3A3A3E] hover:bg-[#141416] rounded-lg py-2.5 text-sm text-[#A1A1A6] transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-lg">
            <GoogleLogo size={20} /> Google
          </button>
          <button onClick={() => addToast('info', 'OAuth not configured')} className="flex-1 flex items-center justify-center gap-2 bg-[#0A0A0B] border border-[#2A2A2E] hover:border-[#3A3A3E] hover:bg-[#141416] rounded-lg py-2.5 text-sm text-[#A1A1A6] transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-lg">
            <GithubLogo size={20} /> GitHub
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-[#A1A1A6]">
          Already have an account? <Link href="/login" className="text-[#C8A951] hover:underline cursor-pointer transition-all duration-200">Sign in</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] p-6">
        <div className="flex flex-col items-center gap-4">
          <CircleNotch size={32} className="animate-spin text-[#C8A951]" />
          <p className="text-[#A1A1A6] text-sm">Loading secure registration...</p>
        </div>
      </div>
    }>
      <RegisterPageContent />
    </Suspense>
  );
}
