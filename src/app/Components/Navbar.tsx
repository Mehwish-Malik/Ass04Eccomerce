import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import Vector from "@/app/Assets/Vector (4).png"

const Navbar = () => {
  return (
    <div className="w-full bg-white flex justify-center items-start">
      {/* Navbar Container */}
      <div className="w-full max-w-[1440px] flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 md:space-x-0">
          {/* Hamburger Menu - Visible on Mobile Only */}
          <GiHamburgerMenu className="text-[20px] md:hidden cursor-pointer" />
          <div className="font-[Integral CF] font-bold text-[24px] md:text-[32px] leading-none text-black">
            SHOP.CO
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 items-center font-medium ml-8">
          <ul className="flex space-x-6 items-center font-[Satoshi] text-black list-none">
            <li className="font-normal text-[14px] md:text-[16px] leading-[21.6px] flex items-center">
              Shop <RiArrowDropDownLine className="ml-1" />
            </li>
            <li className="font-normal text-[14px] md:text-[16px] leading-[21.6px]">On Sale</li>
            <li className="font-normal text-[14px] md:text-[16px] leading-[21.6px]">New Arrivals</li>
            <li className="font-normal text-[14px] md:text-[16px] leading-[21.6px]">Brands</li>
          </ul>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 relative">
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-[200px] lg:w-[400px] h-[40px] bg-[#F0F0F0] border border-gray-300 rounded-[62px] relative">
            <BiSearch className="absolute left-3 text-[20px] text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-full pl-10 pr-4 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none text-[#00000066] text-base font-normal font-[Satoshi]"
            />
          </div>

          {/* Search Icon - Mobile Only */}
          <BiSearch className="text-[20px] md:hidden cursor-pointer" />

          {/* Cart Icon */}
          <IoCartOutline className="text-[20px] md:text-[24px] cursor-pointer" />

          {/* Custom Vector Icon */}
          <Image src={Vector} alt="Cart Vector"  />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
