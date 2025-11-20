"use client";

import { useFinancialData } from '@/hooks/useFinancialData';
import FinancialSummaryView from './components/financial-summary';
import MyWalletView from './components/my-wallet';
import RecentTransactions from './components/recent-transactions';
import ScheduledTransfers from './components/scheduled-transfers';
import WorkingCapital from './components/working-capital';

function DashboardView() {
  const { data } = useFinancialData();
  console.log('datdat firstData: ', data);

  return (
    <div className='flex flex-col md:flex-row gap-[30px] md:gap-[39px]'>
      <div className='w-full md:w-fit flex flex-col gap-[30px]'>
        <FinancialSummaryView data={data?.summary} />
        <WorkingCapital data={data?.workingCapital} />
        <RecentTransactions data={data?.recentTransactions} />
      </div>

      <div className='flex flex-col w-full md:max-w-[354px] max-md:items-center'>
        <MyWalletView data={data?.wallet} />
        <ScheduledTransfers data={data?.scheduledTransfers} />
      </div>
    </div>
  )
}

export default DashboardView
