import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import Slider from "react-slick";
import { ApiData } from "./Contextapi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Container from "./Container";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="h-[40px] w-[40px] rounded-full absolute translate-y-[-50%] cursor-pointer right-0 top-[50%] bg-[gray] leading-[40px] text-center z-10"
        onClick={onClick}
      > <GoArrowRight className='inline-block'/></div>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="h-[40px] w-[40px] rounded-full absolute translate-y-[-50%] cursor-pointer left-0 top-[50%] bg-[gray] leading-[40px] text-center z-10"
        onClick={onClick}
      ><GoArrowLeft className='inline-block'/></div>
    );
}

const Arrival = () => {
    let data = useContext(ApiData);
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <Container className="pt-10">
      <div className="!w-[97%] mx-3">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <div className="relative group overflow-hidden">
                <img className="w-full" src={item.thumbnail} alt={item.title} />

                <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                  <li className="py-2">
                    Add to Wish List <FaHeart className="inline-block" />
                  </li>
                  <li className="py-2">
                    Compare <IoGitCompare className="inline-block" />
                  </li>
                  <li className="py-2">
                    Add to Cart <FaCartPlus className="inline-block" />
                  </li>
                </ul>
              </div>

              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                    {item.title}
                  </h3>
                  <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                    {item.brand}
                  </h5>
                </div>
                <p className="text-[#262626] font-bold text-[16px] font-sans">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Arrival;
