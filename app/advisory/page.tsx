import React from 'react'
import {Card,CardHeader,CardTitle,CardContent}  from "@/components/ui/card"

const Advisory = () => {
  return (
    <>
    <div>
        <h2 className='text-2xl py-5 text-center font-semibold leading-none tracking-tight'>Advisory</h2>
        <div className='my-4 mx-6 flex flex-col gap-y-6'>
            {
                data.map((item: any) => (
                    <Card key={item.id}>
                        <CardHeader>
                            <CardTitle className='text-lg font-semibold'>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm'>{item.description}</p>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Advisory

const data: any = [
    {
        "id": 1,
        "title": "Heavy rain in Chandigarh",
        "description": "In the last twelve hours due to heavy rain in Chandigarh, many areas are drown into water and have caused many more problems."
    },
    {
        "id": 2,
        "title": "Floor Warning in Champaran",
        "description": "Due to heavy rain in Champaran, many areas are drown into water and have caused many more problems."
    }
    ,{
        "id": 3,
        "title": "Heavy rain in Delhi",
        "description": "In the last twelve hours due to heavy rain in Chandigarh, many areas are drown into water and have caused many more problems."
    }
]