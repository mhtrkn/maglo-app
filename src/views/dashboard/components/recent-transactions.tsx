"use client";

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { formatCurrency, formatDate } from '@/lib/utils';
import { ROUTES } from '@/routes';
import { RecentTransactionsResponse } from '@/types/financial';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function RecentTransactions({ data }: {
  data: RecentTransactionsResponse | null
}) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${ROUTES.TRANSACTIONS}`);
  }

  return (
    <div className="md:max-w-[716px] w-full md:min-h-[295px] h-fit border border-gray3 rounded-[10px] px-3 py-2 md:pl-[25px] md:py-5 md:pr-[19px] flex flex-col gap-2 md:gap-5">
      <div className='flex items-center justify-between w-full h-5'>
        <span className='flex-1 font-semibold text-base text-primary'>Recent Transaction</span>
        <Button onClick={handleRoute} variant="ghost" className='text-secondary-color font-semibold text-xs md:text-sm flex items-center gap-0 md:gap-1.5 p-0 hover:bg-white hover:text-secondary-color cursor-pointer'>
          View All
          <Image src={'icons/expand.svg'} alt='' width={18} height={18} />
        </Button>
      </div>

      <Table>
        <TableHeader className='border-none'>
          <TableRow className='border-none'>
            <TableHead className="text-secondary text-xs font-semibold p-0">NAME/BUSINESS</TableHead>
            <TableHead className="text-secondary text-xs font-semibold p-0 text-center">TYPE</TableHead>
            <TableHead className="text-secondary text-xs font-semibold p-0 text-center">AMOUNT</TableHead>
            <TableHead className="text-secondary text-xs font-semibold p-0 text-center">DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data && data?.transactions?.slice(0, 3)?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className='pl-0'>
                  <div className='flex items-center gap-2 md:gap-3.5'>
                    <div className='w-7 h-7 md:w-10 md:h-10 rounded-[5px] bg-gray1 overflow-hidden flex-center'>
                      <Image src={item?.image} alt='' width={40} height={40} className='w-7 h-7 md:w-10 md:h-10 object-cover' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                      <span className='font-medium text-xs md:text-sm text-primary'>{item?.name}</span>
                      <span className='text-[10px] md:text-sm text-secondary'>{item?.business}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className='text-xs md:text-sm font-medium text-secondary text-center'>{item?.type}</TableCell>
                <TableCell className='text-xs md:text-sm font-semibold text-primary text-center'>{formatCurrency(item?.amount, item?.currency)}</TableCell>
                <TableCell className='text-xs md:text-sm font-medium text-secondary text-center'>{formatDate(item?.date)}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default RecentTransactions
