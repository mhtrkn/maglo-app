"use client";

import MainContainer from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ROUTES } from '@/routes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function DashboardPage() {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${ROUTES.TRANSACTIONS}`);
  }
  return (
    <MainContainer>
      <div className='flex gap-[39px]'>
        <div className='w-fit flex flex-col gap-[30px]'>
          <div className='flex items-center gap-[25px]'>
            <div className='bg-[#363A3F] px-5 py-6 flex-center rounded-[10px]'>
              <div className='flex-center gap-[15px]'>
                <div className='flex-center h-[42px] w-[42px] bg-[#4E5257] rounded-full'>
                  <Image src={"icons/fill-wallet.svg"} alt='' width={20} height={20} />
                </div>
                <div className='flex flex-col justify-center items-start gap-2.5'>
                  <span className='text-sm text-secondary'>Total Balance</span>
                  <span className='w-[125px] text-2xl font-bold text-white'>$5240.21</span>
                </div>
              </div>
            </div>
            <div className='bg-gray2 px-5 py-6 flex-center rounded-[10px]'>
              <div className='flex-center gap-[15px]'>
                <div className='flex-center h-[42px] w-[42px] bg-[#EBE8E8] rounded-full'>
                  <Image src={"icons/wallet.svg"} alt='' width={20} height={20} />
                </div>
                <div className='flex flex-col justify-center items-start gap-2.5'>
                  <span className='text-sm text-secondary'>Total spending</span>
                  <span className='w-[125px] text-2xl font-bold text-primary'>$250.80</span>
                </div>
              </div>
            </div>
            <div className='bg-gray2 px-5 py-6 flex-center rounded-[10px]'>
              <div className='flex-center gap-[15px]'>
                <div className='flex-center h-[42px] w-[42px] bg-[#EBE8E8] rounded-full'>
                  <Image src={"icons/wallet.svg"} alt='' width={20} height={20} />
                </div>
                <div className='flex flex-col justify-center items-start gap-2.5'>
                  <span className='text-sm text-secondary'>Total saved</span>
                  <span className='w-[125px] text-2xl font-bold text-primary'>$550.25</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[716px] h-[291px] bg-gray2">
          </div>

          <div className="w-[716px] h-[291px] border border-gray3 rounded-xl pl-[25px] py-5 pr-[19px] flex flex-col gap-5">
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
        </div>

        <div className='flex flex-col w-full'>
          <div className='max-w-[354px] w-full flex items-center justify-between mb-[15px]'>
            <span className='font-semibold text-lg text-primary'>Wallet</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant='ghost' className='cursor-pointer p-1 rounded-2xl'>
                  <Image src={'icons/more.svg'} alt='' width={22} height={22} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            Kart Kısmı
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

export default DashboardPage
