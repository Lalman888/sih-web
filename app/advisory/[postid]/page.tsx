// @ts-nocheck
"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
 

const PostDetails = () => {
  const [posts,setPosts] = useState([])
  const params = useParams()
  // console.log(params.postid)

  const getPostDetails = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/posts/${params.postid}/`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
  },
  )
    setPosts(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getPostDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <div className='mx-28 mt-14' >
        {/* <h2 className='text-2xl py-5 md:mt-12 text-center font-semibold leading-none tracking-tight'>Advisory</h2> */}
        
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
        src={
          `data:image/png;base64,${posts?.image_data}`
        }
        alt="post"
        className='w-full h-96 rounded-md object-cover'
        />
        <h2 className='text-4xl py-8 md:mt-12 text-center font-semibold leading-none tracking-tight'>
        {posts.title}
        </h2>

        <div className='pt-4'>

            <p>
              {
                posts.content
              }

            </p>
        </div>

    </div>
    </>
  )
}

export default PostDetails