/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import image_tour_guid from '../../../public/Discover Image and Icon/tour-guide Image.svg'
import image_tag from '../../../public/Discover Image and Icon/tag _Image.svg'
import image_reliability from '../../../public/Discover Image and Icon/tag _Image.svg'
import image_mail from'../../../public/Discover Image and Icon/mail_Image.svg'

const Discover = () => {
    return (
        //TravelAqsa Discover section code start
        <div id='discover'>
            {/* Discover section button */}
            <div className="text-center" >
                <button className="bg-[#FE5B38] hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] btn rounded-full text-center  w-[137px] h-[48px] text-white border-0">

                    Discover
                </button>
            </div>
            {/* Discover section text */}
            <div>
                <h1 className='text-[#0B0951] font-medium text-center pt-8 lg:text-[32px] md:text-[30px] text-[26px]  '>Best Gift From Us</h1>
                <p className='text-[#B9C0C1] pt-4 font-normal text-[16px] text-center'>
                There are many variations of passages of Travel agency available, <span className='md:block '></span>
                but the majority have suffered alteration in 
                </p>
            </div>
            {/* Discover section mail Image */}
            <div className='md:absolute md:-mt-12'>
                <Image  src={image_mail} alt='TravelAqsa_mail_Image' ></Image>
            </div>
            {/* Discover section card start */}
            <div className='max-w-3xl rounded-lg lg:mt-8 md:mt-24  mb-8 mx-auto shadow-lg'>
                <div className=' flex p-8'>
                {/*TravelAqsa Tour Guide card */}
                    <div  >
                        <Image style={{
                            margin: "auto",
                        }} src={image_tour_guid} alt='tour_guid_image' ></Image>
                        <div className='text-center'>
                            <h1 className='md:text-lg text-base text-[#0B0951] font-medium'>Tour Guide</h1>
                            <p className=' text-[15px] text-[#B9C0C1]'>There are many variations of 
                            passages of Tour</p>
                        </div>

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 82" fill="none">
                        <path d="M1 1C1 27.3083 1 65.2951 1 81" stroke="#B9C0C1" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {/*TravelAqsa Trust Trips card */}
                    <div >
                        <Image style={{
                            margin: "auto",
                        }} src={image_reliability} alt='tour_guid_image' className='w-[48px] h-[48px]' ></Image>
                        <div className='text-center'>
                            <h1 className='md:text-lg text-base text-[#0B0951] font-medium'>Trust Trips</h1>
                            <p className=' text-[15px] text-[#B9C0C1]'>There are many variations of 
                            passages of Tour</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 82" fill="none">
                        <path d="M1 1C1 27.3083 1 65.2951 1 81" stroke="#B9C0C1" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {/*TravelAqsa Friendly Price card */}
                    <div >
                        <Image style={{
                            margin: "auto",
                        }} src={image_tag} alt='tour_guid_image' className='w-[48px] h-[48px]' ></Image>
                      <div className='text-center'>
                            <h1 className='md:text-lg text-base text-[#0B0951] font-medium'>Friendly Price</h1>
                            <p className=' text-[15px] text-[#B9C0C1]'>There are many variations of 
                            passages of Tour</p>
                        </div>
                    </div>
                    
                </div>

            </div>
            {/*TravelAqsa Discover section card End */}
        </div>
        //TravelAqsa Discover section code End
    );
};

export default Discover;