import React from 'react'
import { Upload } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Report = () => {
  return (
    <>
    <div>
    <h2 className='text-2xl py-5 text-center font-semibold leading-none tracking-tight'>Report Anomaly</h2>
    <div className='my-2 flex justify-center mx-12'>
       
    </div>
    <div className='my-4 mx-8'>
        <form className='flex flex-col gap-y-5'>
        <div className="grid w-full max-w-sm items-center gap-5">
      <Label htmlFor="picture">
        Picture
      </Label>
      <Input id="picture" type="file" 
      multiple={true}
      />
    </div>
        <div className="grid w-full max-w-sm items-center gap-5">
      <Label htmlFor="nearLoaction">
        Nearby Location
      </Label>
      <Input type="text" id="nearLoaction" placeholder="" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-5">
      <Label htmlFor="city">
        City Name
      </Label>
      <Input type="text" id="city" placeholder="" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-5">
      <Label htmlFor="city">
        Description of Situation
      </Label>
      <Textarea 
      placeholder="Type here..."
       />
    </div>
    <div>
        <button className="bg-black w-full mt-4 text-white font-bold py-3 px-4 rounded">
            Submit
        </button>
    </div>
        </form>

    </div>
    </div>
    
    </>
  )
}

export default Report