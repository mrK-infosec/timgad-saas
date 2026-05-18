import { PricingPlan } from '../types';

export const pricingData: PricingPlan[] = [
  {
    id: 'pro',
    name: 'Pro Trader',
    description: 'Perfect for individual professional traders.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: ['Unlimited trade logging', 'Advanced analytics dashboard', 'Risk management tools', '1 Workspace', 'Standard support'],
    highlighted: false
  },
  {
    id: 'team',
    name: 'Fund/Team',
    description: 'Built for trading desks and prop funds.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: ['Everything in Pro', 'Unlimited team members', 'Role-based access control', 'Custom compliance rules', 'Priority 24/7 support'],
    highlighted: true,
    badge: 'Most Popular'
  }
];
