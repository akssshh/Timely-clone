import React from 'react'
import Image from 'next/image'
import Hero1 from '../public/hero1.png'
import Hero2 from '../public/hero2.png'

export default function Testimonial() {
  return (
    <main className=' w-[1920px] h-[558px] mb-[100px] bg-primary ' >
        <div className=' py-[56px] flex justify-between ' >
            <div className=' w-[716px] h-[446px] border-yellow-300 border-2 ' ></div>
            <div className=' w-[1005px] h-[298px] border-yellow-300 border-2 my-auto relative overflow-hidden flex justify-around    ' >
              
              <div className='  ' >
              <div className='' >
                <Image src={Hero1} alt='hero-svg' className='w-[315px] absolute image-one left-0  ' />
                <Image src={Hero1} alt='hero-svg' className='w-[315px] absolute image-two left-0 ' />
              </div>

              <div className='' >
                <Image src={Hero1} alt='hero-svg' className='w-[315px] absolute image-one left-[308px] ' />
                <Image src={Hero1} alt='hero-svg' className='w-[315px] absolute image-two left-[308px] ' />
              </div>

              <div className='' >
                <Image src={Hero1} alt='hero-svg' className='w-[315px] absolute image-one left-[620px] ' />
                <Image src={Hero1} alt='hero-svg' className='w-[315px] absolute image-two left-[620px] ' />
              </div>
              </div>

              
            </div>
        </div>
    </main>
  )
}
