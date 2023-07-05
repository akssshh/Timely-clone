import React from 'react'
import Wire from "../public/Wire"
import Image from 'next/image'
import TimeDash from "../public/time-track.webp"
import BilDetail from "../public/bill-detail.webp"
import PeopleDash from "../public/people-dash.webp"

export default function Pros() {
  return (
    <main className='pros-section ' >
      <div className=' left-[250px] absolute  ' >

        <div className='absolute w-[1280px] h-[1830px] mx-auto ' >
          <div className=' my-[142px] flex flex-col justify-between gap-y-32  ' >

            <div className=' h-[387px] flex justify-between ' >

              <div className=' w-[600px] h-[387px] ' >
                <Image src={TimeDash} alt="time-dashboard" />
              </div>

              <div className=' w-[480px] h-[226px] mx-auto my-auto circularstd-font '>
                <div className=' h-[112px] font-bold text-[56px] tracking-[-1.6px] leading-[56px] mb-[24px] text-black '><h1>Save hours on <br /> time tracking</h1>
                </div>


                <div className='h-[90px] text-[20px] leading-[30px] text-grey ' >
                  <p>Timely’s simple UI and automatic time tracking have helped other companies reduce timesheet admin by 75%.</p>
                </div>
              </div>

            </div>

            <div className=' h-[397px] flex justify-between' >

              <div className=' w-[480px] h-[286px] mx-auto my-auto circularstd-font'>

                <div className=' h-[112px] font-bold text-[56px] tracking-[-1.6px] leading-[56px] mb-[24px] text-black '><h1>Capture every <br /> billable detail</h1>
                </div>


                <div className='h-[90px] text-[20px] leading-[30px] text-grey ' >
                  <p>By capturing every second of your work day, Timely stops billable time from falling through the cracks. Report and invoice clients transparently, and use accurate company time data to improve project rates and budgets.</p>
                </div>

              </div>


              <div className=' w-[600px] h-[396px] '>
                <Image src={BilDetail} alt="time-dashboard" />
              </div>


            </div>

            <div className=' h-[375px] flex justify-between' >

              <div className=' w-[600px] h-[375px]' >
              <Image src={PeopleDash} alt="people-dashboard" />
              </div>

              <div className=' w-[480px] h-[226px] mx-auto my-auto circularstd-font' >
                <div className=' h-[112px] font-bold text-[56px] tracking-[-1.6px] leading-[56px] mb-[24px] text-black '><h1>Empower your people</h1>
                  </div>


                  <div className='h-[90px] text-[20px] leading-[30px] text-grey ' >
                    <p>Timely’s gorgeous design, intuitive controls and fierce protection of individual privacy make it a time tracking tool that people actually enjoy using.</p>
                  </div>
              </div>

            </div>



          </div>
        </div>

        <div className='absolute z-[-2] ' >
          <Wire />
        </div>

      </div>
    </main>
  )
}
