import React from "react";
import Container from "./Container";
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
  const bgClasses = ["bg-hero", "bg-hero-2", "bg-hero-3"];

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {bgClasses.map((bgClass, index) => (
          <div
            key={index}
            className={`${bgClass} bg-cover bg-center h-[650px] sm:h-[400px] md:h-[550px]`}
          >
            <Container className="pt-20">
              <div className="w-full md:w-1/2 px-4  sm:px-8 md:px-[80px] relative text-left">
                {" "}
                {/* Ensuring left alignment */}
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#262626] pt-12 sm:pt-16 md:pt-20 lg:pt-28 leading-tight">
                  Final Offer
                </h2>
                {/* Subheading */}
                <p className="flex items-center text-base sm:text-lg text-[#979797] mt-4">
                  <span className="text-sm sm:text-base">up to</span>
                  <span className="font-bold text-3xl sm:text-4xl mx-2">
                    50%
                  </span>
                  <span className="text-sm sm:text-base">
                    sale for all furniture items
                  </span>
                </p>
                {/* Shop Now Button */}
                <div className="pt-8 md:pt-10">
                  <button className="font-dm px-6 py-3 md:px-8 md:py-4 bg-black text-white font-semibold hover:bg-purple-500 hover:text-black transition duration-300 ease-in-out">
                    Shop Now
                  </button>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </Slider>

      {/* Warranty, Shipping, and Return Policy Section */}
      <div className="bg-[#F0F0F0]">
        <Container>
          <div className="flex flex-wrap justify-between items-center p-5">
            {/* Warranty Section */}
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="text-2xl sm:text-3xl font-bold">2</div>
              <div className="pl-2 text-gray-500 text-base sm:text-lg hover:bg-slate-400 hover:text-white transition duration-300 ease-in-out">
                Two Years Warranty
              </div>
            </div>

            {/* Free Shipping Section */}
            <div className="flex items-center mb-4 sm:mb-0">
              <FaTruck className="text-2xl sm:text-3xl" />
              <div className="pl-4 text-gray-500 text-base sm:text-lg hover:bg-slate-400 hover:text-white transition duration-300 ease-in-out">
                Free Shipping
              </div>
            </div>

            {/* Return Policy Section */}
            <div className="flex items-center">
              <CiRedo className="text-2xl sm:text-3xl" />
              <div className="pl-4 text-gray-500 text-base sm:text-lg hover:bg-slate-400 hover:text-white transition duration-300 ease-in-out">
                Return Policy in 30 Days
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
