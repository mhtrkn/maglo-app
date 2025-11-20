"use client";

import { Button } from '@/components/ui/button';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ROUTES } from '@/routes';
import { ScheduledTransfersResponse } from '@/types/financial';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ScheduledTransfers({ data }: {
  data: ScheduledTransfersResponse | null
}) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${ROUTES.TRANSACTIONS}`);
  }

  return (
    <div className='mt-[30px] flex flex-col gap-[25px] w-full'>
      <div className='flex items-center justify-between w-full h-5'>
        <span className='font-semibold text-base md:text-lg text-primary'>Scheduled Transfers</span>
        <Button onClick={handleRoute} variant="ghost" className='text-secondary-color font-semibold text-xs md:text-sm flex items-center gap-0 md:gap-1.5 p-0 hover:bg-white hover:text-secondary-color cursor-pointer'>
          View All
          <Image src={'icons/expand.svg'} alt='' width={18} height={18} />
        </Button>
      </div>

      <div className='flex flex-col gap-3'>
        {
          data && data?.transfers?.length > 0 && data?.transfers?.slice(0, 5)?.map((item) => (
            <div key={item?.id} className='flex items-center justify-between md:max-w-[354px] w-full pb-[15px] border-b border-gray1'>
              <div className='flex items-center gap-[15px]'>
                <div className='w-7 h-7 md:w-[33px] md:h-[33px] flex-center overflow-hidden rounded-full'>
                  <Image src={item?.image} alt='Avatar' width={33} height={33} unoptimized />
                </div>
                <div className='flex flex-col gap-[7px]'>
                  <span className='font-semibold text-xs md:text-sm text-primary leading-[100%]'>{item?.name}</span>
                  <span className='font-medium text-[10px] md:text-xs text-secondary leading-[100%]'>{formatDate(item?.date, "long")}</span>
                </div>
              </div>
              <span className='text-xs md:text-base font-semibold text-black'>{formatCurrency(item?.amount, item?.currency)}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ScheduledTransfers
