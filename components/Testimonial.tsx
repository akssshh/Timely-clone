import React from 'react'
import Image from 'next/image'
import Hero1 from '../public/hero1.png'
import Testimonial1 from '../public/Testimonial1.png'

export default function Testimonial() {
  return (
    <main className='h-[558px] mb-[100px] bg-primary ' >
      <div className=' py-[56px] flex justify-between ' >
        <div className=' w-[716px] h-[446px] border-yellow-300 border-2 ' ></div>
        <div className=' w-[1005px] h-[298px] border-yellow-300 border-2 my-auto relative overflow-hidden flex justify-around    ' >

          <div className=' ' >
            <div className='mr-4' >
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-one left-0  ' />
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-two left-0 ' />
            </div>

            <div className='ml-4' >
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-one left-[310px] ml-4 ' />
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-two left-[310px] ml-4 ' />
            </div>

            <div className='ml-4' >
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-one left-[635px] ml-4 ' />
              <Image src={Testimonial1} alt='hero-svg' className='w-[315px] absolute image-two left-[635px] ml-4 ' />
            </div>
          </div>


        </div>
      </div>
    </main>
  )
}
