import React from 'react'
import Image from 'next/image';

export default function VideoPlayer() {
  return (
    <video className='w-[1280px] h-[720px] mb-[112px] rounded-3xl' playsInline muted loop  autoPlay controls>
    <source src="/Dashboard.mp4" type="video/mp4" />
  </video>
  )
}
