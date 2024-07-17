/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import  codecanyon_logo from '../../../public/Footer Iogo/DevGenius-codecanyon-logo.svg'
const Footer = () => {
    return (
        //TravelAqsa Footer section code start
        <div className="bg-gradient-to-r shadow-md border bg-[#fffaf8]">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-3">
                    <div>
                        {/*TravelAqsa Footer section text */}
                        <h2 class='text-[#18233B] text-2xl font-medium'>Travel<span class='text-[#FE5B38]'>Aqsa!</span> </h2>

                        <p className="max-w-xl mt-4 text-[15px]   text-[#B9C0C1] font-normal">
                            There are many variations of travel itineraries available for
                            those venturing abroad, but the majority have suffered
                            alterations, often injected with tourist destinations.
                        </p>

                        <div>
                        <Image  src={codecanyon_logo}  alt="DevGenius-codecanyon-logo" className="mt-4" />
                        </div>

                        {/*TravelAqsa Footer section icon start */}
                        <div className="flex mt-6 space-x-5 hover:first-line: ">
                            <a className="hover:border-[#FE5B38] hover:border  hover:text-[#FE5B38] hover:bg-[#FFFF] bg-[#FE5B38] rounded-full h-[35px] w-[35px] " href target="_blank">

                                <svg className='fill-current text-white hover:text-[#FE5B38] mt-[5px] ml-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.002 21.041C9.54201 21.041 9.25201 21.028 8.29201 20.986C7.54339 20.9614 6.80445 20.8092 6.10701 20.536C4.90033 20.0664 3.94615 19.1119 3.47701 17.905C3.21432 17.205 3.07263 16.4655 3.05801 15.718C3.00201 14.76 3.00201 14.446 3.00201 12.005C3.00201 9.538 3.01501 9.25 3.05801 8.295C3.07295 7.54853 3.21464 6.81001 3.47701 6.111C3.94565 4.90253 4.90137 3.94718 6.11001 3.479C6.80866 3.21521 7.54736 3.07315 8.29401 3.059C9.24901 3.005 9.56301 3.005 12.002 3.005C14.482 3.005 14.767 3.018 15.712 3.059C16.4606 3.07327 17.2013 3.21531 17.902 3.479C19.1103 3.94771 20.0659 4.90288 20.535 6.111C20.8021 6.8202 20.9446 7.57026 20.956 8.328C21.012 9.28601 21.012 9.59901 21.012 12.039C21.012 14.479 20.998 14.799 20.956 15.746C20.9411 16.4942 20.7991 17.2344 20.536 17.935C20.0657 19.1427 19.1101 20.0976 17.902 20.567C17.2023 20.8292 16.4631 20.9709 15.716 20.986C14.761 21.041 14.448 21.041 12.002 21.041ZM11.968 4.588C9.52201 4.588 9.26801 4.6 8.31301 4.643C7.743 4.65056 7.17849 4.75575 6.64401 4.954C5.85477 5.25601 5.23024 5.878 4.92501 6.666C4.72523 7.2063 4.62002 7.77698 4.61401 8.353C4.56101 9.322 4.56101 9.576 4.56101 12.005C4.56101 14.405 4.57001 14.696 4.61401 15.659C4.62297 16.2292 4.72811 16.7938 4.92501 17.329C5.23069 18.1165 5.85511 18.738 6.64401 19.04C7.17813 19.2396 7.74287 19.3448 8.31301 19.351C9.28101 19.407 9.53601 19.407 11.968 19.407C14.421 19.407 14.675 19.395 15.622 19.351C16.1924 19.3441 16.7574 19.2389 17.292 19.04C18.0765 18.7354 18.6969 18.1153 19.002 17.331C19.2014 16.7903 19.3066 16.2193 19.313 15.643H19.324C19.367 14.687 19.367 14.432 19.367 11.989C19.367 9.54601 19.356 9.289 19.313 8.334C19.304 7.76446 19.1989 7.20052 19.002 6.666C18.6976 5.88058 18.0771 5.2593 17.292 4.954C16.7575 4.75475 16.1925 4.64953 15.622 4.643C14.655 4.588 14.402 4.588 11.968 4.588ZM12.002 16.624C10.132 16.6252 8.44543 15.4997 7.72888 13.7725C7.01232 12.0452 7.40692 10.0563 8.72865 8.73347C10.0504 7.4106 12.0389 7.01428 13.7668 7.72934C15.4947 8.4444 16.6216 10.13 16.622 12C16.6193 14.5511 14.5531 16.619 12.002 16.624ZM12.002 8.998C10.3452 8.998 9.00201 10.3412 9.00201 11.998C9.00201 13.6549 10.3452 14.998 12.002 14.998C13.6589 14.998 15.002 13.6549 15.002 11.998C14.9982 10.3427 13.6573 9.00185 12.002 8.998ZM16.802 8.28501C16.2074 8.2828 15.7269 7.79959 15.728 7.20501C15.7291 6.61043 16.2114 6.12901 16.806 6.12901C17.4006 6.12901 17.8829 6.61042 17.884 7.205C17.8843 7.49187 17.7703 7.76703 17.5673 7.96968C17.3642 8.17234 17.0889 8.2858 16.802 8.28501Z" />
                                </svg>
                            </a>
                            <a className="hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] bg-[#FE5B38] rounded-full h-[35px] w-[35px]" href target="_blank" rel="noreferrer">

                                <svg className='fill-current text-white hover:text-[#FE5B38] mt-[5px] ml-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.956 10.356V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C9.06857 17.2202 6.74868 14.8682 6.74868 11.9805C6.74868 9.09275 9.06857 6.74072 11.956 6.70098C13.1562 6.69954 14.3195 7.11605 15.246 7.87898L17.846 5.27898C14.8636 2.65705 10.508 2.31981 7.15758 4.45142C3.80713 6.58303 2.26705 10.6712 3.37827 14.4836C4.4895 18.296 7.98497 20.9164 11.956 20.914C16.423 20.914 20.485 17.665 20.485 11.98C20.4781 11.4326 20.4111 10.8877 20.285 10.355L11.956 10.356Z" />
                                </svg>
                            </a>
                            <a className="hover:border-[#FE5B38]  hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] bg-[#FE5B38] rounded-full h-[35px] w-[35px]" href target="_blank" rel="noreferrer">

                                <svg className='fill-current text-white mt-1 ml-[5px] hover:text-[#FE5B38]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" />
                                </svg>
                            </a>
                            <a className="hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] bg-[#FE5B38] rounded-full h-[35px] w-[35px]" href target="_blank" rel="noreferrer">

                                <svg className='fill-current text-white hover:text-[#FE5B38] mt-[5px] ml-[6px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0396 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39059 9.09676 5.17595 7.4669 2.99699 4.78599C1.85982 6.74741 2.44094 9.25477 4.32499 10.516C3.64369 10.4941 2.97751 10.3096 2.38199 9.97799C2.38199 9.99599 2.38199 10.014 2.38199 10.032C2.38238 12.0751 3.82236 13.8351 5.82499 14.24C5.19305 14.4119 4.53019 14.4372 3.88699 14.314C4.45018 16.0613 6.06054 17.2583 7.89599 17.294C6.37582 18.4871 4.49846 19.1342 2.56599 19.131C2.22346 19.1315 1.8812 19.1118 1.54099 19.072C3.50337 20.333 5.78735 21.0023 8.11999 21C11.3652 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3525 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1574 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" />
                                </svg>
                            </a>

                        </div>
                        {/*TravelAqsa Footer section icon end */}
                    </div>
                    {/* Footer section Nav */}
                    <div className="grid grid-cols-2 lg:ml-12 lg:mt-0 mt-4 lg:col-span-2 sm:grid-cols-3 lg:grid-cols-3">
                        <div>
                            <p className=" text-[#0B0951] font-medium text-xl">
                                Services
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2  text-sm text-[#B9C0C1] font-normal">
                                <a className="hover:opacity-75" href> World Tour</a>
                                <a className="hover:opacity-75" href> Restaurant </a>
                                <a className="hover:opacity-75" href> Book Room</a>
                                <a className="hover:opacity-75" href> Destination </a>
                                <a className="hover:opacity-75" href> Private Travel </a>
                            </nav>
                        </div>
                        <div>
                            <p className="text-[#0B0951] font-medium text-xl">
                                Support
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2   text-sm text-[#B9C0C1] font-normal">
                                <a className="hover:opacity-75" href> Account </a>
                                <a className="hover:opacity-75" href> Login</a>
                                <a className="hover:opacity-75" href> Contact </a>
                                <a className="hover:opacity-75" href> Condition </a>
                                <a className="hover:opacity-75" href> Privacy</a>
                            </nav>
                        </div>


                        <div>
                            <p className="text-[#0B0951] md:mt-0 mt-6 font-medium text-xl">
                                Link
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2  text-sm text-[#B9C0C1] font-normal">
                                <a className="hover:opacity-75" href=''> Trending Tours </a>
                                <a className="hover:opacity-75" href=''> Flight Booking </a>
                                <a className="hover:opacity-75" href=''> Testimonial </a>
                                <a className="hover:opacity-75" href=''> Our Team </a>
                                <a className="hover:opacity-75" href=''> Contact </a>
                            </nav>
                        </div>
                    </div>
                    {/*TravelAqsa Footer section nav end */}
                </div>

            </div>
            {/*TravelAqsa sub Footer */}
            <footer className="footer footer-center p-4 text-[15px] bg-[#fffaf8] border-t text-[#B9C0C1]">
                <aside>
                    <a target='_blank' href='https://www.devgenius.app/'>© 2024 TravelAqsa! - Created by <span className='text-[#909495] font-normal' >DevGenius Technologies Ltd</span>.</a>
                </aside>
            </footer>
        </div>

        //TravelAqsa Footer section code End

    );
};

export default Footer;