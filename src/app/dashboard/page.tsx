import MainContainer from '@/components/layout/container'
import Image from 'next/image'

function DashboardPage() {
  return (
    <MainContainer>
      {/* dashboard üst gösterge kısmı */}
      <div className='flex items-center gap-[25px]'>

        <div className='bg-[#363A3F] px-5 py-6 flex-center rounded-[10px]'>
          <div className='flex-center gap-[15px]'>
            <div className='flex-center h-[42px] w-[42px] bg-[#4E5257] rounded-full'>
              <Image src={"icons/fill-wallet.svg"} alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2.5'>
              <span className='text-sm text-secondary'>Total Balance</span>
              <span className='text-2xl font-bold text-white'>$5240.21</span>
            </div>
          </div>
        </div>

        <div className='bg-gray2 px-5 py-6 flex-center rounded-[10px]'>
          <div className='flex-center gap-[15px]'>
            <div className='flex-center h-[42px] w-[42px] bg-[#EBE8E8] rounded-full'>
              <Image src={"icons/wallet.svg"} alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2.5'>
              <span className='text-sm text-secondary'>Total spending</span>
              <span className='text-2xl font-bold text-primary'>$250.80</span>
            </div>
          </div>
        </div>

        <div className='bg-gray2 px-5 py-6 flex-center rounded-[10px]'>
          <div className='flex-center gap-[15px]'>
            <div className='flex-center h-[42px] w-[42px] bg-[#EBE8E8] rounded-full'>
              <Image src={"icons/wallet.svg"} alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2.5'>
              <span className='text-sm text-secondary'>Total saved</span>
              <span className='text-2xl font-bold text-primary'>$550.25</span>
            </div>
          </div>
        </div>

      </div>


    </MainContainer>
  )
}

export default DashboardPage
