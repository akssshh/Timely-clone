"use client"
import Image from 'next/image';
import Arrow from "../public/Arrow"



export default function Hero() {
  return (
    <main className="bg-primary flex justify-center items-center" >
      <div className="w-[1280px] text-center circularstd-font">
        
          <p className="text-[20px] font-bold tracking-[-0.32px] text-white "> <span className="text-yellow">Timely</span> time tracking software</p>
          <div className="font-bold text-[112px] tracking-[-3.2px] leading-[100.8px] text-white mb-[24px]">
            <h1>The world&#39;s best <br />
              <span className="text-yellow" >AI-powered</span> automatic time tracker
            </h1>
          </div>
          <div className="mb-[48px]" >
            <p className="text-[24px] text-white" > <span className="text-yellow">Timely</span> automates company time tracking, so you and your team can <br /> <span className="text-yellow">focus on the work that matters.</span></p>
          </div>

          
            <div className='flex justify-center ' >
              <button className='flex text-black h-[52px] w-[160px]    rounded-2xl  justify-center items-center  bg-white mb-[96px] ' >Get Started
                <div className='' ><Arrow /></div>
              </button>
            </div>
          
        
      </div>
    </main>
  )
}
