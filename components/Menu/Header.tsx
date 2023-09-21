"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search,Siren,PenSquare,Home,X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [state, setState] = React.useState(false)
  const [isLogin,setIsLogin] = React.useState(false)

  const menus = [
    { title: "Home", path: "/" },
    { title: "Report Anomaly", path: "/report" },
    { title: "Advisory", path: "/advisory" },
    { title: "Maps", path: "/maps" },
  ]

  React.useEffect(() => {
    if(localStorage?.getItem('access_token')){
      setIsLogin(true)

    }
  },[])

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 py-4">
        <div className="flex items-center justify-between md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-black">
                JalDoot
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
           {
                state ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />
           }
            </button>
          </div>
        </div>
        
        <div
          className={`flex-1 sm:relative sm:shadow-none absolute sm:bg-transparent bg-white w-full z-20 transition-all duration-500 ease-linear justify-self-center shadow-2xl md:block ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-14 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-black">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
             {
                !isLogin ? (
                  <>
                  <li  className="text-gray-600 hover:text-black">
                <Link href={'/login'}>
                  Login
                </Link>
              </li>
              <li  className="text-gray-600 hover:text-black">
                <Link href={'/register'}>Register</Link>
              </li>
                  </> ): (
                    <>
                    <li  className="text-gray-600 hover:text-black">
                <Link href={'/user'}>
                  User
                </Link>
              </li>
                    </>
                  )
                  
             }
            
              

            {/* <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 flex-none text-gray-300" />
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form> */}
          </ul>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G20_India_2023_logo.svg/2560px-G20_India_2023_logo.svg.png" alt="logo" className="w-32 h-16 hidden lg:block" />
        </div>
      </div>
    </nav>
  )
}
