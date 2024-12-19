import React from 'react';
import Image from 'next/image';
import Green from "@/app/Assets/green.png";
import Orange from "@/app/Assets/orange.png";
import Shorts from "@/app/Assets/short.png";
import BlackJeans from "@/app/Assets/jeans.png";
import Fourstar from "@/app/Assets/Frame 41.png";
import Threestars from "@/app/Assets/Frame 40 (1).png";
import Fivestar from "@/app/Assets/Frame 35.png";
import Four from "@/app/Assets/Frame 39.png";
const Topselling = () => {
  return (
    <div className='w-full h-auto py-10 mx-auto'>
      {/* Heading */}
      <div className='w-[269px] md:w-[403px] mx-auto text-center'>
        <h1 className='font-bold leading-9 text-[32px] md:text-[48px] md:leading-[57.6px] font-[Integral CF]'>
        Top selling
        </h1>
      </div>

      {/* Images Grid */}
      <div className='flex flex-wrap justify-center gap-4 my-10'>
        {/* Image 1 */}
        <div className='w-[198px] flex flex-col items-center md:w-[296px]'>
          <Image
            src={Green}
            alt="Black T-shirt"
            className='w-full h-auto'
          /><br />
            <span className='block   font-bold font-[Satoshi] text-[14px] text-nowrap md:hidden'>VERTICAL STRIPED SHIRT <br />    
            </span>
            <Image src={Fivestar} alt="Rating" className='block md:hidden' />
            <p className='block  mr-24 font-bold font-[Satoshi] text-[16px] text-start md:hidden'>$212</p>
          <span className='hidden md:block md:my-0 text-start w-[180px] text-[16px] font-bold font-[Satoshi] leading-[21.6] md:w-[225px] md:h-[27px] md:text-[20px] md:leading-[27px] text-nowrap mr-12'>
          VERTICAL STRIPED SHIRT <br /> <br />
            $212
          </span>
          <Image src={Fivestar} alt="Rating" className='hidden md:block mr-32 ' />
         
        </div>

        {/* Image 2 */}
        <div className='w-[198px] flex flex-col items-center md:w-[296px]'>
          <Image
            src={Orange}
            alt="Blue Jeans"
            className='w-full h-auto'
          /> <br />
         
          <span className='block  font-bold font-[Satoshi] text-[14px] text-nowrap  md:hidden'>COURAGE GRAPHIC T-SHIRT</span>
          <Image src={Four} alt="Rating" className='block mr-8 md:hidden' />
          <span className='hidden md:block text-start w-[180px] text-[16px] font-bold font-[Satoshi] leading-[21.6] md:w-[225px] md:h-[27px] md:text-[18px] md:leading-[27px] text-nowrap'>
          COURAGE GRAPHIC T-SHIRT<br />  <br /> $145
          </span> <p className='block font-bold mr-24 font-[Satoshi] text-[16px]  flex-1 items-start md:hidden'> $145 </p>
          <Image src={Four} alt="Stars" className='hidden md:block mr-20 '/>
        </div>

        {/* Image 3 (Hidden on Mobile) */}
        <div className='hidden md:block w-[296px]  flex-col items-center'>
          <Image
            src={Shorts}
            alt="Check Shirt"
            className='w-full h-auto'
          /><br />
          <span className='hidden md:block font-bold font-[Satoshi] w-[225px] h-[27px] text-start md:text-[18px] md:leading-[27px] text-nowrap ml-2'>
          LOOSE FIT BERMUDA SHORTS<br />< br /> $80
          </span>
          <Image src={Threestars} alt="Rating" className='hidden md:block '  />
        </div>

        {/* Image 4 (Hidden on Mobile) */}
        <div className='hidden md:block w-[296px] flex-col items-center'>
          <Image
            src={BlackJeans}
            alt="Orange T-shirt"
            className='w-full h-auto'
          /> <br />
          <span className='hidden md:block font-bold font-[Satoshi] w-[225px] h-[27px] text-start md:text-[20px] md:leading-[27px] text-nowrap ml-2'>
          FADED SKINNY JEANS<br />< br /> $210
          </span>
          <Image src={Fourstar} alt="Rating"className='hidden md:block mr-44 ' />
        </div>
      </div>

      {/* Button */}
      <div className='flex justify-center'>
        <button className='w-[380px] h-[50px] md:w-[150px] md:h-[50px] hover:scale-105 hover:bg-black hover:text-white text-[16px] md:text-[16px] leading-[21px] md:leading-[21px] border border-[#0000001A] rounded-full font-medium font-[Satoshi]'>
          View All
        </button>
      </div>

      <br />
      
    </div>
  );
}



export default Topselling;