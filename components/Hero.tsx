"use client"
import Image from 'next/image';
import Arrow from "../public/Arrow"
import Amazon from "../public/amazon.svg"
import Kelloggs from "../public/kelloggs.svg"
import Pepsico from "../public/pepsico.svg"
import Havas from "../public/havas.svg"
import Workday from "../public/workday.svg"
import Marriott from "../public/marriott.svg"
import Yale from "../public/yale.svg"
import Grant from "../public/grant.svg"
import VideoPlayer from './VideoPlayer';



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

          
            <div className='flex justify-center mb-[96px]' >
              <button className='flex text-black h-[52px] w-[160px] justify-center items-center bg-white rounded-2xl'>Get Started
                <div className='ml-2' ><Arrow /></div>
              </button>
            </div>

            <div>
              <div className='mb-[8px]'>
                <p className='text-[14px] text-yellow leading-5 ' >Trusted by tens of thousands of users, in some of the biggest companies</p>
              </div>
              <div className='flex place-content-evenly mb-[48px]' >
                <Image src={Amazon} alt='amazon-logo' />
                <Image src={Kelloggs} alt='kelloggs-logo' />
                <Image src={Pepsico} alt='pepsico-logo' />
                <Image src={Havas} alt='havas-logo' />
                <Image src={Workday} alt='workday-logo' />
                <Image src={Marriott} alt='marriott-logo' />
                <Image src={Yale} alt='yale-logo' />
                <Image src={Grant} alt='grant-logo' />
              </div>
            </div>

            <div>
            <VideoPlayer />
            </div>


      </div>
    </main>
  )
}
