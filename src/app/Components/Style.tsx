import React from 'react';
import Image from 'next/image';
import Casual from "@/app/Assets/image 11.png"
import Formal from "@/app/Assets/image 13.png"
import Party from "@/app/Assets/image 12.png"
import Gym from "@/app/Assets/image 14.png"
const Style = () => {
  return (
    <div className='mx-auto w-[358px] h-auto md:w-[1239px] bg-[#F0F0F0] p-4 md:p-8 border-[1px] rounded-2xl'>
    {/* Heading */}
    <div className='w-[269px] md:w-[403px] mx-auto text-center text-black'>
      <h1 className='font-bold leading-9 text-[32px] md:text-[48px] md:leading-[57.6px] font-[Integral CF] md:text-nowrap'>
        BROWSE BY DRESS STYLE
      </h1>
    </div>
  
    {/* Image Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10'>
      {/* Casual Image */}
      <div className='w-full h-auto'>
      <div className="relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Satoshi] text-black font-bold text-[36px] px-4">
  Casual
</div>

        <Image 
          src={Casual} 
          alt="Casual Wear" 
          className='w-full h-[300px] md:h-[400px] object-cover rounded-2xl' />
          {/* <h1 className='text-[36px] leading-[48.6px] font-[Satoshi] font-bold text-black' >Casual</h1> */}
      </div>
  
      {/* Formal Image (Expanded Width) */}
      <div className='w-full h-auto md:w-[580px]'>
      <div className="relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Satoshi] text-black font-bold text-[36px] px-4">
      Formal
</div>
        <Image 
          src={Formal} 
          alt="Formal Wear" 
          className='w-full h-[300px] md:h-[400px] object-cover rounded-2xl' />
      </div>
  
      {/* Party Image (Expanded Width) */}
      <div className='w-full h-auto'>
      <div className="relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Satoshi] text-black font-bold text-[36px] px-4">
      Party
</div>
        <Image 
          src={Party} 
          alt="Party Wear" 
          className='w-full h-[300px] md:h-[400px] object-cover rounded-2xl' />
      </div>
  
      {/* Gym Image */}
      <div className='w-full h-auto'>
      <div className="relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Satoshi] text-black font-bold text-[36px] px-4">
      GYM
</div> 
        <Image 
          src={Gym} 
          alt="Gym Wear" 
          className='w-full h-[300px] md:h-[400px] object-cover rounded-2xl' />
      </div>
    </div>
  </div>
  
    
        
  

  )}
  export default Style