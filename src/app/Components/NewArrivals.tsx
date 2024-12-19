import React from 'react';
import Image from 'next/image';
import BlackT from "@/app/Assets/black.png";
import BlueJeans from "@/app/Assets/jeans.png";
import Checkshirt from "@/app/Assets/check.png";
import OrangeTshirt from "@/app/Assets/shirt.png";
import Stars from "@/app/Assets/Frame 59.png";
import Rating from "@/app/Assets/Frame 40.png";

const NewArrivals = () => {
  return (
    <div className='w-full h-auto py-10 mx-auto'>
      {/* Heading */}
      <div className='w-[269px] md:w-[403px] mx-auto text-center'>
        <h1 className='font-bold leading-9 text-[32px] md:text-[48px] md:leading-[57.6px] font-[Integral CF]'>
          NEW ARRIVALS
        </h1>
      </div>

      {/* Images Grid */}
      <div className='flex flex-wrap justify-center gap-4 my-10'>
        {/* Image 1 */}
        <div className='w-[198px] flex flex-col items-center md:w-[296px]'>
          <Image
            src={BlackT}
            alt="Black T-shirt"
            className='w-full h-auto'
          /><br />
            <span className='block ml-4  font-bold font-[Satoshi] text-[14px] text-nowrap md:hidden'>T-SHIRT WITH TAPE DETAILS
            
            </span>
            <Image src={Rating} alt="Rating" className='block md:hidden' /> <p className='block font-bold mr-20 font-[Satoshi] text-[14px]  flex-1 items-start md:hidden'> $120</p>
          <span className='hidden md:block md:my-0 text-start w-[180px] text-[16px] font-bold font-[Satoshi] leading-[21.6] md:w-[225px] md:h-[27px] md:text-[20px] md:leading-[27px] text-nowrap mr-12'>
            T-SHIRT WITH TAPE DETAILS <br /> <br />
            $120
          </span>
          <Image src={Rating} alt="Rating" className='hidden md:block mr-32 ' />
         
        </div>

        {/* Image 2 */}
        <div className='w-[198px] flex flex-col items-center md:w-[296px]'>
          <Image
            src={BlueJeans}
            alt="Blue Jeans"
            className='w-full h-auto'
          /> <br />
         
          <span className='block font-bold font-[Satoshi] text-[14px] md:hidden'>SKINNY FIT JEANS </span>
          <Image src={Stars} alt="Rating" className='block md:hidden' /> <p className='block font-bold mr-14 font-[Satoshi] text-[14px]  flex-1 items-start md:hidden'> $240 </p>
          <span className='hidden md:block text-start w-[180px] text-[16px] font-bold font-[Satoshi] leading-[21.6] md:w-[225px] md:h-[27px] md:text-[20px] md:leading-[27px]'>
            SKINNY FIT JEANS<br />  <br /> $240
          </span>
          <Image src={Stars} alt="Stars" className='hidden md:block mr-20 '/>
        </div>

        {/* Image 3 (Hidden on Mobile) */}
        <div className='hidden md:block w-[296px]  flex-col items-center'>
          <Image
            src={Checkshirt}
            alt="Check Shirt"
            className='w-full h-auto'
          /><br />
          <span className='hidden md:block font-bold font-[Satoshi] w-[225px] h-[27px] text-start md:text-[20px] md:leading-[27px]'>
            CHECKERED SHIRT <br />< br /> $180
          </span>
          <Image src={Rating} alt="Rating" className='hidden md:block '  />
        </div>

        {/* Image 4 (Hidden on Mobile) */}
        <div className='hidden md:block w-[296px] flex-col items-center'>
          <Image
            src={OrangeTshirt}
            alt="Orange T-shirt"
            className='w-full h-auto'
          /> <br />
          <span className='hidden md:block font-bold font-[Satoshi] w-[225px] h-[27px] text-start md:text-[20px] md:leading-[27px] text-nowrap'>
            SLEEVE STRIPED T-SHIRT <br />< br /> $130
          </span>
          <Image src={Rating} alt="Rating"className='hidden md:block mr-44 ' />
        </div>
      </div>

      {/* Button */}
      <div className='flex justify-center'>
        <button className='w-[380px] h-[50px] md:w-[150px] md:h-[50px] hover:scale-105 hover:bg-black hover:text-white text-[16px] md:text-[16px] leading-[21px] md:leading-[21px] border border-[#0000001A] rounded-full font-medium font-[Satoshi]'>
          View All
        </button>
      </div>

      <br />
      <hr />
    </div>
  );
}

export default NewArrivals;
