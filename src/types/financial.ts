export interface FinancialChange {
  percentage: number;
  trend: "up" | "down" | "stable";
}

export interface FinancialItem {
  amount: number;
  currency: string;
  change: FinancialChange;
}

export interface FinancialSummary {
  totalBalance: FinancialItem;
  totalExpense: FinancialItem;
  totalSavings: FinancialItem;
  lastUpdated: string;
}

export interface WorkingCapitalItem {
  month: string;
  income: number;
  expense: number;
  net: number;
}

export interface WorkingCapitalSummary {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
}

export interface WorkingCapitalResponse {
  period: string;
  currency: string;
  data: WorkingCapitalItem[];
  summary: WorkingCapitalSummary;
}

export interface WalletCard {
  id: string;
  name: string;
  type: "credit" | "debit" | "prepaid" | string;
  cardNumber: string;
  bank: string;
  network: "Visa" | "Mastercard" | "Amex" | "Troy" | string;
  expiryMonth: number;
  expiryYear: number;
  color: string;
  isDefault: boolean;
}

export interface WalletResponse {
  cards: WalletCard[];
}

export type TransactionStatus = "pending" | "completed" | "failed" | string;

export interface RecentTransaction {
  id: string;
  name: string;
  business: string;
  image: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
  status: TransactionStatus;
}

export interface RecentTransactionsSummary {
  totalIncome: number;
  totalExpense: number;
  count: number;
}

export interface RecentTransactionsResponse {
  transactions: RecentTransaction[];
  summary: RecentTransactionsSummary;
}

export type TransferStatus = "scheduled" | "completed" | "failed" | string;

export interface ScheduledTransfer {
  id: string;
  name: string;
  image: string;
  date: string;
  amount: number;
  currency: string;
  status: TransferStatus;
}

export interface ScheduledTransfersSummary {
  totalScheduledAmount: number;
  count: number;
}

export interface ScheduledTransfersResponse {
  transfers: ScheduledTransfer[];
  summary: ScheduledTransfersSummary;
}
