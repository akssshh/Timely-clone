"use client"
import Image from 'next/image';
import Time from "../public/time.svg"
import Greater from "../public/greater.svg"



export default function Features() {
    return (
        <main>
        <div className='w-full md:w-[1280px] bg-primary mx-auto  my-[112px] rounded-3xl p-[40px]' >
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between" >
                <div className="flex-grow font-bold text-[52px] leading-none md:text-[88px]  md:tracking-[-3.2px] md:leading-[88px] text-white circularstd-font ">
                    <h1> <span className="text-yellow  "> Automate </span> your time tracking</h1>
                </div>
                <div className="flex-grow text-[20px] tracking-[-0.32px] leading-[30px]  text-white circularstd-normal mt-4 md:mt-0">
                    <p>
                        Forget timers, note taking and manual input— <strong>Timely </strong> can <strong> track </strong> time spent in every web and desktop app automatically for you.
                        <br />
                        <br />
                        Get a precise daily record of all the time you spend in documents, meetings, emails, websites and video calls with zero effort.
                        <br />
                        <br />
                        <span className="text-yellow" >It’s all 100% private to you.</span>
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between mt-[48px]" >
                <div className="flex md:w-[285px] bg-secondary rounded-3xl mb-4 md:mb-0" >
                    <div className=' p-[22px] flex flex-col ' >
                        <Image src={Time} className='mb-[24px]' alt='time-svg' />
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white circularstd-font ' >Track time</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] circularstd-normal ' >Get the complete picture of your work day with zero effort</p>
                        <div className='flex' >
                            <p className='text-white underline' >Automate time tracking</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>
                </div>

                <div className="flex md:w-[285px] bg-secondary rounded-3xl mb-4 md:mb-0" >
                    <div className=' p-[22px] flex flex-col ' >
                        <Image src={Time} className='mb-[24px]' alt='time-svg' />
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white circularstd-font ' >Track time</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] circularstd-normal ' >Get the complete picture of your work day with zero effort</p>
                        <div className='flex' >
                            <p className='text-white underline' >Automate time tracking</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>
                </div>

                <div className="flex md:w-[285px] bg-secondary rounded-3xl mb-4 md:mb-0" >
                    <div className=' p-[22px] flex flex-col ' >
                        <Image src={Time} className='mb-[24px]' alt='time-svg' />
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white circularstd-font ' >Track time</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] circularstd-normal ' >Get the complete picture of your work day with zero effort</p>
                        <div className='flex' >
                            <p className='text-white underline' >Automate time tracking</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>
                </div>

                <div className="flex md:w-[285px] bg-secondary rounded-3xl mb-4 md:mb-0" >
                    <div className=' p-[22px] flex flex-col ' >
                        <Image src={Time} className='mb-[24px]' alt='time-svg' />
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white circularstd-font ' >Track time</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] circularstd-normal ' >Get the complete picture of your work day with zero effort</p>
                        <div className='flex' >
                            <p className='text-white underline' >Automate time tracking</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </main> 
    )
}
