"use client";

import { useFinancialStore } from '@/store/useFinancialStore';
import { useEffect } from 'react';
import FinancialSummaryView from './components/financial-summary';
import MyWalletView from './components/my-wallet';
import RecentTransactions from './components/recent-transactions';
import ScheduledTransfers from './components/scheduled-transfers';
import WorkingCapital from './components/working-capital';

function DashboardView() {
  const {
    summary,
    workingCapital,
    wallet,
    recentTransactions,
    scheduledTransfers,
    fetchAllFinancialData
  } = useFinancialStore();

  useEffect(() => {
    fetchAllFinancialData();
  }, [fetchAllFinancialData]);

  return (
    <div className='flex max-xl:flex-wrap flex-col md:flex-row gap-[30px] md:gap-[39px]'>
      <div className='w-full md:w-fit flex flex-col gap-[30px]'>
        <FinancialSummaryView data={summary} />
        <WorkingCapital data={workingCapital} />
        <RecentTransactions data={recentTransactions} />
      </div>

      <div className='flex flex-col flex-wrap w-full max-md:items-center md:w-full'>
        <MyWalletView data={wallet} />
        <ScheduledTransfers data={scheduledTransfers} />
      </div>
    </div>
  )
}

export default DashboardView
