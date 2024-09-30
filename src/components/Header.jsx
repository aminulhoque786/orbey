import React, { useState } from 'react';
import Container from './Container';
import orebi from "../assets/logo.png";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  let [show, setShow] = useState(false);
  
  return (
    <Container className="relative flex flex-col z-10 lg:flex-row py-5">
      {/* Logo */}
      <div className='w-2/4'>
        <img src={orebi} alt="Logo" />
      </div>

      {/* Navigation for larger screens */}
      <div className='hidden lg:block w-3/4'>
        <ul className='flex font-semibold items-center text-[#979797] gap-6'>
          <li className='hover:text-black hover:font-semibold'>Home</li>
          <li className='hover:text-black hover:font-semibold'>Shop</li>
          <li className='hover:text-black hover:font-semibold'>About</li>
          <li className='hover:text-black hover:font-semibold'>Contact</li>
          <li className='hover:text-black hover:font-semibold'>Journal</li>
        </ul>
      </div>

      {/* Toggle Button for small screens */}
      <div className="lg:hidden flex justify-between items-center w-full">
        <div className="ml-auto" onClick={() => setShow(!show)}>
          {show ? <RxCross2 /> : <HiOutlineBars3BottomLeft />}
        </div>
      </div>

      {/* Toggle Navigation for small screens */}
      <div className={`lg:hidden absolute top-[100%] left-0 w-full bg-opacity-80 bg-[#979797] transition-all duration-500 ease-in-out ${show ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <ul className='flex flex-col font-semibold items-center gap-6 py-4'>
          <li className='hover:text-white duration-500 ease-in-out hover:font-semibold'>Home</li>
          <li className='hover:text-white duration-500 ease-in-out hover:font-semibold'>Shop</li>
          <li className='hover:text-white duration-500 ease-in-out hover:font-semibold'>About</li>
          <li className='hover:text-white duration-500 ease-in-out hover:font-semibold'>Contact</li>
          <li className='hover:text-white duration-500 ease-in-out hover:font-semibold'>Journal</li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
