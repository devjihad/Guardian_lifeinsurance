import React from "react";
import banner from "./../../assets/background.png";
import man from "../../assets/menIcon.png";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  console.log(Slider);

  return (
    <div className="mb-50 ">
      <div className="bg-cover bg-center min-h-150 r"style={{ backgroundImage: `url(${banner})` }} >
      <Navbar />

      <div className="container">
        <div className=" text-white flex flex-col justify-center items-center mt-14">
          <h2 className=" text-[58px] font-bold leading-16 ">
            We Ensure A Best <br /> Insurance Service
          </h2>
          <p className="my-10">
            We know how large objects will act, but things on a <br />
            small scale just do not act that way.
          </p>
          <div className="flex gap-3 mb-30">
            <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold text-[16px] hover:bg-button hover:text-white">
              Get Quote Now
            </button>

            <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover: ">
              Learn More
            </button>
          </div>
        </div>

        
          <div className="absolute -bottom-25  left-1/2 -translate-x-1/2">
            <div className="flex gap-8  w-full">
              <div className="px-10 py-5 w-67.5 bg-gray-100 rounded-lg">
                <img src={man} alt="" />
                <h4 className="text-[20px] font-bold">Peace of Mind</h4>
                <p className="text-[14px] text-gray-500">
                  the quick fox jumps over the <br /> lazy dog
                </p>
              </div>

              <div className="px-10 py-5 w-67.5 bg-gray-100 rounded-lg">
                <img src={man} alt="" />
                <h4 className="text-[20px] font-bold">Set for Life</h4>
                <p className="text-[14px] text-gray-500">
                  the quick fox jumps over the <br /> lazy dog
                </p>
              </div>

              <div className="px-10 py-5 w-67.5 bg-gray-100 rounded-lg ">
                <img src={man} alt="" />
                <h4 className="text-[20px] font-bold">100% Satisfaction</h4>
                <p className="text-[14px] text-gray-500">
                  the quick fox jumps over the <br /> lazy dog
                </p>
              </div>

              <div className="px-10 py-5 w-67.5 bg-gray-100 rounded-lg ">
                <img src={man} alt="" />
                <h4 className="text-[20px] font-bold">100% Trasted </h4>
                <p className="text-[14px] text-gray-500">
                  the quick fox jumps over the <br /> lazy dog
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default Hero;
