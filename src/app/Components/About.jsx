/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import about_image from '../../../public/About Image/about_Image.svg'
const About = () => {
  return (
    //TravelAqsa About section code start
    <div id='about' className='max-w-7xl md:flex lg:gap-20 mx-auto mt-20 '>
      {/* About section Image edit */}
      <div>
        <Image src={about_image} alt='about_Image @Devgenius'  width={620} height={300} className="mt-14 mx-auto"></Image>
      </div>
      {/*TravelAqsa About section text edit */}
      <div className='lg:ml-0 lg:mr-0 md:ml-6 md:mr-6 ml-6 mr-6 mx-auto ' >
        <button className="bg-[#FFD6CD] hover:bg-[#FFFF] font-normal hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] text-[#FE5B38] btn rounded-full   w-[171px] h-[48px] border-0 ">
          Exclusive Trips
        </button>

        <h1 className='text-[#0B0951] font-medium  pt-6 lg:text-[32px] md:text-[30px] text-[26px]   '>
          Enjoy your weekend <br />
          to the fullest!
        </h1>
        <p className='text-[#B9C0C1] pt-4 font-normal text-[16px]'>
          There are many variations of travel itineraries available, but the <span className='md:block '></span>
          majority have suffered alterations in some form, with injected <span className='md:block '></span>
          humor or unexpected detours along the way.
        </p>
        <div className='flex gap-8'>
          <div>
            <h1 className='text-[#FE5B38] font-medium  pt-6 lg:text-[32px] md:text-[30px] text-[26px] text-center ' >31+</h1>
            <p className='text-[#B9C0C1] pt-1 font-normal text-[15px]'>
              Experience
            </p>
          </div>
          <div>
            <h1 className='text-[#FE5B38] font-medium  pt-6 lg:text-[32px] md:text-[30px] text-[26px] text-center ' >380+</h1>
            <p className='text-[#B9C0C1] pt-1 font-normal text-[15px]'>
              Exclusive Client
            </p>
          </div>
          <div>
            <h1 className='text-[#FE5B38] font-medium  pt-6 lg:text-[32px] md:text-[30px] text-[26px] text-center ' >5000+</h1>
            <p className='text-[#B9C0C1] pt-1 font-normal text-[15px]'>
              Client Feedback
            </p>
          </div>
        </div>
        {/*TravelAqsa Book Now button edit */}
        <div className=" mt-8" >
          <button className="bg-[#FE5B38] hover:bg-[#FFFF] hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] btn rounded-lg  w-[137px] h-[48px] text-white border-0">
            Book Now
          </button>
        </div>

      </div>
    </div>
    //TravelAqsa About section code End
  );
};

export default About;