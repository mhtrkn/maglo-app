"use client";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

function WorkingCapital() {
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

  return (
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
  )
}

export default WorkingCapital
