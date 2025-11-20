"use client";

import { formatCurrency } from '@/lib/utils';
import { FinancialSummary } from '@/types/financial';
import Image from 'next/image'

function FinancialSummaryView({ data }: {
  data: FinancialSummary | null
}) {
  return (
    <div className='flex items-center gap-2 md:gap-[25px] max-md:justify-between max-md:w-full overflow-auto'>
      <div className='max-md:flex-1 bg-[#363A3F] px-2 py-4 md:px-5 md:py-6 flex-center rounded-[10px]'>
        <div className='flex-center gap-2 md:gap-[15px]'>
          <div className='flex-center h-8 w-8 md:h-[42px] md:w-[42px] bg-[#4E5257] rounded-full'>
            <Image src={"icons/fill-wallet.svg"} alt='' width={20} height={20} />
          </div>
          <div className='flex flex-col justify-center items-start gap-0 md:gap-2.5'>
            <span className='text-[10px] md:text-sm text-secondary whitespace-nowrap'>Total Balance</span>
            <span className='w-fit md:w-[125px] text-sm md:text-2xl font-bold text-white'>
              {formatCurrency(data?.totalBalance?.amount, data?.totalBalance?.currency)}
            </span>
          </div>
        </div>
      </div>
      <div className='max-md:flex-1 bg-gray2 px-2 py-4 md:px-5 md:py-6 flex-center rounded-[10px]'>
        <div className='flex-center gap-2 md:gap-[15px]'>
          <div className='flex-center h-8 w-8 md:h-[42px] md:w-[42px] bg-[#EBE8E8] rounded-full'>
            <Image src={"icons/wallet.svg"} alt='' width={20} height={20} />
          </div>
          <div className='flex flex-col justify-center items-start gap-0 md:gap-2.5'>
            <span className='text-[10px] md:text-sm text-secondary whitespace-nowrap'>Total spending</span>
            <span className='w-fit md:w-[125px] text-sm md:text-2xl font-bold text-primary'>
              {formatCurrency(data?.totalExpense?.amount, data?.totalExpense?.currency)}
            </span>
          </div>
        </div>
      </div>

      <div className='max-md:flex-1 bg-gray2 px-2 py-4 md:px-5 md:py-6 flex-center rounded-[10px]'>
        <div className='flex-center gap-2 md:gap-[15px]'>
          <div className='flex-center h-8 w-8 md:h-[42px] md:w-[42px] bg-[#EBE8E8] rounded-full'>
            <Image src={"icons/wallet.svg"} alt='' width={20} height={20} />
          </div>
          <div className='flex flex-col justify-center items-start gap-0 md:gap-2.5'>
            <span className='text-[10px] md:text-sm text-secondary whitespace-nowrap'>Total saved</span>
            <span className='w-fit md:w-[125px] text-sm md:text-2xl font-bold text-primary'>
              {formatCurrency(data?.totalSavings?.amount, data?.totalSavings?.currency)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialSummaryView
