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



export default function Hero() {
  return (
    <main className="bg-primary flex justify-center items-center" >
      <div className="max-w-[1280px] text-center circularstd-font pt-[112px] px-4 ">

        <p className="text-[20px] font-bold tracking-[-0.32] text-white "> <span className="text-yellow">Timely</span> time tracking software</p>

        <div className="font-bold text-[40px] leading-[1] sm:text-[64px] sm:tracking-[-0.2px] sm:leading-[1]   md:text-[112px] md:tracking-[-3.2px] md:leading-[100.8px] text-white mb-[24px] mt-2" >
          <h1>The world&#39;s best <br />
            <span className="text-yellow" >AI-powered</span> automatic time tracker
          </h1>
        </div>

        <div className="mb-[48px]" >
          <p className="text-[24px] text-white" > <span className="text-yellow">Timely</span> automates company time tracking, so you and your team can <br /> <span className="text-yellow">focus on the work that matters.</span></p>
        </div>


        <div className='flex justify-center mb-[96px] w-full ' >
          <button className='flex text-black h-[52px] w-full md:w-[160px] justify-center items-center bg-white rounded-2xl'>Get Started
            <div className='ml-2' ><Arrow /></div>
          </button>
        </div>

        <div>
          <div className='mb-[8px]'>
            <p className='text-[14px] text-yellow leading-5 ' >Trusted by tens of thousands of users, in some of the biggest companies</p>
          </div>
          <div className='grid sm:grid-cols-4 grid-cols-2 md:grid-cols-8 gap-4 mb-[48px] place-items-center' >
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

        <div className='w-full overflow-hidden rounded-2xl' >
          <video className='w-full ' playsInline muted loop autoPlay controls>
            <source src="/Dashboard.mp4" type="video/mp4" />
          </video>
        </div>


      </div>
    </main>
  )
}
