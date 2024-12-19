import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import Image from 'next/image';
import social from "@/app/Assets/Social.png";
import Gpay from "@/app/Assets/G Pay.png";
import Paypal from "@/app/Assets/Paypal.png";
import Mastercard from "@/app/Assets/Mastercard.png";
import Visa from "@/app/Assets/Visa.png";
import Apple from "@/app/Assets/Apple.png";

export default function Footer() {
  return (
    <div className='w-full h-auto bg-[#0000001A]'>
      {/* Email Subscription Section */}
      <div className='w-full max-w-[1240px] md:h-[180px] bg-black border-[1px] border-black rounded-2xl mx-auto p-6 mt-10 relative bottom-10 md:mt-20'>
        <div className='text-start md:ml-20'>
          <h1 className='font-bold text-[24px] md:text-[32px] lg:text-[48px] leading-8 md:leading-[57.6px] text-white font-[Integral CF]'>
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>
        </div>

        <div className='flex flex-col my-6 justify-center items-center gap-4 md:relative bottom-32 left-80'>
          {/* Email Input */}
          <div className='flex items-center w-full max-w-[358px] bg-white border-[1px] border-gray-300 rounded-full px-4'>
            <TfiEmail className='text-gray-400 text-xl mr-2' />
            <input
              type='email'
              placeholder='Enter your email address'
              className='flex-1 h-[48px] bg-transparent text-[#000000] outline-none text-sm md:text-base text-center'
            />
          </div>

          {/* Secondary Input */}
          <div className='w-full max-w-[358px]'>
            <input
              type='text'
              placeholder='Subscribe to Newsletter'
              className='w-full h-[48px] bg-white border-[1px] border-gray-300 rounded-full px-4 text-black text-center text-sm md:text-base'
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className='bg-[#F0F0F0] text-black py-8 px-6'>
        <div className='flex flex-col md:flex-row justify-between items-start mx-10 my-6 space-y-6 md:space-y-0'>
          {/* SHOP.CO Content */}
          <div>
            <h1 className='font-[Integral CF] font-bold text-[24px] md:text-[32px] leading-none'>
              SHOP.CO
            </h1>
            <p className='font-medium text-[14px] leading-[22px] text-[#00000099] mt-2 font-[Satoshi]'>
              We have clothes that suit your style and <br /> 
              which you’re proud to wear. From 
              women to men.
            </p>
            <Image src={social} alt='Social Media Links' className='mt-4' />
          </div>

          {/* Footer Links */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full'>
            {/* Column 1 */}
            <div className='md:mx-auto'>
              <h1 className='text-base font-semibold mb-4'>COMPANY</h1>
              <ul className='space-y-2 text-sm text-[#00000099] font-[Satoshi]'>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h1 className='text-base font-semibold mb-4'>HELP</h1>
              <ul className='space-y-2 text-sm text-[#00000099] font-[Satoshi]'>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h1 className='text-base font-semibold mb-4'>FAQ</h1>
              <ul className='space-y-2 text-sm text-[#00000099] font-[Satoshi]'>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h1 className='text-base font-semibold mb-4'>RESOURCES</h1>
              <ul className='space-y-2 text-sm text-[#00000099] font-[Satoshi]'>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-8 flex flex-wrap justify-between items-center text-xs text-[#00000099] border-t border-[#0000001A] pt-4'>
          {/* Country and Copyright */}
          <div className='flex items-center gap-2 mx-auto mb-4 md:mb-0 md:ml-10'>
            <span>Shop.co © 2000-2023, All Rights Reserved</span>
          </div>

          {/* Payment Icons */}
          <div className='flex gap-4 mx-auto md:mx-32'>
            <Image src={Visa} alt='Visa' />
            <Image src={Mastercard} alt='Mastercard' />
            <Image src={Paypal} alt='Paypal' />
            <Image src={Apple} alt='Apple Pay' />
            <Image src={Gpay} alt='Google Pay' />
          </div>
        </div>
      </div>
    </div>
  );
}
