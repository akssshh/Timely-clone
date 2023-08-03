"use client"
import Image from 'next/image';
import Time from "../public/time.svg"
import Greater from "../public/greater.svg"
import Arrow from "../public/Arrow"



export default function Features() {
    return (
        <main>
            <div className='w-full md:w-[1280px] bg-primary mx-auto  my-[112px] rounded-3xl p-[40px]' >
                <div className="flex flex-col text-center row-gap-8 col-gap-12 md:grid md:grid-cols-my-grid md:gap-16" >
                    <div className=" text-white circularstd-font flex flex-col items-start">
                        <h1 className='font-bold text-[40px] leading-none md:text-[72px] md:tracking-[-2.4px] tracking-tighter-custom md:leading-[79px] mb-4' > Try Timely today!</h1>
                        <p className='text-[18px] cta md:text-[28px] md:max-w-[560px] ' >
                        Discover the power of Timely&#39;s automated time tracking now!
                        </p>
                    </div>
                    <div className="flex-grow ">

                        <li className='flex justify-center circularstd-font w-full md:w-auto pr-4 ' >
                            <button className='flex text-black h-[52px] justify-center items-center bg-white  rounded-2xl w-full '>Get Started
                                <div className='ml-2' ><Arrow /></div>
                            </button>
                        </li>

                        <p className=' text-[16px] leading-6 text-white circularstd-font mt-4 md:mt-0' >
                            <span className="text-yellow" >30 people or more? Get a personalized introduction to Timely</span>
                        </p>
                    </div>
                </div>

            </div>
        </main>
    )
}
