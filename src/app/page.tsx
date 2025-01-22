import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-black py-12 px-16 xl:px-28 bg-[url('/spacefooter.jpg')]">
      <div className="gap-x-5 items-center grid grid-cols-7">
        <div className='border-0 border-white row-span-2 items-center flex justify-center'>
        <img src='logo.png' className='lg:h-28 h-24 lg:w-28 w-24'/>
        </div>
      
      <div className="text-red-600 font-felix text-3xl lg:text-5xl flex-grow border-0 border-white col-span-4 mt-6">COSMIC PROPHECIES</div>
      <div className="border-0 border-white col-span-2 flex justify-end">
        <button className='w-64 h-12 lg:h-16 bg-[#D0D803] rounded-full text-xl xl:text-2xl font-consolas hover:bg-[#F6FF07] hover:underline'>Book a Session</button>
      </div>
      
      <div className=' bg-white h-[1px] col-span-6'></div>
      </div>
      <div className="grid grid-cols-7 justify-center gap-11 pl-32 lg:pl-40 xl:pl-48">
        <div className="flex justify-start gap-4 lg:gap-9 text-white col-span-5 text-sm lg:text-base">
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer ">Prophecies</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Services</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Store</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Blogs</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">About us</div>
          <div className="hover:text-[#F6FF07] hover:underline hover:underline-offset-[20px] hover:decoration-red-500 hover:cursor-pointer">Contacts</div>
        </div>
        <div className="flex justify-center ml-5 gap-6 text-white col-span-2 ">
        <i className="ri-facebook-fill hover:text-red-500 hover:border-2 hover:border-white rounded-full"></i>
        <i className="ri-instagram-fill hover:text-red-500 hover:border-2 hover:border-white rounded-full"></i>
        <i className="ri-youtube-fill hover:text-red-500 hover:border-2 hover:border-white rounded-full"></i>
        <i className="ri-twitter-x-fill hover:text-red-500 hover:border-2 hover:border-white rounded-full"></i>

        </div>
      </div>
      
      
     </div>
    </div>
    
  )
}

export default page
