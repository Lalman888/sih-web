import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className='my-4 flex gap-x-2 overflow-scroll scrollbar-hide'>
        <Card
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
         <h3 className='text-2xl font-bold'>Recent News</h3>
      </div>
     
    </main>
  )
}
