/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import  contact_image from '../../../public/contact page image/contact_Image_man.png'

const Contact = () => {
    return (
		//TravelAqsa contact section code start
        <div id='contact' className='max-w-7xl mx-auto'>
            <div className="grid max-w-screen-xl mb-12 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
		<div className="flex flex-col justify-between">
		{/* contact section text  */}
			<div className="space-y-2 mt-8">
				<h2 className="text-[#0B0951] font-medium  lg:text-[40px] md:text-[30px]"> If you have any questions,Let's talk!</h2>
				<div className="text-[#B9C0C1] text-[16px]">Chat to our friendly team..!</div>
			</div>

			{/* contact section image */}
			<Image  src={contact_image}  alt="Contact our customer @Devgenius" className=" lg:-ml-32 -ml-5 w-[1700px]" />
		</div>

		{/* contact section form start */}
		<form novalidate="" className="space-y-5 mt-12 ">
			<div>
				<label for="name" className="text-sm text-[#0B0951]">Full name</label>
				<input id="name" type="text" placeholder="" className="w-full p-2  bg-[#FFF] rounded border-2" />
			</div>
			<div>
				<label for="email" className="text-sm text-[#0B0951]">Email</label>
				<input id="email" type="email" className="w-full p-2 bg-[#FFF] rounded border-2" />
			</div>
			<div>
				<label for="message" className="text-sm text-[#0B0951]">Message</label>
				<textarea id="message" rows="3" className="w-full p-3 bg-[#FFF] rounded border-2"></textarea>
			</div>
			<button type="submit" className="bg-[#FE5B38] hover:bg-[#FFFF] hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] btn rounded-lg  w-[157px] h-[48px] text-white border-0 ">Send Message</button>
		</form>
		{/* contact section form End */}
	</div>

        </div>
		//TravelAqsa contact section code End
    );
};

export default Contact;