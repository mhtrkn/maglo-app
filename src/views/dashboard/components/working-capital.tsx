"use client";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { WorkingCapitalResponse } from '@/types/financial';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

function WorkingCapital({ data }: {
  data: WorkingCapitalResponse | null
}) {
  const chartData = data?.data.map((item) => ({
    month: item?.month,
    income: item?.income,
    expense: item?.expense,
    net: item?.net
  }));

  const chartConfig = {
    income: {
      label: "Income",
      color: "var(--color-primary-color)",
    },
    expense: {
      label: "Expenses",
      color: "var(--color-secondary-color)",
    },
    net: {
      label: "Net",
      color: "var(--color-accent-color)",
    },
  } satisfies ChartConfig;

  if (!data) return null;

  return (
    <div className="max-w-[716px] w-full border border-gray3 rounded-[10px] py-2 px-3 md:pl-[25px] md:pt-[15px] md:pr-[19px] md:pb-[21px]">
      <div className='flex max-md:flex-wrap items-center justify-between mb-5 md:mb-9'>
        <span className='flex-1 font-semibold text-base text-primary'>Working Capital</span>

        <div className='flex items-center max-md:w-full max-md:justify-between gap-1 md:gap-[72px] max-md:flex-wrap'>
          <div className='flex items-center gap-5 md:gap-[30px]'>
            <div className='flex items-center gap-1 md:gap-[9px]'>
              <div className='bg-secondary-color w-2 h-2 rounded-full' />
              <span className='text-primary text-xs'>Income</span>
            </div>
            <div className='flex items-center gap-1 md:gap-[9px]'>
              <div className='bg-primary-color w-2 h-2 rounded-full' />
              <span className='text-primary text-xs'>Expenses</span>
            </div>
            <div className='flex items-center gap-1 md:gap-[9px]'>
              <div className='bg-accent-color w-2 h-2 rounded-full' />
              <span className='text-primary text-xs'>Net</span>
            </div>
          </div>
          <Select>
            <SelectTrigger className="md:min-w-28 w-fit text-xs max-md:px-2 max-md:py-0 text-primary border-none bg-gray2">
              <SelectValue placeholder={data?.period} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={data?.period || ""} className='text-xs text-primary'>
                {data?.period}
              </SelectItem>
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
            dataKey="income"
            type="monotone"
            stroke={chartConfig.income.color}
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="expense"
            type="monotone"
            stroke={chartConfig.expense.color}
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="net"
            type="monotone"
            stroke={chartConfig.net.color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

export default WorkingCapital
