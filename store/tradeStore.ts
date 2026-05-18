import { create } from 'zustand';

export interface Trade {
  _id: string;
  title: string;
  description?: string;
  symbol: string;
  direction: 'long' | 'short';
  status: 'idea' | 'analysis' | 'execution' | 'closed';
  lotSize?: number;
  entryPrice?: number;
  exitPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  pnl?: number;
  tags: string[];
  createdAt: string;
}

interface TradeState {
  trades: Trade[];
  isLoading: boolean;
  error: string | null;
  fetchTrades: () => Promise<void>;
  addTrade: (data: Partial<Trade>) => Promise<void>;
  updateTrade: (id: string, data: Partial<Trade>) => Promise<void>;
  deleteTrade: (id: string) => Promise<void>;
  moveTrade: (id: string, newStatus: Trade['status']) => Promise<void>;
}

export const useTradeStore = create<TradeState>((set, get) => ({
  trades: [],
  isLoading: false,
  error: null,
  fetchTrades: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/trades');
      if (!res.ok) throw new Error('Failed to fetch trades');
      const data = await res.json();
      set({ trades: data, isLoading: false, error: null });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },
  addTrade: async (data) => {
    try {
      const res = await fetch('/api/trades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to add trade');
      const newTrade = await res.json();
      set((state) => ({ trades: [newTrade, ...state.trades] }));
    } catch (err: any) {
      set({ error: err.message });
      throw err;
    }
  },
  updateTrade: async (id, data) => {
    try {
      const res = await fetch(`/api/trades/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to update trade');
      const updated = await res.json();
      set((state) => ({
        trades: state.trades.map((t) => (t._id === id ? updated : t)),
      }));
    } catch (err: any) {
      set({ error: err.message });
      throw err;
    }
  },
  deleteTrade: async (id) => {
    try {
      const res = await fetch(`/api/trades/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete trade');
      set((state) => ({
        trades: state.trades.filter((t) => t._id !== id),
      }));
    } catch (err: any) {
      set({ error: err.message });
      throw err;
    }
  },
  moveTrade: async (id, newStatus) => {
    const originalTrades = get().trades;
    set((state) => ({
      trades: state.trades.map((t) => (t._id === id ? { ...t, status: newStatus } : t)),
    }));
    try {
      const res = await fetch(`/api/trades/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to move trade');
    } catch (err: any) {
      set({ trades: originalTrades, error: err.message });
      throw err;
    }
  },
}));
