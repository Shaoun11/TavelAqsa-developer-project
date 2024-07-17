"use client"
import { Link } from 'react-scroll/modules';
import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(!false);

  return (
    //Navbar code start
    <div className="shadow-sm sticky -top-1 bg-opacity-50   backdrop-blur-3xl   lg:h-[80px] w-full  h-auto   bg-[#fffaf8]  ">
    <div className="max-w-7xl mx-auto ">
      <nav className="px-6 py-3 flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <Link to="/" smooth={true} className=" font-bold">
          <h2 class='text-[#18233B] md:text-2xl text-xl font-medium'>Travel<span class='text-[#FE5B38]'>Aqsa!</span> </h2>
          </Link>
        </div>
         {/* lg: device navbar    */}
        <ul className="hidden cursor-pointer lg:flex justify-between items-center gap-8 text-base text-[#18233B]  font-normal ">
          <li>
            <Link to='/' smooth={true} className="focus:text-[#FE5B38] hover:active:text-[#FE5B38]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="discover" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] active:text-[#FE5B38]"
            >
             Discover
              
            </Link>
          </li>
          <li>
            <Link
              to="destination" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] active:text-[#FE5B38]"
            >
             Destination
              
            </Link>
          </li>

          <li>
            <Link
              to="about" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] active:text-[#FE5B38]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="contact" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] active:text-[#FE5B38]"
            >
             Contact
            </Link>
          </li>
        
        </ul>

        <div className="flex items-center  gap-x-3">
          {/* Mobile device navbar */}
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden order-2"
          >
            {toggleMenu === true ? (
              <HiMenuAlt1 className="lg:hidden  text-3xl font-semibold text-[#18233B] cursor-pointer" />
            ) : (
              <IoClose className="lg:hidden text-3xl text-[#18233B] cursor-pointer" />
            )}

            <ul
              className={`mt-[165px] absolute w-full h-[330px] rounded-md top-full right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#FFD6CD] backdrop-blur-3xl text-[#18233B] p-8 z-50 flex flex-col items-center  gap-y-4 text-xl font-medium lg:hidden ${toggleMenu ? "hidden" : ""
                }`}
            >
                 <li>
            <Link hto='/' smooth={true} offset={-90}  className=" focus:text-[#FE5B38] text-[#0B0951] active:text-[#FE5B38]">
              Home
            </Link>
          </li>
         
          <li>
            <Link
               to="discover" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] text-[#0B0951] active:text-[#FE5B38]"
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              to="destination" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] text-[#0B0951] active:text-[#FE5B38]"
            >
             Destination
              
            </Link>
          </li>
          <li>
            <Link
               to="about" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] text-[#0B0951] active:text-[#FE5B38]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="contact" smooth={true} offset={-90} 
              className="focus:text-[#FE5B38] text-[#0B0951] active:text-[#FE5B38]"
            >
             Contact
            </Link>
          </li>
          {/* Navbar button */}
         <div className='flex'> 
         <div className=" gap-x-9 pt-[10px] text-lg font-medium">
          <Link
                  href=""
                  className="text-lg  hover:text-[#FE5B38] text-[#0B0951] font-normal"
                >
                 Login
                </Link>
          </div>

                <div className=" ml-4" >
                  <button className="bg-[#FE5B38]  hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] btn rounded-lg  md:w-[137px] w-[110px] md:h-[48px] h-[20px] text-white border-0">
                   
                  Signup
                  </button>
                </div>
         </div>
            </ul>
            
          </div>

          {/* Navbar button */}
          <div className=" gap-x-9 text-lg font-medium invisible lg:visible ">
          <Link
                  href=""
                  className="text-base  pt-1 hover:text-[#FE5B38] text-[#0B0951] font-normal"
                >
                  Login
                </Link>
          </div>

                <div className=" ml-4 invisible lg:visible" >
                  <button className="bg-[#FE5B38] hover:border-[#FE5B38] hover:border hover:text-[#FE5B38] hover:bg-[#FFFF] btn rounded-lg  md:w-[137px] md:h-[48px] text-white border-0">
                   
                  Signup
                  </button>
                </div>
        </div>
      </nav>
    </div>
  </div>
  //Navbar code end
  );
};

export default Navbar;