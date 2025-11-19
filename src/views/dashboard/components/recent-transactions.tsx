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
import { ROUTES } from '@/routes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function RecentTransactions() {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${ROUTES.TRANSACTIONS}`);
  }

  return (
    <div className="w-[716px] h-[291px] border border-gray3 rounded-[10px] pl-[25px] py-5 pr-[19px] flex flex-col gap-5">
      <div className='flex items-center justify-between w-full h-5'>
        <span className='font-semibold text-lg text-primary'>Recent Transaction</span>
        <Button onClick={handleRoute} variant="ghost" className='text-secondary-color font-semibold text-sm flex items-center gap-1.5 p-0 hover:bg-white hover:text-secondary-color cursor-pointer'>
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
          <TableRow>
            <TableCell className='pl-0'>
              <div className='flex items-center gap-3.5'>
                <div className='w-10 h-10 rounded-[5px] bg-gray1 overflow-hidden flex-center'>
                  <Image src={"/images/netflix.png"} alt='' width={40} height={40} />
                </div>
                <div className='flex flex-col gap-[5px]'>
                  <span className='font-medium text-sm text-primary'>Netflix Subscription</span>
                  <span className='text-xs text-secondary'>Netflix</span>
                </div>
              </div>
            </TableCell>
            <TableCell className='text-sm font-medium text-secondary text-center'>Entertainment</TableCell>
            <TableCell className='text-sm font-semibold text-primary text-center'>$100.00</TableCell>
            <TableCell className='text-sm font-medium text-secondary text-center'>05 Apr 2022</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default RecentTransactions
