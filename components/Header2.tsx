import React from 'react'
import Image from 'next/image'
import TimelyLogo from "../public/timelylogo.svg"
import Greater from "../public/greater.svg"
import Arrow from "../public/Arrow"
import MegaMenu1 from "./MegaMenu1"

// import MM2 from "@/components/MM2"

export default function Header() {
  return (
    <nav className="bg-primary">
      <div className="container sm:mx-auto px-4 max-w-[1280px] ">
        <div className="flex items-center justify-between h-[72px]  ">
          {/* <!-- Logo with text --> */}
          <div className="flex items-center">
            <Image src={TimelyLogo} alt="Logo" className="h-[42px] w-[130px] " />
          </div>

          {/* <!-- Burger menu for mobile and tablet --> */}
          <div className="flex md:hidden ">
            <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-[35px] w-[40px] fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!-- Links --> */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* <!-- Mega menu 1 --> */}
            <div className="relative group">
              <button type="button" className="text-gray-300 flex hover:text-white focus:outline-none focus:text-white">
                <span className="text-[16px]  ">Product</span>
                <Image src={Greater} className='mt-[4px] ml-[4px] rotate-90 ' alt="greater-svg " />

              </button>
              {/* <!-- Mega menu content --> */}
              <div className=" group-hover:block absolute z-10 left-0  mt-2 rounded-md shadow-lg">
                {/* <!-- Mega menu items --> */}
                <MegaMenu1 />

                {/* <MM2 /> */}

              </div>
            </div>

            {/* <!-- Mega menu 2 --> */}
            <div className="relative group">
              <button type="button" className="text-gray-300 flex hover:text-white focus:outline-none focus:text-white">
                <span className="text-[16px]">Resources</span>
                <Image src={Greater} className='mt-[4px] ml-[4px] rotate-90 ' alt="greater-svg " />
              </button>
              {/* <!-- Mega menu content --> */}
              <div className="hidden group-hover:block absolute z-10 bg-gray-800 py-2 mt-2 rounded-md shadow-lg">
                {/* <!-- Mega menu items --> */}
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink3</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 4</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 5</a>
              </div>
            </div>

            {/* <!-- Regular link --> */}
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-[16px]">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-[16px]">Talk to sales</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-[16px]">Login</a>

            {/* <!-- Button --> */}
            <div className='flex justify-center circularstd-font' >
              <button className='flex text-black h-[52px] w-[154px] justify-center items-center bg-white rounded-2xl'>Get Started
                <div className='ml-2' ><Arrow /></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile and tablet burger menu --> */}
      <div className="md:hidden hidden">
        {/* <!-- Burger menu content --> */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 1</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 2</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 3</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 4</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 5</a>
        </div>
      </div>
    </nav>

  )
}