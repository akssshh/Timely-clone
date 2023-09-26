import React from 'react'
import Image from 'next/image'
import TimeDash from "../public/time-track.webp"
import BilDetail from "../public/bill-detail.webp"
import PeopleDash from "../public/people-dash.webp"

const Pros2 = () => {
    return (
        <section className="text-gray-600 body-font ">
            <div className=" md:max-w-[1280px] mx-auto flex md:h-[482px] px-5 mt-4 md:flex-row  items-center md:grid grid-cols-2 gap-x-20 mb-32 flex-col-reverse  ">

                <div className=" ">
                    <Image className="object-cover object-center rounded" alt="hero" src={TimeDash} width={620} height={386} />
                </div>

                <div className=" md:w-[480px] lg:pr-8 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl md:text-4xl text-3xl mb-4  text-gray-900 sm:font-semibold font-medium">
                        Save hours on time tracking
                    </h1>
                    <p className="mb-8 leading-relaxed text-[20px] ">Timely’s simple UI and automatic time tracking have helped other companies reduce timesheet admin by 75%. </p>

                </div>

            </div>

            <div className=" md:max-w-[1280px] mx-auto flex px-5 md:h-[482px] md:flex-row flex-col items-center md:grid grid-cols-2 gap-x-20 mb-32 ">

                <div className=" md:w-[480px] lg:pr-8 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl md:text-4xl text-3xl mb-4  text-gray-900 sm:font-semibold font-medium">
                        Capture every billable detail
                    </h1>
                    <p className="mb-8 leading-relaxed text-[20px]">By capturing every second of your work day, Timely stops billable time from falling through the cracks. Report and invoice clients transparently, and use accurate company time data to improve project rates and budgets.</p>
                </div>

                <div className=" ">
                    <Image className="object-cover object-center rounded" alt="hero" src={BilDetail} width={620} height={386} />
                </div>

            </div>

            <div className=" md:max-w-[1280px] mx-auto flex md:h-[482px] px-5 mt-4 md:flex-row  items-center md:grid grid-cols-2 gap-x-20 mb-32 flex-col-reverse  ">

                <div>
                    <Image className="object-cover object-center rounded" alt="hero" src={PeopleDash} width={620} height={386} />
                </div>

                <div className=" md:w-[480px] lg:pr-8 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl md:text-4xl text-3xl mb-4  text-gray-900 sm:font-semibold font-medium">
                    Empower your people
                    </h1>
                    <p className="mb-8 leading-relaxed text-[20px] ">Timely’s gorgeous design, intuitive controls and fierce protection of individual privacy make it a time tracking tool that people actually enjoy using.</p>

                </div>

            </div>

        </section>
    )
}

export default Pros2