"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatExpiryDate } from "@/lib/utils";
import { WalletResponse } from "@/types/financial";
import Image from 'next/image';

function MyWalletView({ data }: {
  data: WalletResponse | null
}) {
  return (
    <div className="flex flex-col max-w-[354px] w-full">
      <div className='max-w-[354px] w-full flex items-center justify-between mb-[15px]'>
        <span className='font-semibold text-base md:text-lg text-primary'>Wallet</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button asChild variant='ghost' className='cursor-pointer p-1 rounded-2xl'>
              <Image src={'icons/more.svg'} alt='' width={22} height={22} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Wallet Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Card Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Card</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className='flex flex-col items-center w-full'>
        {
          data && data?.cards?.length > 0 && (
            <div className='max-w-[354px] w-full h-[210px] rounded-[15px] relative bg-[linear-gradient(104.3deg,#4A4A49_2.66%,#20201F_90.57%)] py-[18px] px-[30px]'>
              <div className='w-full flex flex-col gap-[27px] mb-[21px]'>
                <div className='flex items-center gap-2'>
                  <Image src={'icons/maglo.svg'} alt='Maglo.' width={58} height={23} className="w-[58px] h-[23px]" />
                  <div className='w-px h-5 bg-[#626261]' />
                  <span className='text-[#626261] font-medium text-xs'>{data.cards[0].name}</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <Image src={'icons/chip.svg'} alt='chip' width={38} height={30} />
                  <Image src={'icons/wifi.svg'} alt='wifi' width={33} height={34} className="w-[33px] h-[34px]" />
                </div>
              </div>

              <Image className='absolute right-[25px] bottom-5 w-[47px] h-9' src={data.cards[0].network === 'Visa' ? 'icons/visa.svg' : 'icons/master-card.svg'} alt={data.cards[1].network} width={47} height={36} />

              <span className='font-bold text-[17px] text-white tracking-widest mb-[7px]'>
                {data.cards[0].cardNumber}
              </span>
            </div>
          )
        }

        {
          data && data?.cards?.length > 1 && (
            <div className='border border-white/40 rounded-[15px] max-w-[324px] w-full h-[172px] pl-5 pb-5 pt-[15px] -mt-15 relative z-10 backdrop-blur-xs pr-3.5 bg-linear-to-br from-white/10 to-[#f1f2ed]'>
              <div className='w-full flex flex-col gap-[13px] mb-[21px]'>
                <div className='flex items-center gap-2'>
                  <Image src={'icons/maglo.svg'} alt='Maglo.' width={58} height={23} className="w-[58px] h-[23px]" />
                  <div className='w-px h-5 bg-white' />
                  <span className='text-white font-medium text-xs'>{data.cards[1].name}</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <Image src={'icons/chip.svg'} alt='' width={30} height={24} />
                  <Image src={'icons/wifi.svg'} alt='' width={33} height={34} className="w-[33px] h-[34px]" />
                </div>
              </div>

              <Image className='absolute right-5 bottom-[25px]' src={data.cards[0].network === 'Visa' ? 'icons/visa.svg' : 'icons/master-card.svg'} alt={data.cards[1].network} width={32} height={21} />

              <div className='flex flex-col gap-[5px]'>
                <span className='font-bold text-primary tracking-widest'>
                  {data.cards[1].cardNumber}
                </span>
                <span className='text-secondary text-xs font-medium'>
                  {formatExpiryDate(data.cards[1].expiryMonth, data.cards[1].expiryYear)}
                </span>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default MyWalletView
