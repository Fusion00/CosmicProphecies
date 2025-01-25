"use client";

import React, { useEffect, useState } from 'react'
import Navbar2 from './Navbar2';

const Navbar: React.FC = () => { 
    const [showNavbar2, setShowNavbar2] = useState<boolean>(false);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 510) {
      setShowNavbar2(true); // Show navbar2 when scrolling down
    } else {
      setShowNavbar2(false); // Show navbar1 when at the top
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 822); // Check if the screen width is less than 768px
    };

    // Initialize on component mount
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
        {isMobileView ? (
        <Navbar2 />
      ) : (
        <>

<div className="">
        <div className="bg-black py-4 px-16 xl:px-28 bg-[url('/spacefooter.jpg')]">
      <div className= "gap-x-5 items-center grid grid-cols-7"> {/*-grid-*/}
        <div className='border-0 border-white row-span-2 items-center flex justify-center'>
        <img src='logo.png' className='lg:h-28 h-24 lg:w-28 w-24'/>
        </div>
      
      <div className="text-red-600 font-felix text-3xl lg:text-5xl flex-grow border-0 border-white col-span-4 mt-6">COSMIC PROPHECIES</div>
      <div className="border-0 border-white col-span-2 flex justify-end">
      <button className='w-64 h-12 lg:h-16 bg-[#D0D803] rounded-full text-xl xl:text-2xl font-consolas hover:bg-[#F6FF07] hover:underline shadow-lg shadow-[#F6FF07]/50 transition-all'>
        Book a Session
      </button>

      </div>
      
      <div className=' bg-white h-[1px] col-span-6'/>{/*-----line---------  */}
      </div>
      <div className="grid grid-cols-7 justify-center gap-11 pl-32 lg:pl-40 xl:pl-48">
        <div className="flex justify-start gap-4 lg:gap-9 text-white col-span-5 text-base lg:text-lg font-times">
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer ">Prophecies</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Services</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Store</div>
          <div className="border-0 border-white hidden"><img src='logo.png' className='lg:h-16 h-14 lg:w-16 w-14'/></div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Blogs</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">About us</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Contacts</div>
        </div>
        <div className="flex justify-center ml-5 gap-6 text-white col-span-2 text-base lg:text-lg "> {/*--flex--*/}
        <i className="ri-facebook-fill hover:text-[#F6FF07] hover:border-2 hover:border-white rounded-full"></i>
        <i className="ri-instagram-fill hover:text-[#F6FF07] hover:border-2 hover:border-white rounded-full"></i>
        <i className="ri-youtube-fill hover:text-[#F6FF07] hover:border-2 hover:border-white rounded-full"></i>
        <i className="ri-twitter-x-fill hover:text-[#F6FF07] hover:border-2 hover:border-white rounded-full"></i>

        </div>
      </div>
      
      
     </div>
     <div
        className="absolute h-4 lg:h-8 w-full bg-black -mt-1 bg-[url('/spacefooter.jpg')]"
        style={{
          clipPath:
            'polygon(2% 47%, 5% 75%, 16% 118%, 29% 63%, 32% 45%, 38% 33%, 54% 50%, 57% 51%, 70% 26%, 88% 21%, 99% 60%, 120% 5%, 0% 5%)',
        }}
      ></div>
        </div>

      {/* ----scroll navbar------ */}

      {showNavbar2 && (
        <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-black py-4 px-16 xl:px-28 bg-[url('/spacefooter.jpg')]">
          <div className=" justify-center flex ">
              <div className="flex items-center gap-8 lg:gap-16 text-white  text-base lg:text-lg font-times">
              <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer ">Prophecies</div>
              <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Services</div>
              <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Store</div>
              <div className="border-0 border-white"><img src='logo.png' className='lg:h-16 h-14 lg:w-16 w-14'/></div>
              <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Blogs</div>
              <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">About us</div>
              <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Contacts</div>
              </div>
              
          </div>
  
        </div>
        <div
          className="h-4 lg:h-8 w-auto bg-black -mt-1 bg-[url('/spacefooter.jpg')]"
          style={{
            clipPath:
              'polygon(2% 47%, 5% 75%, 16% 118%, 29% 63%, 32% 45%, 38% 33%, 54% 50%, 57% 51%, 70% 26%, 88% 21%, 99% 60%, 120% 5%, 0% 5%)',
          }}
        ></div>
  
        </div>
      )}


        </>
        

      )}
    </div>
    
  )
}

export default Navbar;