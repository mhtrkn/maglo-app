"use client";

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ScheduledTransfers() {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${ROUTES.TRANSACTIONS}`);
  }

  return (
    <div className='mt-[30px] flex flex-col gap-[25px] w-full'>
      <div className='flex items-center justify-between w-full h-5'>
        <span className='font-semibold text-lg text-primary'>Scheduled Transfers</span>
        <Button onClick={handleRoute} variant="ghost" className='text-secondary-color font-semibold text-sm flex items-center gap-1.5 p-0 hover:bg-white hover:text-secondary-color cursor-pointer'>
          View All
          <Image src={'icons/expand.svg'} alt='' width={18} height={18} />
        </Button>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between max-w-[354px] w-full pb-[15px] border-b border-gray1'>
          <div className='flex items-center gap-[15px]'>
            <div className='w-[33px] h-[33px] flex-center overflow-hidden rounded-full'>
              <Image src={'/images/avatar.png'} alt='Avatar' width={33} height={33} />
            </div>
            <div className='flex flex-col gap-[7px]'>
              <span className='font-semibold text-sm text-primary leading-[100%]'>Saleh Ahmed</span>
              <span className='font-medium text-xs text-secondary leading-[100%]'>April 28, 2022 at 11:00</span>
            </div>
          </div>
          <span className='font-semibold text-black'>- $435,00</span>
        </div>

        <div className='flex items-center justify-between max-w-[354px] w-full pb-[15px] border-b border-gray1'>
          <div className='flex items-center gap-[15px]'>
            <div className='w-[33px] h-[33px] flex-center overflow-hidden rounded-full'>
              <Image src={'/images/avatar.png'} alt='Avatar' width={33} height={33} />
            </div>
            <div className='flex flex-col gap-[7px]'>
              <span className='font-semibold text-sm text-primary leading-[100%]'>Saleh Ahmed</span>
              <span className='font-medium text-xs text-secondary leading-[100%]'>April 28, 2022 at 11:00</span>
            </div>
          </div>
          <span className='font-semibold text-black'>- $435,00</span>
        </div>

        <div className='flex items-center justify-between max-w-[354px] w-full pb-[15px] border-b border-gray1'>
          <div className='flex items-center gap-[15px]'>
            <div className='w-[33px] h-[33px] flex-center overflow-hidden rounded-full'>
              <Image src={'/images/avatar.png'} alt='Avatar' width={33} height={33} />
            </div>
            <div className='flex flex-col gap-[7px]'>
              <span className='font-semibold text-sm text-primary leading-[100%]'>Dr. Jubed Ahmed</span>
              <span className='font-medium text-xs text-secondary leading-[100%]'>April 28, 2022 at 11:00</span>
            </div>
          </div>
          <span className='font-semibold text-black'>- $826,00</span>
        </div>

        <div className='flex items-center justify-between max-w-[354px] w-full pb-[15px] border-b border-gray1'>
          <div className='flex items-center gap-[15px]'>
            <div className='w-[33px] h-[33px] flex-center overflow-hidden rounded-full'>
              <Image src={'/images/avatar.png'} alt='Avatar' width={33} height={33} />
            </div>
            <div className='flex flex-col gap-[7px]'>
              <span className='font-semibold text-sm text-primary leading-[100%]'>Moinul Hasan Nayem</span>
              <span className='font-medium text-xs text-secondary leading-[100%]'>April 28, 2022 at 11:00</span>
            </div>
          </div>
          <span className='font-semibold text-black'>- $132,00</span>
        </div>

        <div className='flex items-center justify-between max-w-[354px] w-full pb-[15px] border-b border-gray1'>
          <div className='flex items-center gap-[15px]'>
            <div className='w-[33px] h-[33px] flex-center overflow-hidden rounded-full'>
              <Image src={'/images/avatar.png'} alt='Avatar' width={33} height={33} />
            </div>
            <div className='flex flex-col gap-[7px]'>
              <span className='font-semibold text-sm text-primary leading-[100%]'>Saleh Ahmed</span>
              <span className='font-medium text-xs text-secondary leading-[100%]'>April 28, 2022 at 11:00</span>
            </div>
          </div>
          <span className='font-semibold text-black'>- $435,00</span>
        </div>
      </div>
    </div>
  )
}

export default ScheduledTransfers
