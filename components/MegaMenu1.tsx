import Image from "next/image"
import TimeDD from "../public/time-dd.svg"

export default function MegaMenu1() {
  return (
    <main className='max-w-[1920px] h-[608px] px-[96px]' >
        <div className='max-w-[1728px]  ' >
            <div className='max-w-[1280px] mx-auto border-2 flex  ' >
                <div className='max-w-[902px] h-[526px] py-[40px] border-2 ' >
                    <div className='w-[902px] h-[152px] '>
                        <div className='w-[902px] h-[30px] circularstd-font text-[20px] text-bold  leading-[30px]'>Features</div>
                        <div className='w-[902px] h-[106px] circularstd-font ' >
                            <div className='w-[201px] h-[106px]' >
                                <div className='w-[201px] h-[90px] py-[8px] flex flex-col '>
                                    
                                    <div className="flex flex-row w-[201px] h-[24px] " >
                                        <div className="h-[24px]" ><Image src={TimeDD} alt="clock-logo" /></div>
                                        <div className="circularstd-font text-[16px] leading-[24px] h-[24px] " >Track time</div>
                                    </div>

                                    <p className="text-[14px] circularstd-font leading-[21px]">Bill clients accurately and free your team for the work that matters.</p>
                                    
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className=' max-w-[330px] h-[543px] py-[32px] pl-[32px] border-2 ' >
                    
                </div>
            </div>
        </div>
    </main>
  )
}
