'use client';

import React from 'react'
import 'flowbite';
import Image from 'next/image';
import TimelyLogo from "../public/timelylogo.svg"
import Arrow from "../public/Arrow"

function Header3() {
  return (
    
<nav className="bg-primary border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 max-w-[1280px] ">
        <a href="https://flowbite.com" className="flex items-center">
        <Image src={TimelyLogo} alt="Logo" className="h-[42px] w-[130px] " />
        </a>
        <button data-collapse-toggle="mega-menu-full-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full-cta" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex items-center  flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Product</a>
                </li>
                <li>
                    <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg></button>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Talk to sales</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
                </li>
                <li className='flex justify-center circularstd-font' >
                    <button className='flex text-black h-[52px] w-[154px] justify-center items-center bg-white    rounded-2xl'>Get Started
                      <div className='ml-2' ><Arrow /></div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-cta-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul className="space-y-4 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Resources
                    </a>
                </li>
            </ul>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                <p className="mb-2 text-gray-500 dark:text-gray-400">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700">
                    Explore our brands 
                    <span className="sr-only">Explore our brands </span>
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>

  )
}

export default Header3