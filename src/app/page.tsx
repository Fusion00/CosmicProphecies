import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div className="h-[33.5rem] w-full relative overflow-hidden text-white bg-black">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted
        >
          <source src='/space.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Text Layer */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div></div>
          <div className="">
            <img src='Zodiac.png' className='h-72 mob-md:h-[22rem] w-72 mob-md:w-[22rem] animate-rotate-slow blur-sm lg:blur-none'></img>
          </div>
        </div>
      </div>
    </div>
  )
};


export default Home; 
