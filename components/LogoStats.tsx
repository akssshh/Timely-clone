import emailLogo from "../public/email.png"
import TimelyLogo from "../public/timelylogo.svg"
import Image from "next/image"

function LogoStats() {
    return (
        <main className='' >
            <div className='bg-primary py-[112px]  '>

                <div className='md:mx-auto md:w-[753px] md:mb-[48px] mb-[30px]' >
                    <div className="mb-4 " > 
                        <Image src={TimelyLogo} alt="Logo" className="h-[42px] w-[130px] mx-auto " />
                    </div>
                    <div className="circularstd-font text-[16px] leading-normal text-white ">
                        <p className="text-center" >Integration ecosystem</p>
                    </div>
                    <div className="flex-grow font-bold text-[35px] sm:text-[45px] leading-none md:text-[56px]  md:tracking-[-1.5px] md:leading-[61px] text-white circularstd-font text-center ">
                        <h1> Connect your stack</h1>
                    </div>
                    <div className='flex-grow text-[20px] tracking-[-0.32px] leading-[30px] text-center text-white circularstd-normal mt-4 md:mt-2' >
                        <p>Timely’s native integrations and open APIs let you easily connect data across your existing digital toolkit. Enjoy modern, automatic time tracking without changing the workflows you’ve spent years perfecting.</p>
                    </div>
                </div>

                <div className="bg-primary lg:w-[1280px] md:mx-auto py-24 sm:py-32 md:mb-[48px] mb-[30px]">


                    <div className="flex justify-center flex-wrap gap-x-16 gap-y-16 md:mb-[48px] mb-[30px]">
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                        <div>
                            <Image className="  " src={emailLogo} alt="Transistor" width="60" height="60" />
                        </div>
                    </div>
                    <div className="circularstd-font text-[16px] leading-normal text-white">
                    <p className='text-white underline text-center' >Check all our integrations</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default LogoStats