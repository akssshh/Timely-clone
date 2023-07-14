import Image from "next/image"
import TimeDD from "../public/time-dd.svg"
import Asana from "../public/asana.png"

export default function MegaMenu1() {
    return (
        <main className="bg-yellow">

            <div id="mega-menu-full-cta-dropdown" className="mt-1  max-w-[1280px] mx-auto ">
                <div className="gap-x-4 md:grid grid-cols-2  grid-template py-5 grid-auto-cols-1fr ">
                    
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
                    

                    <div className="mt-4 md:mt-0  ">
                        <h2 className="mb-2 circularstd-font text-[20px] text-bold  leading-[30px] text-black">Integrations</h2>
                        <a href="#" className="flex items-center">
                            <div className=" w-[32px] h-[32px] " > <Image src={Asana} alt="asana-logo" /> </div>
                            <div className="  h-[28px] text-[16px] circularstd-font leading-[24px]" >Asana</div>
                        </a>
                    </div>

                    
                </div>
            </div>

        </main>
    )
}
