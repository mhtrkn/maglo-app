/* eslint-disable @typescript-eslint/no-unused-vars */
import { financialService } from "@/services/financial";
import { FinancialSummary, RecentTransactionsResponse, ScheduledTransfersResponse, WalletResponse, WorkingCapitalResponse } from "@/types/financial";
import { create } from "zustand";
import { useLoadingStore } from "./useLoadingStore";

interface FinancialState {
  summary: FinancialSummary | null;
  workingCapital: WorkingCapitalResponse | null;
  wallet: WalletResponse | null;
  recentTransactions: RecentTransactionsResponse | null;
  scheduledTransfers: ScheduledTransfersResponse | null;
  loading: boolean;
  error: string | null;

  fetchSummary: () => Promise<void>;
  fetchWorkingCapital: () => Promise<void>;
  fetchWallet: () => Promise<void>;
  fetchRecentTransactions: () => Promise<void>;
  fetchScheduledTransfers: () => Promise<void>;
  fetchAllFinancialData: () => Promise<void>;
  clearFinancialData: () => void;
}

export const useFinancialStore = create<FinancialState>((set) => ({
  summary: null,
  workingCapital: null,
  wallet: null,
  recentTransactions: null,
  scheduledTransfers: null,

  loading: false,
  error: null,

  fetchSummary: async () => {
    set({ loading: true, error: null });
    try {
      const data = await financialService.getSummary();
      set({ summary: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch financial summary", loading: false });
    }
  },

  fetchWorkingCapital: async () => {
    set({ loading: true, error: null });
    try {
      const data = await financialService.getWorkingCapital();
      set({ workingCapital: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch working capital", loading: false });
    }
  },

  fetchWallet: async () => {
    set({ loading: true, error: null });
    try {
      const data = await financialService.getWallet();
      set({ wallet: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch wallet", loading: false });
    }
  },

  fetchRecentTransactions: async () => {
    set({ loading: true, error: null });
    try {
      const data = await financialService.getRecentTransactions();
      set({ recentTransactions: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch recent transactions", loading: false });
    }
  },

  fetchScheduledTransfers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await financialService.getScheduledTransfers();
      set({ scheduledTransfers: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch scheduled transfers", loading: false });
    }
  },

  fetchAllFinancialData: async () => {
    const { show, hide } = useLoadingStore.getState();
    set({ loading: true, error: null });
    show();

    try {
      const [summary, wallet, workingCapital, recentTransactions, scheduledTransfers] = await Promise.all([
        financialService.getSummary(),
        financialService.getWallet(),
        financialService.getWorkingCapital(),
        financialService.getRecentTransactions(),
        financialService.getScheduledTransfers(),
      ]);

      set({ summary, wallet, workingCapital, recentTransactions, scheduledTransfers, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch financial data", loading: false });
    } finally {
      setTimeout(() => {
        hide();
      }, 10000)
    }
  },

  clearFinancialData: () => {
    set({
      summary: null,
      workingCapital: null,
      wallet: null,
      recentTransactions: null,
      scheduledTransfers: null,
      error: null,
      loading: false,
    });
  },
}));
