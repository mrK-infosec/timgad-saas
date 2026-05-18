"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { TrendUp, Eye, EyeSlash, GoogleLogo, GithubLogo, CircleNotch } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/validations';
import { z } from 'zod';
import { useUiStore } from '@/store/uiStore';
import { motion } from 'framer-motion';

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { addToast } = useUiStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        addToast('error', 'Invalid email or password');
      } else {
        addToast('success', 'Welcome back!');
        router.push('/dashboard');
      }
    } catch (error) {
      addToast('error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    addToast('info', 'Guest login is disabled for this demo');
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    addToast('info', 'Check your email for reset link');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A951]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A3A2A]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md bg-[#141416] border border-[#2A2A2E] rounded-xl p-8 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 group mb-6 cursor-pointer">
            <div className="relative flex items-center justify-center text-[#F5F5F7] group-hover:text-[#C8A951] transition-colors duration-200">
              <span className="text-4xl font-bold tracking-tighter">T</span>
              <TrendUp weight="bold" className="absolute -top-1 -right-3 w-6 h-6" />
            </div>
            <span className="text-2xl font-semibold tracking-tight ml-3 text-[#F5F5F7]">TIMGAD</span>
          </Link>
          <h1 className="text-2xl font-light text-[#F5F5F7] tracking-tight">Welcome back</h1>
          <p className="text-[#A1A1A6] text-sm mt-2 text-center">Sign in to your trading command center</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm text-[#A1A1A6]">Email</label>
            <input
              {...register('email')}
              type="email"
              className={`w-full bg-[#0A0A0B] border ${errors.email ? 'border-[#F87171]' : 'border-[#2A2A2E]'} rounded-lg px-4 py-2.5 text-[#F5F5F7] focus:outline-none focus:border-[#C8A951] focus:ring-1 focus:ring-[#C8A951]/30 transition-colors duration-200`}
              placeholder="trader@example.com"
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
            {errors.password && <p className="text-[#F87171] text-xs mt-1">{errors.password.message}</p>}
            <div className="flex justify-end mt-1">
              <button onClick={handleForgotPassword} className="text-xs text-[#C8A951] hover:underline cursor-pointer transition-all duration-200">Forgot password?</button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 bg-[#C8A951] text-[#0A0A0B] font-medium rounded-lg hover:bg-[#D4B96A] hover:shadow-[0px_0px_20px_rgba(200,169,81,0.3)] transition-all duration-200 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed disabled:pointer-events-none flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <><CircleNotch size={18} className="animate-spin" /> Signing in...</>
            ) : (
              'Sign In'
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
          Don't have an account? <Link href="/register" className="text-[#C8A951] hover:underline cursor-pointer transition-all duration-200">Sign up</Link>
        </div>
        <div className="mt-6 text-center">
          <button onClick={handleGuestLogin} className="text-xs text-[#6E6E73] hover:text-[#A1A1A6] transition-colors duration-200 cursor-pointer">Sign in as Guest</button>
        </div>
      </motion.div>
    </div>
  );
}
