import React from 'react'
import banner from "../assets/banner.jpg"
import { FaMinus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div style={{backgroundImage:`url(${banner})`}} className=' xl:py-[150px] bg-no-repeat bg-center bg-cover'>
        <div className="max-w-container mx-auto">
            <div className="">
                <h3 className='md:text-base md:pt-[20px] lg:pt-[50px] xl:text-base font-bold text-white uppercase pb-4 text-[10px] xl:pt-0 pt-3 xl:pl-0 pl-5'>Welcome to our CHURCH</h3>
                <h1 className='md:text-[45px] md:pr-[250px] lg:pr-[480px] xl:text-[64px] font-bold text-white xl:pr-[600px] uppercase pl-5 xl:pl-0 pr-[200px]'>Become a part of our community</h1>
                <div className="md:pt-[22px] md:pb-[34px] xl:pt-[52px] xl:pb-[74px] xl:pl-0 pl-5 py-3">
                  <a className='md:py-[12px] md:px-[32px] md:rounded-md md:text-base xl:py-[24px] xl:px-[64px] bg-[#FFD2A4] xl:text-base font-normal xl:rounded-xl uppercase  text-[10px] px-[10px] py-[7px]' href="#">Learn more</a>
                  </div>
                <div className="flex">
                  <span className='text-[#FFD2A4] lg:pb-[100px] xl:pt-[6px] mr-3 pl-5'><FaMinus/></span>
                  <p className='text-white md:text-[16px] md:w-[300px] md:pb-4 xl:w-[308px] xl:text-[16px] xl:py-0 text-[10px] w-[180px] pb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
