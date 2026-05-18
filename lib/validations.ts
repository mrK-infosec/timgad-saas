import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(/[A-Z]/, 'Must contain uppercase').regex(/[0-9]/, 'Must contain number'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const tradeSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  symbol: z.string().min(1, 'Symbol is required'),
  direction: z.enum(['long', 'short']),
  status: z.enum(['idea', 'analysis', 'execution', 'closed']),
  description: z.string().optional(),
  lotSize: z.number().optional(),
  entryPrice: z.number().optional(),
  exitPrice: z.number().optional(),
  stopLoss: z.number().optional(),
  takeProfit: z.number().optional(),
  tags: z.array(z.string()).optional(),
});
