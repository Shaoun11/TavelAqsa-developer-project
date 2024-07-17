import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import envato from '../../../public/Hero Image/envato-logo.png';
export default function EnvatoButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const EnvatoUrl = () => {
        window.location.href = 'https://www.example.com';
    };

    return (
        <button
            onClick={EnvatoUrl}
            className={`${isVisible ? 'block' : 'hidden'
                } fixed bottom-20 py-2  left-5 flex bg-[#2a2867] hover:bg-[#FFFF] font-normal hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] text-[#FFF] rounded-full `}
        >
            <Image  src={envato}  alt="Envato logo @Devgenius" className=" w-[40px]  h-[40px]" />
            <span className='mt-2 mr-4'>Buy TravelAqsa   </span>
        </button>
    );
}

/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/