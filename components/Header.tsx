'use client';

import React from 'react'
import 'flowbite';
import Image from 'next/image';
import TimelyLogo from "../public/timelylogo.svg"
import Arrow from "../public/Arrow"
import TimeDD from "../public/time-dd.svg"
import Asana from "../public/asana.png"

function Header3() {
    return (

        <nav className="bg-primary border-gray-200 h-[72px] dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl pr-0 md:pr-0 py-4 md:p-0 max-w-[1280px] h-[72px] ">
                <a href="https://flowbite.com" className="flex items-center pl-4 md:pl-4 ">
                    <Image src={TimelyLogo} alt="Logo" className="h-[42px] w-[130px] " />
                </a>
                <div className='mr-4' >
                    <button data-collapse-toggle="mega-menu-full-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  " aria-controls="mega-menu-full-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div id="mega-menu-full-cta" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:bg-primary mobile-nav-bg mt-[14px] md:mt-0  ">
                    <ul className="flex items-center  flex-col mt-[0px] font-medium md:flex-row md:space-x-6 md:mt-0 min-h-screen md:min-h-0 pt-4 md:pt-0 px-9 md:px-0 gap-y-4 md:gap-y-0 ">
                        <li className='w-full md:w-auto ' >
                            <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white  border-gray-100 md:w-auto  md:border-0 md:p-0 dark:border-gray-700">Product <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        </li>
                        <li className='w-full md:w-auto ' >
                            <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white  border-gray-100 md:w-auto  md:border-0 md:p-0 dark:border-gray-700">Resources <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        </li>
                        <li className='w-full md:w-auto' >
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  md:border-0  md:p-0 dark:text-white ">Pricing</a>
                        </li>
                        <li className='w-full md:w-auto' >
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  border-gray-100 md:border-0 ">Talk to sales</a>
                        </li>
                        <li className='w-full md:w-auto' >
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ">Login</a>
                        </li>
                        <li className='flex justify-center circularstd-font w-full md:w-auto pr-4 ' >
                            <button className='flex text-black h-[52px] md:w-[154px] justify-center items-center bg-white  rounded-2xl w-full '>Get Started
                                <div className='ml-2' ><Arrow /></div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Dropdown here */}
            <div id="mega-menu-full-cta-dropdown" className="mt-1  md:max-w-[1280px] mx-auto ">
                <div className="gap-x-4 md:grid grid-cols-2  grid-template py-5 grid-auto-cols-1fr ">
                    <ul className="grid  gap-x-8 grid-cols-auto-fit grid-cols-minmax-10 " aria-labelledby="mega-menu-full-cta-button">
                        <li>
                            <a href="#" className="">
                                <div className="flex flex-row h-[24px] gap-x-3 " >
                                    <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                    <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                </div>
                                <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <div className="flex flex-row h-[24px] gap-x-3 " >
                                    <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                    <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                </div>
                                <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <div className="flex flex-row h-[24px] gap-x-3  " >
                                    <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                    <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                </div>
                                <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <div className="flex flex-row h-[24px] gap-x-3 " >
                                    <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                    <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                </div>

                                <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                            </a>
                        </li>
                    </ul>
                    <div className="mt-4 md:mt-0  ">
                        <h2 className="mb-2 circularstd-font text-[20px] text-bold  leading-[30px] text-black">Integrations</h2>
                        <a href="#" className="flex items-center">
                            <div className=" w-[32px] h-[32px] " > <Image src={Asana} alt="asana-logo" /> </div>
                            <div className="  h-[28px] text-[16px] circularstd-font leading-[24px]" >Asana</div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header3