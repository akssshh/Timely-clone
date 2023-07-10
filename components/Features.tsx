"use client"
import Image from 'next/image';
import Time from "../public/time.svg"
import Project from "../public/project.svg"
import Team from "../public/teams.svg"
import Plans from "../public/plans.svg"
import Greater from "../public/greater.svg"

export default function Features() {
    return (
        <main>
            <div className='w-[1280px] h-[662px] bg-primary mx-auto circularstd-font my-[112px] rounded-3xl p-[40px] ' >
                <div className=" w-[1200px] mx-auto h-[256px] flex justify-between " >
                    <div className=" w-[590px] font-bold text-[88px] tracking-[-3.2px] leading-[88px] text-white  ">
                        <h1> <span className="text-yellow"> Automate </span> your <br/> time tracking</h1>
                    </div>
                    <div className=" w-[572px] text-[20px] tracking-[-0.32px] leading-[30px]  text-white">
                        <p>
                            Forget timers, note taking and manual input— <strong>Timely </strong> can <strong> track </strong> time spent in every web and desktop app automatically for you.
                            <br/>
                            <br/>
                            Get a precise daily record of all the time you spend in documents, meetings, emails, websites and video calls with zero effort.
                            <br/>
                            <br/>
                            <span className="text-yellow" >It’s all 100% private to you.</span>
                        
                        </p>
                    </div>
                </div>
                <div className=" w-[1200px] h-[279px] flex justify-between mt-[48px]" >
                <div className="w-[288px] h-[278px] bg-secondary rounded-3xl" >

                    <div className=' p-[22px] flex flex-col ' >
                        <Image src={Time} className='mb-[24px]' alt='time-svg'/>
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white ' >Track time</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] ' >Get the complete picture of your work day with zero effort</p>

                        <div className='flex' >
                            <p className='text-white underline' >Automate time tracking</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>

                </div>
                <div className="w-[288px] h-[278px] bg-secondary rounded-3xl" >

                <div className=' p-[22px] flex flex-col ' >
                        <Image src={Project} className='mb-[24px]' alt='time-svg'/>
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white ' >Track projects</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] ' >Monitor budgets, hours and activities in real time</p>

                        <div className='flex mt-[30px] ' >
                            <p className='text-white underline  ' >Run smarter projects</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>

                </div>
                <div className="w-[288px] h-[278px] bg-secondary rounded-3xl" >

                <div className=' p-[22px] flex flex-col ' >
                        <Image src={Team} className='mb-[24px]' alt='time-svg'/>
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white ' >Track teams</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px]  ' >Get a complete overview of your team’s time</p>

                        <div className='flex mt-[30px] ' >
                            <p className='text-white underline' >Lead happier teams</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>

                </div>
                <div className="w-[288px] h-[278px] bg-secondary rounded-3xl" >

                <div className=' p-[22px] flex flex-col ' >
                        <Image src={Plans} className='mb-[24px]' alt='time-svg'/>
                        <h1 className=' text-[32px] font-bold tracking-[-0.96px] leading-[35.2px] text-white ' >Track plans</h1>
                        <p className='text-white text-[20px] tracking-[-0.32px] leading-[30px]font-light mb-[30px] ' >Real-time feedback loop of how plans actually unfold</p>

                        <div className='flex mt-[30px] ' >
                            <p className='text-white underline' >Project and team planning</p>
                            <Image src={Greater} className='mt-[2px] ml-[8px] ' alt="greater-svg" />
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </main>
    )
}
