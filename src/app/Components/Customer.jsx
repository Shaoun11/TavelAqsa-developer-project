/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import customer_image from '../../../public/Customer Image/customer_section_Image.svg'


const Customer = () => {
    return (
        //TravelAqsa Customer section code start
        <div className='max-w-7xl mx-auto lg:mt-12 md:mt-20 mt-12 md:flex lg:gap-[190px] md:mb-12 mb-6 '>
            <div className='lg:ml-0 lg:mr-0 md:ml-6 md:mr-6 ml-6 mr-6 mx-auto ' >
           
            {/* Customer section button */}
                <button className="bg-[#FFD6CD] hover:bg-[#FFFF] font-normal hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] text-[#FE5B38] btn rounded-full   w-[171px] h-[48px] border-0 ">
                    What they say
                </button>
                {/* Customer section text start  */}
                <h1 className='text-[#0B0951] font-medium  pt-6 lg:text-[32px] md:text-[30px] text-[26px]   '>
                    What Our Customer <br />
                    Say About Us
                </h1>
                <p className='text-[#B9C0C1] pt-4 font-normal text-[16px]'>
                    There are many variations of travel itineraries available, but the <span className='md:block '></span>
                    majority have suffered alterations in some form, with injected <span className='md:block '></span>
                    humor or unexpected detours along the way.
                </p>
              
                  {/* Customer section text end  */}
            </div>


              {/* Customer section image  */}
            <div className='md:mt-0 mt-8'>
               <Image src={customer_image} className='w-[540px] h-[340px] object-cover'  alt='Map_Image @Devgenius' ></Image>
         
            </div>
        </div>
        //TravelAqsa Customer section code End
    );
};

export default Customer;