import React from "react";
import icons from "../assets/Icon.png";
import icons2 from "../assets/icon2.png";
import icons3 from "../assets/icon3.png";
const About = () => {
  return (
    <div className="xl:py-[128px]">
      <div className="max-w-container mx-auto">
        <div className="text-center">
          <h5 className="md:text-base md:pt-12 xl:text-base font-normal uppercase text-[12px] pt-[25px]">
            sub-headline
          </h5>
          <h2 className="md:text-3xl md:pt-4 md:pb-8 lg:py-8 xl:text-5xl font-bold uppercase xl:pt-[16px] xl:pb-[64px] pt-[5px] text-[17px] ">
            a church that's relevant
          </h2>
        </div>
        <div className="lg:flex lg:gap-6 lg:px-6 xl:px-0 ">

          <div className="xl:W-[30%] md:w-[80%] w-[90%] mx-auto bg-[#FFF5EB] xl:px-[80px] xl:pt-[152px] xl:pb-[80px] px-[40px] pt-[70px] pb-[40px] my-6 xl:my-0">
            <div className="mb-6">
              <img
                className="bg-[#FFD2A4] xl:p-5 p-2 rounded-[50%]"
                src={icons}
                alt=""
              />
            </div>
            <h4 className="xl:text-[32px] font-bold uppercase text-[20px]">About us</h4>
            <p className="pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="lg:W-[30%] md:w-[80%] w-[90%] mx-auto bg-[#FFF5EB] xl:px-[80px] xl:pt-[152px] xl:pb-[80px] px-[40px] pt-[70px] pb-[40px] my-6 xl:my-0">
            <div className="mb-6">
              <img
                className="bg-[#FFD2A4] xl:p-5 p-2 rounded-[50%]"
                src={icons3}
                alt=""
              />
            </div>
            <h4 className="xl:text-[32px] font-bold uppercase text-[20px]">Get involved</h4>
            <p className="pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="lg:W-[30%] md:w-[80%] w-[90%] mx-auto bg-[#FFF5EB] xl:px-[80px] xl:pt-[152px] xl:pb-[80px] px-[40px] pt-[70px] pb-[40px] my-6 xl:my-0">
            <div className="mb-6">
              <img
                className="bg-[#FFD2A4] xl:p-5 p-2 rounded-[50%]"
                src={icons2}
                alt=""
              />
            </div>

            <h4 className="xl:text-[32px] font-bold uppercase text-[20px]">Giving back</h4>
            <p className="pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
