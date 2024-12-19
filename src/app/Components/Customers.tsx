import React from 'react';
import Image from 'next/image';
import Feedback from "@/app/Assets/Frame 10 (1).png";
import RightTick from "@/app/Assets/Vector (7).png";

const Customers = () => {
  return (
    <div className='w-full h-auto py-10 px-4 md:px-20'>
      {/* Heading */}
      <div className='w-full text-start mb-8 md:ml-20'>
        <h1 className='font-bold text-[32px]  md:text-[48px] leading-8 md:leading-[57.6px]  text-black font-[Integral CF]'>
          OUR HAPPY CUSTOMERS
        </h1>
      </div>

      {/* Reviews Section */}
      <div className='flex flex-col md:flex-row md:space-x-6 justify-center items-centre mr-8'>
        {/* Review 1 */}
        <div className='border-[1px] mx-auto border-gray-300 rounded-xl p-4 w-full max-w-[300px] md:max-w-[350px] md:mx-0 flex-col items-center'>
          <Image src={Feedback} alt="Customer Feedback" />
          <div className='flex items-center space-x-2 my-3'>
            <h1 className='font-bold text-[20px] leading-6 font-[Satoshi]'>Sarah M.</h1>
            <Image src={RightTick} alt="Verified" className='w-4 h-4' />
          </div>
          <p className='font-medium text-[12px] leading-[22px] text-[#00000099] text-center mt-2'>
            "I'm blown away by the quality and style of the clothes I received from Shop.co. 
            From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
          </p>
        </div>

        {/* Review 2 */}
        <div className='hidden md:block border-[1px] border-gray-300 rounded-xl p-4 w-full max-w-[300px] md:max-w-[350px]  flex-col items-center mt-6 md:mt-0'>
          <Image src={Feedback} alt="Customer Feedback" />
          <div className='flex items-center space-x-2  my-3'>
            <h1 className='font-bold text-[20px] leading-6 font-[Satoshi]'>Alex K.</h1>
            <Image src={RightTick} alt="Verified" className='w-4 h-4' />
          </div>
          <p className='font-medium text-[12px] leading-[22px] text-[#00000099] text-center mt-2'>
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
            The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
          </p>
        </div>

        {/* Review 3 */}
        <div className='hidden md:block border-[1px] border-gray-300 rounded-xl p-4 w-full max-w-[300px] md:max-w-[350px] flex-col items-center mt-6 md:mt-0'>
          <Image src={Feedback} alt="Customer Feedback"/>
          <div className='flex items-center space-x-2 my-3'>
            <h1 className='font-bold text-[20px] leading-6 font-[Satoshi]'>James L.</h1>
            <Image src={RightTick} alt="Verified" className='w-4 h-4' />
          </div>
          <p className='font-medium text-[12px] leading-[22px] text-[#00000099] text-center mt-2'>
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. 
            The selection of clothes is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
