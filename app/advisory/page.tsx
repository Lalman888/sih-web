"use client"
import React,{useState,useEffect} from 'react'
import {Card,CardHeader,CardTitle,CardContent}  from "@/components/ui/card"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2 } from 'lucide-react';

const Advisory = () => {
    const [posts,setPosts] = useState([])

    const getPosts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/posts/?limit=10&skip=0',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }

        })
        setPosts(
            response.data.reverse()
        )
        // console.log(response.data)
    }

    useEffect(() => {
        getPosts()
    },[])

    const deletePost = async (id:any) => {
        const response = await axios.delete(`http://127.0.0.1:8000/posts/${id}/`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        console.log(response.data)
        getPosts()
    }

  return (
    <>
    <div>
        <h2 className='text-2xl py-5 md:mt-12 text-center font-semibold leading-none tracking-tight'>Advisory</h2>
        <div className='my-4 mx-6 md:px-24 flex flex-col gap-y-6'>
            {
                posts.map((item:any) => (
                    <Card key={item.id}>
                        
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={
                            `data:image/png;base64,${item?.image_data}`
                        } alt="post" className='w-full h-80 object-cover' />
                        <CardHeader>
                            <Link href={`/advisory/${item.id}`}>
                            <CardTitle className='text-lg font-semibold'>{item.title}</CardTitle>
                            </Link>
                        </CardHeader>
                        {/* <button
                        onClick={() => deletePost(item.id)}
                        >
                            Delete
                        </button> */}
                        <CardContent>
                            <p className='text-sm'>{item?.content}</p>
                            <p className='mt-4'>
                                <Link href={`/advisory/${item.id}/${item.title}`}>
                                    <p className='text-blue-500'>
                                        Map View
                                    </p>
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                ))
            } 
           
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
    },
    {
        "id": 4,
        "title": "Floor Warning in Champaran",
        "description": "Due to heavy rain in Champaran, many areas are drown into water and have caused many more problems."
    },{
        "id": 5,
        "title": "Heavy rain in Chandigarh",
        "description": "In the last twelve hours due to heavy rain in Chandigarh, many areas are drown into water and have caused many more problems."
    }
]