"use client";

import { useEffect, useState } from "react";
import { financialService } from "@/services/financial";
import {
  FinancialSummary,
  WorkingCapitalResponse,
  WalletResponse,
  RecentTransactionsResponse,
  ScheduledTransfersResponse,
} from "@/types/financial";

interface FinancialData {
  summary: FinancialSummary | null;
  workingCapital: WorkingCapitalResponse | null;
  wallet: WalletResponse | null;
  recentTransactions: RecentTransactionsResponse | null;
  scheduledTransfers: ScheduledTransfersResponse | null;
}

interface UseFinancialDataReturn {
  data: FinancialData;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export const useFinancialData = (): UseFinancialDataReturn => {
  const [data, setData] = useState<FinancialData>({
    summary: null,
    workingCapital: null,
    wallet: null,
    recentTransactions: null,
    scheduledTransfers: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [
        summary,
        workingCapital,
        wallet,
        recentTransactions,
        scheduledTransfers,
      ] = await Promise.all([
        financialService.getSummary(),
        financialService.getWorkingCapital(),
        financialService.getWallet(),
        financialService.getRecentTransactions(),
        financialService.getScheduledTransfers(),
      ]);

      setData({
        summary,
        workingCapital,
        wallet,
        recentTransactions,
        scheduledTransfers,
      });
    } catch (err) {
      console.error("Financial Data Fetch Error:", err);
      setError("Failed to fetch financial data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refresh: fetchData };
};
