export interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  colSpan: number;
  rowSpan: number;
  type: 'pipeline' | 'risk' | 'team' | 'analytics' | 'stats';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  badge?: string;
}
