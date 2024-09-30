import React, { useState } from "react";
import Container from "./Container";
import { FaBarsStaggered } from "react-icons/fa6";
import Flex from "./Flex";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  return (
    <div className="bg-[#D8D8D8] ">
      <Container className="lg:py-4">
        <Flex className="flex-col lg:flex-row lg:items-center pr-6">
          
          <div className="flex items-center   gap-3 w-full lg:w-1/4 mb-4 lg:mb-0 relative">
            <FaBarsStaggered 
              className="cursor-pointer font-dm" 
              onClick={handleCategoryToggle} 
            />
            <p 
              className="cursor-pointer" 
              onClick={handleCategoryToggle}
            >
              Shop By Category
            </p>

          
            {isCategoryOpen && (
              <ul className="z-10 bg-black opacity-60 text-[15px] font-semibold text-white absolute top-12 left-0 p-4 rounded shadow-lg w-48">
                <li className="hover:text-purple-700 duration-500 ease-in-out py-1">Accessories</li>
                <li className="hover:text-purple-700 duration-500 ease-in-out py-1">Furniture</li>
                <li className="hover:text-purple-700 duration-500 ease-in-out py-1">Electronic</li>
                <li className="hover:text-purple-700 duration-500 ease-in-out py-1">Cloths</li>
                <li className="hover:text-purple-700 duration-500 ease-in-out py-1">Bags</li>
                <li className="hover:text-purple-700 duration-500 ease-in-out py-1">Home Appliances</li>
              </ul>
            )}
          </div>

      
          <div className="flex justify-end lg:w-2/3 relative mb-4 lg:mb-0">
  <input
    className="py-2 lg:w-full sm:w-1/4 rounded pl-2 border-none"
    type="text"
    placeholder="Search..."
  />
  <FaSearch className="absolute top-3 right-3" />
</div>

        
<div className="w-full lg:w-1/4 flex justify-end items-center gap-6">
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <FcBusinessman className="text-[30px]" />
          <IoMdArrowDropdown className="text-[20px]" />
        </div>
        {isOpen && (
          <ul className="absolute z-10  right-0 mt-2 opacity-80 bg-black shadow-lg p-2 rounded">
            <li className="px-4 hover:text-purple-700 text-white hover:bg-black py-2 cursor-pointer">Account</li>
            <li className="px-4 hover:text-purple text-white  hover:bg-black py-2  cursor-pointer">Log in</li>
          </ul>
        )}
      </div>
      <FaShoppingCart className="text-[20px]" />
    </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
