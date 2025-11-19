"use client";

import { useUserData } from '@/hooks/useUserData';
import FinancialSummary from './components/financial-summary';
import MyWalletView from './components/my-wallet';
import RecentTransactions from './components/recent-transactions';
import ScheduledTransfers from './components/scheduled-transfers';
import WorkingCapital from './components/working-capital';
import { useFinancialData } from '@/hooks/useFinancialData';

function DashboardView() {
  const { data } = useFinancialData();
  const { user } = useUserData();

  return (
    <div className='flex gap-[39px]'>
      <div className='w-fit flex flex-col gap-[30px]'>
        <FinancialSummary />
        <WorkingCapital />
        <RecentTransactions />
      </div>

      <div className='flex flex-col max-w-[354px] w-full'>
        <MyWalletView />
        <ScheduledTransfers />
      </div>
    </div>
  )
}

export default DashboardView
