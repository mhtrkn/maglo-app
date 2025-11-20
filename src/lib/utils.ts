import { CurrencyType } from "@/types/financial";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number = 0, currency?: string) {
  let symbol = "₺";

  switch (currency) {
    case "USD":
      symbol = "$";
      break;
    case "EUR":
      symbol = "€";
      break;
    default:
      symbol = "₺";
  }

  const isNegative = amount < 0;
  const absoluteAmount = Math.abs(amount).toFixed(2);

  return isNegative
    ? `-${symbol}${absoluteAmount}`
    : `${symbol}${absoluteAmount}`;
}

export function formatDate(dateString: string, type: "short" | "long" = "short") {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const monthShort = date.toLocaleString("en-US", { month: "short" });
  const monthLong = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  if (type === "long") {
    return `${monthLong} ${day}, ${year} at ${hours}:${minutes}`;
  }

  return `${day} ${monthShort} ${year}`;
}

export function formatExpiryDate(expireMonth: number, expireYear: number) {
  const month = expireMonth.toString().padStart(2, "0");

  const year = expireYear.toString().slice(-2);

  return `${month}/${year}`;
}
