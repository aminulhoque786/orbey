import React, { useRef } from 'react';
import Container from './Container';
import Slider from "react-slick";
import ket from "../assets/ghori.jpg";
import bag2 from "../assets/yik.jpg";
import bag from "../assets/bilai.jpg";
import sunglass from "../assets/bag.png";

const New = () => {
  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); 
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); 
  };

  return (
    <Container className="pt-10">
      <div>
        <h2 className='font-dm text-[30px] font-bold'>New Arrivals</h2>
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }} 
        >
          &#10094; 
        </button>

        <Slider ref={sliderRef} {...settings}>
          {[ket, bag, bag2, sunglass].map((image, index) => (
            <div key={index} className='p-2 relative group outline-none'>
              <img src={image} alt="" className="outline-none" />
              
              {/* "New" label */}
              <div className='absolute top-2 left-3 pt-3'>
                <h5 className='text-[10px] hover:bg-purple-700 hover:text-white px-2 py-1 lg:text-[18px] lg:px-6 lg:py-1 bg-black text-white'>New</h5>
              </div>

              {/* Add to Cart and Add to Favourite */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out">
                <div className="flex flex-col items-start space-y-2 p-4 transform translate-y-[100%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h5 className="text-white text-sm sm:text-base">Add to Cart</h5>
                  <h5 className="text-white text-sm sm:text-base">Add to Favourite</h5>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row font-dm items-start justify-between'>
<div className='flex-1 mb-1'>
  <h2 className='text-[14px] sm:text-[16px] font-bold'>Basic crew neck tee</h2>
  <p className='text-gray-400 text-[12px] sm:text-[14px]'>$44.00</p>
</div>
<div className='flex-1 mb-1 sm:text-right'>
  <h5 className='text-[12px] sm:text-[14px]'>Black</h5>
</div>
</div>
            </div>
            
          ))}
        </Slider>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }} 
        >
          &#10095; 
        </button>
      </div>
    </Container>
  );
};

export default New;
