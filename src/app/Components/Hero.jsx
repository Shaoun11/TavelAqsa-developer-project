/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import image_Calendar from '../../../public/Hero Icon/calendar_Icon.svg'
import image_group from '../../../public/Hero Icon/group_Icon.svg'
import image_Location from "../../../public/Hero Icon/location_Icon.svg"
import hero_image from "../../../public/Hero Image/hero_Iamge.svg"
import hero_Location from "../../../public/Hero Image/location.svg"

const Hero = () => {
    return (
        //TravelAqsa Hero section code start
        <div id='/' className='max-w-7xl lg:flex  mx-auto lg:pt-36  md:pt-20 pt-4 lg:min-h-[calc(100vh-78px)]'>
            <div className='lg:ml-0 lg:mr-0 md:ml-6 md:mr-6 ml-6 mr-6 mx-auto '>
                {/* Hero section text */}
                <h1 className='text-[#18233B] font-medium lg:text-[34px] md:text-[30px] text-[20px]   '>Embark on a Journey <br /> to Any Corner of the World</h1>
                <p className='text-[#B9C0C1] md:pt-8 pt-4 font-normal text-[16px] '>
                    There are many variations of travel itineraries available, but the <span className='md:block '></span>majority have suffered alterations in some form, with injected <span className='md:block '></span>humor or unexpected detours along the way.
                </p>
                
                {/* Hero section destination image */}
                <div >
                    <Image className='absolute  lg:ml-[700px]  lg:-mt-[200px] md:mt-[300px] md:ml-[30px] mt-[230px] ml-[212px]' src={hero_Location} alt="location_image @Devgenius"></Image>
                </div>
                {/*  rectangle */}
                <div className='flex shadow-md absolute lg:ml-[665px] lg:-mt-[60px] md:mt-[390px] md:ml-[42px] mt-[370px] ml-[222px]  bg-[#ffffff]  rounded-3xl md:p-[9px] p-1 '>
                    <div>
                        <Image src={image_Location} alt="hero image" className='w-[20px]   h-[18px]'></Image>
                    </div>

                    <div>
                        <p className='text-[#0B0951]   md:text-sm text-xs font-medium'>Mafushi, Maldives</p>
                    </div>
                </div>
                {/* Hero card Edit */}
                <div className='lg:w-[748px] md:w-[698px]   mx-auto mt-8 p-4 grid md:flex grid-cols-2  lg:gap-9 md:gap-6 md:h-[88px] h-[180px] bg-[#FFFFFF] shadow-md rounded-lg'>

                    {/* First card */}
                    <div className='flex'>
                        <div className='mt-3' >
                            <Image src={image_Location} alt='Location_Image @Devgenius' className='w-[24px] h-[24px]' ></Image>
                        </div>
                        <div className='ml-4'>
                            <p className='flex  text-sm text-[#B9C0C1] font-medium'>Where
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15.713L18.01 9.70296L16.597 8.28796L12 12.888L7.40399 8.28796L5.98999 9.70196L12 15.713Z" fill="#B9C0C1" />
                                </svg>
                            </p>
                            <p className='text-[#0B0951] md:text-base text-sm font-normal '>
                            Mafushi, Maldives
                            </p>
                        </div>
                    </div>

                    {/* second card */}
                    <div className='flex mx-auto'>
                        <div className='mt-3' >
                            <Image src={image_Calendar} alt='Calendar_Image @Devgenius'className='w-[24px] h-[24px]' ></Image>
                        </div>
                        <div className='ml-4'>
                            <p className='flex text-sm text-[#B9C0C1] font-medium'>Date
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15.713L18.01 9.70296L16.597 8.28796L12 12.888L7.40399 8.28796L5.98999 9.70196L12 15.713Z" fill="#B9C0C1" />
                                </svg>
                            </p>
                            <p className='text-[#0B0951]  md:text-base text-sm font-normal'>
                                July 05, 2023
                            </p>
                        </div>
                    </div>

                    {/* third card */}
                    <div className='flex mx-auto md:ml-0 ml-0'>
                        <div className='mt-3' >
                            <Image src={image_group} alt='Image_group @Devgenius'  className='w-[24px] h-[24px]'></Image>
                        </div>
                        <div className='ml-4'>
                            <p className='flex text-sm text-[#B9C0C1] font-medium'>Guest
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15.713L18.01 9.70296L16.597 8.28796L12 12.888L7.40399 8.28796L5.98999 9.70196L12 15.713Z" fill="#B9C0C1" />
                                </svg>
                            </p>
                            <p className='text-[#0B0951]  md:text-base text-sm font-normal '>
                                4 person
                            </p>
                        </div>
                    </div>

                    {/* card button */}
                    <div className="" >
                        <button className="bg-[#FE5B38]  hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] btn rounded-lg  w-[137px] h-[48px] text-white border-0">

                        Search
                        </button>
                    </div>
                </div>
            </div>

            {/*TravelAqsa hero image edit */}

            <div className='lg:ml-10 ml-5 md:ml-40 lg:-mt-20'>
                <Image src={hero_image} alt='Hero_Image @Devgenius' width={8000} height={500} className='mt-20'></Image>
            </div>

        </div>
        //TravelAqsa Hero section code end

    );
};

export default Hero;