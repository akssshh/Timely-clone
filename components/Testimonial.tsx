import React from 'react'
import Image from 'next/image'
import Hero1 from '../public/hero1.png'
import Testimonial1 from '../public/Testimonial1.png'
import Badge1 from "../public/Badge1.svg"
import Badge2 from "../public/Badge2.svg"
import Badge3 from "../public/Badge3.svg"
import Badge4 from "../public/Badge4.svg"
import StarLogo from "../public/StarLogo.svg"
import Arrow from "../public/Arrow"

export default function Testimonial() {
  return (
    <main className='h-[558px] mb-[100px] bg-primary ' >
      <div className='  md:flex md:justify-around mx-5  ' >
        <div className=' md:w-[716px] max-w-2xl h-[446px] my-auto'>
          <div className='md:w-[539px] sm:w-[427px] mx-auto'>
            <div className='flex flex-col sm:flex-row md:justify-between mb-4'>
              <div><Image src={StarLogo} alt='rating' /></div>
              <div className='grid grid-cols-4 gap-6 md:w-[384px] '>
                <Image src={Badge1} alt='badge1' className='w-[56px] md:w-[72px] md:h-[93px] ' />
                <Image src={Badge2} alt='badge1' className='w-[56px] md:w-[72px] md:h-[93px] ' />
                <Image src={Badge3} alt='badge1' className='w-[56px] md:w-[72px] md:h-[93px] ' />
                <Image src={Badge4} alt='badge1' className='w-[56px] md:w-[72px] md:h-[93px] ' />
              </div>
            </div>

            <div className="flex-grow font-bold text-[72px] sm:text-[45px] leading-none md:text-[56px]  md:tracking-[-2.5px] md:leading-[59px] text-white circularstd-font text-center ">
              <h1>Trusted around the world</h1>
            </div>

            <div className='flex-grow text-[20px] tracking-[-0.32px] leading-[30px] text-center text-white circularstd-normal mt-4 md:mt-2 mb-[32px]' >
              <p>We help over 5,000 businesses across 160 countries automatically record their time, stay connected with their teams and report accurately on their work.</p>
            </div>

            <button className='flex text-black h-[52px] md:w-[154px] justify-center items-center bg-white  rounded-2xl w-full '>Get Started
                <div className='ml-2' ><Arrow /></div>
              </button>

          </div>
        </div>
        <div className='md:w-[805px] h-[558px] border-yellow-300  my-auto relative flex justify-around overflow-hidden border-2 border-yellow-300' >

          <div className='scale-105 md:rotate-6 absolute md:left-[-108px]' >
            <Image src={Testimonial1} alt='hero-svg' className='w-[315px] image-one' />
            <Image src={Testimonial1} alt='hero-svg' className='w-[315px] image-two' />
            <Image src={Testimonial1} alt='hero-svg' className='w-[315px] image-one' />
            <Image src={Testimonial1} alt='hero-svg' className='w-[315px] image-two' />
          </div>

          {/* <div className='ml-4' >
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-one left-[310px] ml-4 ' />
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-two left-[310px] ml-4 ' />
            </div> */}

          {/* <div className='ml-4' >
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-one left-[635px] ml-4 ' />
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-two left-[635px] ml-4 ' />
            </div> */}
        </div>


      </div>

    </main>
  )
}
