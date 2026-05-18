import { create } from 'zustand';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface UiState {
  sidebarOpen: boolean;
  searchModalOpen: boolean;
  notificationDropdownOpen: boolean;
  tradeModalOpen: boolean;
  selectedTradeId: string | null;
  toasts: ToastMessage[];
  toggleSidebar: () => void;
  setSearchModalOpen: (open: boolean) => void;
  setNotificationDropdownOpen: (open: boolean) => void;
  openTradeModal: (tradeId?: string | null) => void;
  closeTradeModal: () => void;
  addToast: (type: 'success' | 'error' | 'info', message: string) => void;
  removeToast: (id: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: true,
  searchModalOpen: false,
  notificationDropdownOpen: false,
  tradeModalOpen: false,
  selectedTradeId: null,
  toasts: [],
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSearchModalOpen: (open) => set({ searchModalOpen: open }),
  setNotificationDropdownOpen: (open) => set({ notificationDropdownOpen: open }),
  openTradeModal: (tradeId = null) => set({ tradeModalOpen: true, selectedTradeId: tradeId }),
  closeTradeModal: () => set({ tradeModalOpen: false, selectedTradeId: null }),
  addToast: (type, message) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({ toasts: [...state.toasts, { id, type, message }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 5000);
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));
