import React from 'react';
import Container from './Container';
import "slick-carousel/slick/slick.css";
import { FaTruck } from "react-icons/fa";
import { CiRedo } from "react-icons/ci";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // For smooth transitions
  };

  // Array of Tailwind classes for background images
  const bgClasses = ['bg-hero', 'bg-hero-2', 'bg-hero-3'];

  return (
    <div className='overflow-hidden'>
    <Slider {...settings}>
      {bgClasses.map((bgClass, index) => (
        <div
          key={index}
          className={`${bgClass}  bg-cover  bg-center h-[650px] sm:h-[400px] md:h-[550px]`}
        >
          <Container>
            <div className=" font-dm w-full md:w-1/2 px-4 sm:px-8 md:px-[80px] relative ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#262626] pt-12 sm:pt-16 md:pt-20 lg:pt-28">
                Final Offer
              </h2>
            </div>

            <div className="font-dm mx-auto sm:pl-5 md:pl-16 lg:pl-16 pt-5">
              <p className="flex items-center pl-3">
                <span className="text-sm sm:text-base text-[#979797]">up to</span>
                <span className="font-bold text-[30px] sm:text-2xl mx-1">50%</span>
                <span className="text-sm sm:text-base text-[#979797]">sale for all furniture items</span>
              </p>
            </div>

            <div className="text-center w-1/4 pt-6 md:pl-24 ">
              <h2 className="font-dm md:px-2 md:py-4 lg:px-5 lg:py-3 px-1 py-2 sm:px-5 sm:py-5 bg-black text-[#fff] font-semibold inline-block hover:bg-purple-500 duration-300 ease-in-out hover:text-black">
                Shop Now
              </h2>
            </div>
          </Container>
        </div>
      ))}
      </Slider>
      <div className='bg-[#F0F0F0]'>

      <Container>
  <div className="flex flex-wrap justify-between p-5 items-center ">
    {/* Warranty Section */}
    <div className="flex items-center mb-4 sm:mb-0">
      <div className="text-[24px] sm:text-[30px] font-dm font-bold">2</div>
      <div className=" hover:bg-slate-400 hover:text-white duration-300  ease-in-out text-gray-500 pl-2 text-[16px] sm:text-[20px]">Two Years Warranty</div>
    </div>

    {/* Free Shipping Section */}
    <div className="flex items-center mb-4 sm:mb-0">
      <FaTruck className="text-[24px] sm:text-[30px]" />
      <div className="pl-4">
        <h2 className="text-gray-500 text-[16px] sm:text-[20px] ease-in-out  hover:bg-slate-400 hover:text-white duration-300 ">Free Shipping</h2>
      </div>
    </div>

    {/* Return Policy Section */}
    <div className="flex items-center">
      <CiRedo className="font-bold text-[24px] sm:text-[30px]" />
      <div className="pl-4">
        <h2 className="text-gray-500 text-[16px] sm:text-[20px] hover:bg-slate-400 hover:text-white duration-300 ease-in-out">Return Policy in 30 Days</h2>
      </div>
    </div>
  </div>
</Container>

      </div>
    </div>
  );
};

export default Banner;
