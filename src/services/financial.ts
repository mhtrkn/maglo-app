import { api } from "@/lib/api";
import { FinancialSummary, RecentTransactionsResponse, ScheduledTransfersResponse, WalletResponse, WorkingCapitalResponse } from "@/types/financial";

export const financialService = {
  getSummary: async (): Promise<FinancialSummary> => {
    try {
      const res = await api.get("/financial/summary");

      if (!res?.data?.success) {
        throw new Error(res?.data?.message || "Unexpected API response");
      }

      return res.data.data as FinancialSummary;
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unexpected error occurred while fetching summary.");
    }
  },

  getWorkingCapital: async (): Promise<WorkingCapitalResponse> => {
    try {
      const res = await api.get("/financial/working-capital");

      if (!res?.data?.success) {
        throw new Error(res?.data?.message || "Unexpected API response");
      }

      return res.data.data as WorkingCapitalResponse;
    } catch (error: unknown) {
      console.error("Working Capital Fetch Error:", error);

      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error(
        "Unknown error occurred while fetching working capital data."
      );
    }
  },

  getWallet: async (): Promise<WalletResponse> => {
    try {
      const res = await api.get("/financial/wallet");

      if (!res?.data?.success) {
        throw new Error(res?.data?.message || "Unexpected API response");
      }

      return res.data.data as WalletResponse;
    } catch (error: unknown) {
      console.error("Wallet Fetch Error:", error);

      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error occurred while fetching wallet data.");
    }
  },

  getRecentTransactions: async (): Promise<RecentTransactionsResponse> => {
    try {
      const res = await api.get("/financial/transactions/recent");

      if (!res?.data?.success) {
        throw new Error(res?.data?.message || "Unexpected API response");
      }

      return res.data.data as RecentTransactionsResponse;
    } catch (error: unknown) {
      console.error("Recent Transactions Fetch Error:", error);

      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error(
        "Unknown error occurred while fetching recent transactions."
      );
    }
  },

  getScheduledTransfers: async (): Promise<ScheduledTransfersResponse> => {
    try {
      const res = await api.get("/financial/transfers/scheduled");

      if (!res?.data?.success) {
        throw new Error(res?.data?.message || "Unexpected API response");
      }

      return res.data.data as ScheduledTransfersResponse;
    } catch (error: unknown) {
      console.error("Scheduled Transfers Fetch Error:", error);

      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error(
        "Unknown error occurred while fetching scheduled transfers."
      );
    }
  },
};
