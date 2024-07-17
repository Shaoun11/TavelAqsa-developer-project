/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import Prau_Mountain from '../../../public/Destination Image/Prau_Mountain.jpg'
import Namsan_Tower from '../../../public/Destination Image/Namsan_Tower.jpg'
import Male_Beach from '../../../public/Destination Image/Male_Beach.jpg'
import Imperial_Place from '../../../public/Destination Image/Imperial_Place.jpg'
import rating_full from '../../../public/Rating Icon/star.svg'
import rating_half from '../../../public/Rating Icon/star-sharp-half-stroke.svg'

const Destination = () => {
    return (
        //TravelAqsa Destination section code start
        <div className='max-w-7xl mt-20 mx-auto scroll-mt-6' id='destination'>
            <div className='flex  justify-between lg:ml-0 lg:mr-0 md:ml-6 md:mr-6 ml-6 mr-6 mx-auto'>
                
                <div className='' >
                    <button className="bg-[#FFD6CD] hover:bg-[#FFFF] font-normal hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] text-[#FE5B38] btn rounded-full   w-[171px] h-[48px] border-0 ">

                        Top Destination
                    </button>

                </div>
                {/* Destination section button */}
                <div className='md:flex md:gap-5 md:visible hidden'>
                    <div>
                        <button className=" text-[#FE5B38] hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FE5B38] btn btn-outline rounded-lg  p-[10px] ">

                            <svg className='fill-current hover:text-white text-[#FE5B38]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15.535 3.51501L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.92901L15.535 3.51501Z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className="bg-[#FE5B38] text-[#FFFFFF] hover:border-[#FE5B38] hover:border  hover:bg-[#FFFF]  btn   rounded-lg   p-[10px]  border-[#FE5B38]">

                            <svg className='fill-current text-white hover:text-[#FE5B38]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.46501 20.485L16.95 12L8.46501 3.51498L7.05001 4.92898L14.122 12L7.05001 19.071L8.46501 20.485Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <h1 className='text-[#0B0951] lg:ml-0 lg:mr-0 md:ml-6 md:mr-6 ml-6 mr-6 mx-auto font-medium  pt-6 lg:text-[32px] md:text-[30px] text-[26px] md:text-start text-center  '>Explore Top Destination</h1>
            {/* card section edit */}
            <div className='grid lg:grid-cols-4 gap-2 md:grid-cols-2 mt-8 grid-cols-1'>
               
                {/* first card edit */}
                <div className="w-[288px] h-[423px] bg-[#FFF] rounded-2xl shadow-xl mx-auto">
                    <div className="px-[19px]  pt-4 " >
                        <Image src={Prau_Mountain} alt='Paru_Mountain @Devgenius' className="rounded-xl w-[250px] h-[274px] mx-auto object-cover"></Image>
                    </div>
                    <div className="px-[19px] mt-3 ">
                        <h2 className="text-lg font-medium text-[#0B0951]">Prau Mountain</h2>
                        <p className='flex text-[#B9C0C1] mt-3 text-[15px] font-normal'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 10C4.99858 7.16754 6.70425 4.61339 9.32107 3.52939C11.9379 2.4454 14.9501 3.04524 16.952 5.049C18.2685 6.3596 19.0059 8.14239 19 10C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 5C9.23995 5.0033 7.00331 7.23994 7 10C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.9241 11.309 17.6297 12 18.3C12.691 17.6305 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 10C16.9967 7.23994 14.7601 5.0033 12 5ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34314 10.3431 7 12 7C13.6569 7 15 8.34314 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z" fill="#B9C0C1" />
                            </svg> Bali, Indonesia
                        </p>
                        <p className='flex gap-2 mt-3 text-[#FE5B38] text-[15px] font-normal'>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_half} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            
                            <span className='-mt-[2px]'> 4.5</span>
                        </p>
                        
                    </div>
                </div>
                {/* second card edit */}
                <div className=" w-[288px] h-[423px] bg-[#FFF] rounded-2xl shadow-xl mx-auto">
                    <div className="px-[19px]  pt-4">
                        <Image src={Male_Beach} alt='Male-Beach @Devgenius' className="rounded-xl w-[250px] h-[274px] mx-auto object-cover"></Image>
                    </div>
                    <div className="px-[19px] mt-3">
                        <h2 className="text-lg font-medium text-[#0B0951]">Male Beach</h2>
                        <p className='flex text-[#B9C0C1] mt-3 text-[15px] font-normal'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 10C4.99858 7.16754 6.70425 4.61339 9.32107 3.52939C11.9379 2.4454 14.9501 3.04524 16.952 5.049C18.2685 6.3596 19.0059 8.14239 19 10C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 5C9.23995 5.0033 7.00331 7.23994 7 10C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.9241 11.309 17.6297 12 18.3C12.691 17.6305 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 10C16.9967 7.23994 14.7601 5.0033 12 5ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34314 10.3431 7 12 7C13.6569 7 15 8.34314 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z" fill="#B9C0C1" />
                            </svg> Bali, Indonesia
                        </p>
                        <p className='flex gap-2 mt-3 text-[#FE5B38] text-[15px] font-normal'>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_half} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            
                            <span className='-mt-[2px]'> 4.5</span>
                        </p>
                        
                    </div>
                </div>
                {/* third card edit */}
                <div className=" w-[288px] h-[423px] bg-[#FFF] shadow-xl rounded-2xl mx-auto">
                    <div className="px-[19px]  pt-4">
                        <Image src={Imperial_Place} alt='Imperial_Place @Devgenius' className="rounded-xl w-[250px] h-[274px] mx-auto object-cover"></Image>
                    </div>
                    <div className="px-[19px] mt-3">
                        <h2 className="text-lg font-medium text-[#0B0951]">Imperial Place</h2>
                        <p className='flex text-[#B9C0C1] mt-3 text-[15px] font-normal'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 10C4.99858 7.16754 6.70425 4.61339 9.32107 3.52939C11.9379 2.4454 14.9501 3.04524 16.952 5.049C18.2685 6.3596 19.0059 8.14239 19 10C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 5C9.23995 5.0033 7.00331 7.23994 7 10C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.9241 11.309 17.6297 12 18.3C12.691 17.6305 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 10C16.9967 7.23994 14.7601 5.0033 12 5ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34314 10.3431 7 12 7C13.6569 7 15 8.34314 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z" fill="#B9C0C1" />
                            </svg> Tokyo, Jepang
                        </p>
                        <p className='flex gap-2 mt-3 text-[#FE5B38] text-[15px] font-normal'>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_half} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            
                            <span className='-mt-[2px]'> 4.5</span>
                        </p>
                        
                    </div>
                </div>
                 {/* fourth card edit */}
                 <div className="w-[288px] h-[423px] bg-[#FFF] rounded-2xl shadow-xl mx-auto">
                    <div className="px-[19px]  pt-4">
                        <Image src={Namsan_Tower} alt='Namsan_Tower @Devgenius' className="rounded-xl w-[250px] h-[274px] mx-auto object-cover"></Image>
                    </div>
                    <div className="px-[19px] mt-3">
                        <h2 className="text-lg font-medium text-[#0B0951]">Namsan Tower</h2>
                        <p className='flex text-[#B9C0C1] mt-3 text-[15px] font-normal'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 10C4.99858 7.16754 6.70425 4.61339 9.32107 3.52939C11.9379 2.4454 14.9501 3.04524 16.952 5.049C18.2685 6.3596 19.0059 8.14239 19 10C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 5C9.23995 5.0033 7.00331 7.23994 7 10C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.9241 11.309 17.6297 12 18.3C12.691 17.6305 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 10C16.9967 7.23994 14.7601 5.0033 12 5ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34314 10.3431 7 12 7C13.6569 7 15 8.34314 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z" fill="#B9C0C1" />
                            </svg> Bali, Indonesia
                        </p>
                        <p className='flex gap-2 mt-3 text-[#FE5B38] text-[15px] font-normal'>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_full} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            <Image src={rating_half} className='w-[14px] h-[14px]' alt='Rating @DevGenius'></Image>
                            
                            <span className='-mt-[2px]'> 4.5</span>
                        </p>
                        
                    </div>
                </div>
            </div>
            {/* card section end */}
        </div>
        //TravelAqsa Destination section code End
    );
};

export default Destination;