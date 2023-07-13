import Image from "next/image"
import TimeDD from "../public/time-dd.svg"
import Asana from "../public/asana.png"

export default function MegaMenu1() {
    return (
        <main className="bg-yellow">

            <div id="mega-menu-full-cta-dropdown" className="mt-1  max-w-[1280px] mx-auto ">
                <div className="gap-x-4 grid grid-cols-2 grid-template py-5 mx-auto text-sm flex flex-col md:flex-row">
                    
                        <ul className="grid  gap-x-8 grid-cols-auto-fit grid-cols-minmax-10 " aria-labelledby="mega-menu-full-cta-button">
                            <li>
                                <a href="#" className="">
                                    <div className="flex flex-row h-[24px] gap-x-3 " >
                                        <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                        <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                    </div>

                                    <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    <div className="flex flex-row h-[24px] gap-x-3 " >
                                        <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                        <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                    </div>

                                    <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    <div className="flex flex-row h-[24px] gap-x-3  " >
                                        <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                        <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                    </div>

                                    <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    <div className="flex flex-row h-[24px] gap-x-3 " >
                                        <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                        <div className="  circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                    </div>

                                    <p className="text-[14px] mt-[4px]  circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                                </a>
                            </li>
                        </ul>
                    

                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                        <a href="#" className="inline-flex items-center text-sm font-medium">
                            Explore our brands
                            <span className="sr-only">Explore our brands </span>
                            <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                    
                </div>
            </div>

        </main>
    )
}
