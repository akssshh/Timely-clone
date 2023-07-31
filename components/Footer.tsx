import FooterLogo from "../public/FooterLogo.svg"
import Image from "next/image"
import AppStore from "../public/AppStore.svg"
import GooglePlay from "../public/GooglePlay.svg"

function Footer() {
    return (
        <footer className="bg-white">
            <div
                className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="flex flex-col">
                        <div className="">
                        <Image src={FooterLogo} alt="Logo" className="h-[42px] w-[130px] " />
                        </div>

                        <div>
                        <p className="mt-8  text-gray-500 text-center">
                        Get Timely on your phone
                        </p>
                        </div>

                        <div className="mt-4 flex gap-x-4">
                        
                            <Image src={AppStore} alt="logo" className="min-w-[60px]" />
                            <Image src={GooglePlay} alt="logo" className="min-w-[60px]"/>
                       
                        </div>

                        
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"
                    >
                        <div>
                            <p className="font-medium text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        1on1 Coaching
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        Company Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        HR Consulting
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        SEO Optimisation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        
                    </div>
                </div>

                <p className="text-xs text-gray-500">
                    &copy; 2022. Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer


