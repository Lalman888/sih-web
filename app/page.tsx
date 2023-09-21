
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { LogIn ,Droplet,Flag,Locate} from 'lucide-react';
export default function Home() {
  return (
    <main className="px-7 md:px-24 sm:mt-20">
      <div className='my-7 flex gap-x-8 overflow-scroll scrollbar-hide'>
        <Card className='px-5 min-w-[360px] md:w-full pt-8 pb-16'
          >
            <div>
              <h4 className='text-2xl font-bold'>Kerala Cost Water logging</h4>
              <p className='text-sm '>
                 Water logging in Kerala cost due to heavy rain
                the situation is getting worse hour by hour
                <Link href="#"> On Map </Link>
              </p>
            </div>
          </Card>
          <Card className='px-5 min-w-[360px] md:w-full pt-8 pb-16'
          >
            <div>
              <h4 className='text-2xl font-bold'>Kerala Cost Water logging</h4>
              <p className='text-sm '>
                 Water logging in Kerala cost due to heavy rain
                the situation is getting worse hour by hour
                <Link href="#"> On Map </Link>
              </p>
            </div>
          </Card>
          

      </div>
      <div>
         <h3 className='text-2xl my-5 font-bold'>Recent Activity</h3>
         <div className='grid grid-cols-2 gap-12 mt-8'>
            <Link href="/advisory">
              <Card className='px-4 flex justify-center items-center py-6 gap-4'>
                <Droplet size={40} />
                <h3 className='text-xl font-semibold'>Advisory</h3>
              </Card>
            </Link>

            <Link href="/report">
              <Card className='px-4 flex justify-center items-center py-6 gap-4'>
                <Flag size={40} />
                <h3 className='text-xl font-semibold'>Report</h3>
              </Card>
            </Link>

            <Link href="/maps">
              <Card className='px-4 flex justify-center items-center py-6 gap-4'>
                <Locate size={40} />
                <h3 className='text-xl font-semibold'>Problems</h3>
              </Card>
            </Link>

            <Link href="/login">
              <Card className='px-4 flex justify-center items-center py-6 gap-4'>
                <LogIn size={40} />
                <h3 className='text-xl font-semibold'>Log in</h3>
              </Card>
            </Link>



         </div>
      </div>
     
    </main>
  )
}
