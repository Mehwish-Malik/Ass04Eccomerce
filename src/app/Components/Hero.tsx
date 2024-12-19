import React from 'react';
import Image from 'next/image';
import Style from "@/app/Assets/Rectangle 2.png";
import Vector from "@/app/Assets/Vector.png";
import Ver from "@/app/Assets/Vector (1).png";
import Gucci from "@/app/Assets/Vector (5).png";
import Prada from "@/app/Assets/prada-logo-1 1 (1).png";
import CK from "@/app/Assets/calvin.png";
import Zara from "@/app/Assets/zara-logo-1 1.png";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-[390px] h-[853px] md:w-full bg-[#F2F0F1] flex justify-center items-center flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 px-4 md:px-16 py-8">
          <h1 className="font-[Integral CF] font-bold text-[32px] sm:text-[40px] lg:text-[52px] xl:text-[64px] leading-tight text-black text-nowrap">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="mt-4 text-[14px] sm:text-[16px] text-[#00000099] leading-[22px] sm:leading-[28px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <div className="mt-6">
            <button className="w-[358px] h-[52px] sm:w-[210px]  sm:h-[52px] flex items-center justify-center rounded-[62px] bg-black text-white hover:bg-gray-800">
              Shop Now
            </button>
          </div>
          {/* Stats Section */}
          <div className="mt-8 flex flex-nowrap gap-8 justify-between max-w-[400px]">
            <div className="text-center">
              <p className="font-bold text-[32px] sm:text-[40px] text-black">200+</p>
              <p className="text-[12px] sm:text-[16px] text-[#00000099] text-nowrap">International Brands</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] sm:text-[40px] text-black">2,000+</p>
              <p className="text-[12px] sm:text-[16px] text-[#00000099] text-nowrap">High-Quality Products</p>
            </div>
            <div className="my-2 md:text-center">
              <p className="font-bold text-[32px] sm:text-[40px] text-black">30,000+</p>
              <p className="text-[12px] sm:text-[16px] text-[#00000099]">Happy Customers</p>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="w-[390px] h-[448px] relative top-8 md:relative  md:w-full max-h-[900px] flex items-center justify-center mr-40">
          <Image
            src={Style}
            alt="Style Image"
            className="w-full h-[400px] object-cover"
            priority
          />
          <Image
            src={Vector}
            alt="Decorative Vector"
            className="absolute top-0 right-0 w-[50px] sm:w-[100px] h-[50px] sm:h-[100px]"
          />
          <Image
            src={Vector}
            alt="Decorative Vector"
            className="absolute left w-[50px] sm:w-[100px] h-[50px] sm:h-[100px]"
          />
        </div>
      </div>
      {/* Brands Section */}
      <div className="w-full bg-black py-4">
        <div className="flex flex-wrap justify-center gap-6 md:space-x-10">
          <Image src={Ver} alt="Brand 1" className="h-[30px] sm:h-[50px]" />
          <Image src={Zara} alt="Zara Logo" className="h-[30px] sm:h-[50px]" />
          <Image src={Gucci} alt="Gucci Logo" className="h-[30px] sm:h-[50px]" />
          <Image src={Prada} alt="Prada Logo" className="h-[30px] sm:h-[50px]" />
          <Image src={CK} alt="Calvin Klein Logo" className="h-[30px] sm:h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
