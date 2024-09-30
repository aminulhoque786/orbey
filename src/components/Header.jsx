import React, { useState } from 'react';
import Container from './Container';
import orebi from "../assets/logo.png";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  let [show, setShow] = useState(false);
  
  return (
    <Container className="flex flex-col lg:flex-row py-5">
      {/* Logo */}
      <div className='w-2/4'>
        <img src={orebi} alt="Logo" />
      </div>

      {/* Navigation */}
      <div className='hidden lg:block w-3/4'>
        <ul className='flex font-semibold items-center text-[#979797] gap-6'>
          <li className='hover:text-black hover:font-semibold'>Home</li>
          <li className='hover:text-black hover:font-semibold'>Shop</li>
          <li className='hover:text-black hover:font-semibold'>About</li>
          <li className='hover:text-black hover:font-semibold'>Contact</li>
          <li className='hover:text-black hover:font-semibold'>Journal</li>
        </ul>
      </div>

    
      <div className="lg:hidden  flex justify-between items-center w-full">
      
        <div className="ml-auto" onClick={() => setShow(!show)}>
          {show ? <RxCross2 /> : <HiOutlineBars3BottomLeft />}
        </div>
      </div>

    
      <div className={`lg:hidden  w-full ${show ? "h-[500px] opacity-100" : "h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
        <ul className='bg-[#979797] text-black  flex flex-col font-semibold items-center lg:text-[#979797] gap-6 mt-4'>
          <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Home</li>
          <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Shop</li>
          <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>About</li>
          <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Contact</li>
          <li className='hover:text-white duration-500 ease-in-out lg:hover:text-black hover:font-semibold'>Journal</li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
