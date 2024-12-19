import React from 'react';
import Image from 'next/image';
import cross from "@/app/assets/cross.png"
const Getfavour = () => {
  return (
    
    <div className="h-[34px] bg-black sm:h-[38px] grid">
      <div className="grid grid-cols-10 items-center ">
        <div></div>
        <h1 className=" h-[16px] col-span-8 text-center  sm:h-[19px] sm:top-[9px] sm:left-[544px] font-normal text-[12px] leading-[16.2px] text-white  ">
          Sign up and get 20% off to your first order.{" "}
          <span className="font-medium text-[10px] leading-[16.2px] underline  sm:text-[14px] sm:leading-[18.9px]">
            Sign Up Now
          </span>
          
        </h1>
        <Image src={cross} alt="cross" className='hidden sm:grid' />
      </div>
    </div>
    
  
  );
}

export default Getfavour;
