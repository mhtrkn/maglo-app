"use client";

import MainContainer from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

function DashboardPage() {
  const router = useRouter();

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--color-primary-color)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--color-secondary-color)",
    },
  } satisfies ChartConfig

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

          <div className="w-[716px] border border-gray3 rounded-[10px] pl-[25px] pt-[15px] pr-[19px] pb-[21px]">
            <div className='flex items-center justify-between mb-9'>
              <span className='flex-1 font-semibold text-lg text-primary'>Working Capital</span>

              <div className='flex items-center gap-[72px]'>
                <div className='flex items-center gap-[30px]'>
                  <div className='flex items-center gap-[9px]'>
                    <div className='bg-secondary-color w-2 h-2 rounded-full' />
                    <span className='text-primary text-xs'>Income</span>
                  </div>
                  <div className='flex items-center gap-[9px]'>
                    <div className='bg-primary-color w-2 h-2 rounded-full' />
                    <span className='text-primary text-xs'>Expenses</span>
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-28 text-xs text-primary border-none bg-gray2">
                    <SelectValue placeholder="Last 7 days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week" className='text-xs text-primary'>Last 7 days</SelectItem>
                    <SelectItem value="month" className='text-xs text-primary'>Last 1 month</SelectItem>
                    <SelectItem value="year" className='text-xs text-primary'>Last 1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <ChartContainer config={chartConfig} className='max-h-[200px] w-full'>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value: string) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>

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
        </div>

        <div className='flex flex-col max-w-[354px] w-full'>
          <div className='max-w-[354px] w-full flex items-center justify-between mb-[15px]'>
            <span className='font-semibold text-lg text-primary'>Wallet</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant='ghost' className='cursor-pointer p-1 rounded-2xl'>
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
            <div className='w-[354px] h-[210px] rounded-[15px] relative bg-[linear-gradient(104.3deg,#4A4A49_2.66%,#20201F_90.57%)] py-[18px] px-[30px]'>
              <div className='w-full flex flex-col gap-[27px] mb-[21px]'>
                <div className='flex items-center gap-2'>
                  <Image src={'icons/maglo.svg'} alt='Maglo.' width={58} height={23} />
                  <div className='w-px h-5 bg-[#626261]' />
                  <span className='text-[#626261] font-medium text-xs'>Universal Bank</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <Image src={'icons/chip.svg'} alt='' width={38} height={30} />
                  <Image src={'icons/wifi.svg'} alt='' width={33} height={34} />
                </div>
              </div>

              <Image className='absolute right-[25px] bottom-5' src='icons/master-card.svg' alt='' width={47} height={36} />

              <span className='font-bold text-[17px] text-white tracking-widest mb-[7px]'>
                5495  7381  3759  2321
              </span>
            </div>

            <div className='border border-white/40 rounded-[15px] w-[324px] h-[172px] pl-5 pb-5 pt-[15px] -mt-15 relative z-10 backdrop-blur-xs pr-3.5 bg-linear-to-br from-white/10 to-[#f1f2ed]'>
              <div className='w-full flex flex-col gap-[13px] mb-[21px]'>
                <div className='flex items-center gap-2'>
                  <Image src={'icons/maglo.svg'} alt='Maglo.' width={58} height={23} />
                  <div className='w-px h-5 bg-white' />
                  <span className='text-white font-medium text-xs'>Commercial Bank</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <Image src={'icons/chip.svg'} alt='' width={30} height={24} />
                  <Image src={'icons/wifi.svg'} alt='' width={33} height={34} />
                </div>
              </div>

              <Image className='absolute right-5 bottom-[25px]' src='icons/visa.svg' alt='' width={32} height={21} />

              <div className='flex flex-col gap-[5px]'>
                <span className='font-bold text-primary tracking-widest'>
                  85952548****
                </span>
                <span className='text-secondary text-xs font-medium'>
                  09/25
                </span>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </MainContainer>
  )
}

export default DashboardPage
