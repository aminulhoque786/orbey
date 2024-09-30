import React from 'react';
import Container from './Container';
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#F5F5F3]'>
      <Container className="pt-20">
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
          <div className='flex flex-col lg:flex-row w-full lg:w-3/4'>
            <div className='w-full lg:w-1/6'>
              <h2 className='font-dm text-[16px] font-bold pl-3'>MENU</h2>
              <ul className='text-black flex flex-col font-semibold items-start lg:items-center lg:text-[#979797] gap-4 mt-4'>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Home</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Shop</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>About</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Contact</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Journal</li>
              </ul>
            </div>
            <div className='w-full lg:w-1/4'>
              <h2 className='font-dm text-[16px] font-bold pl-3 lg:pl-14'>SHOP</h2>
              <ul className='text-black flex flex-col font-semibold items-start lg:items-center lg:text-[#979797] gap-4 mt-4'>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>category-1</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>category-2</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>category-3</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>category-4</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>category-5</li>
              </ul>
            </div>
            <div className='w-full lg:w-1/4'>
              <h2 className='pl-3 lg:pl-20 font-dm text-[16px] font-bold text-[#262626]'>HELP</h2>
              <ul className='text-black flex flex-col font-semibold items-start lg:items-center lg:text-[#979797] gap-4 mt-4'>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Privacy Policy</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Terms and Conditions</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Special E-Shop</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Shipping</li>
                <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Secure Payments</li>
              </ul>
            </div>
            <div className='w-full lg:w-2/6'>
              <h2 className='pl-3 font-bold font-dm text-[16px]'>(052) 611-5711</h2>
              <h2 className='pl-3 font-bold font-dm text-[16px]'>company@domain.com</h2>
              <h4 className='pl-3 lg:pl-0 lg:text-[#979797] font-semibold'>575 Crescent Ave. Quakertown, PA 18951</h4>
            </div>
          </div>

          <div className='w-full lg:w-1/6 flex justify-center lg:justify-start mt-4 lg:mt-0'>
            <img src={logo} alt="Logo" className='lg:w-2/3' />
            
          </div>
        </div>
        


    <div className="flex flex-col md:flex-row justify-between items-center pt-10 px-5">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <FaFacebook className="text-lg md:text-xl" />
        <FaLinkedin className="text-lg md:text-xl" />
        <FaInstagramSquare className="text-lg md:text-xl" />
      </div>
      <div className="font-dm font-semibold text-sm md:text-base">
        <h4 className="text-center md:text-left">
          2020 Orebi Minimal eCommerce Figma Template by Aminul
        </h4>
      </div>
    </div>
  


      </Container>
    </div>
  );
}

export default Footer;
