import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {
    let [show , getShow]=useState(false)
    let handeShow = () => {
        getShow(!show)
    }
  return (
    <div className="bg-[#0D0D0D] py-8">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="lg:w-[20%]">
            <img className="w-[90px] pl-6 lg:pl-3 lg:w-[134px]" src={logo} alt="" />
          </div>
          <div className={`lg:w-[80%] lg:flex justify-between items-center lg:static ${show == true? " bg-red-500 absolute top-[80px] w-full text-center left-0 transition-all ease-in-out" : "absolute top-[80px] left-[-350px]  text-center transition-all ease-in-out"}`}>
            <ul className="lg:flex">
              <li className="text-white py-1 lg:py-0 text-[16px] px-12 uppercase font-normal">
                <a href="#">home</a>
              </li>
              <li className="text-white py-1 lg:py-0 text-[16px] px-12 uppercase font-normal">
                <a href="#">About us</a>
              </li>
              <li className="text-white py-1 lg:py-0 text-[16px] px-12 uppercase font-normal">
                <a href="#">Sermon</a>
              </li>
              <li className="text-white py-1 lg:py-0 text-[16px] px-12 uppercase font-normal">
                <a href="#">Blog</a>
              </li>
            </ul>
            <div className="text-center pt-2 pb-3 lg:pt-0 lg:pb-0 lg:pr-3">
              <a className="text-black bg-[#FFD2A4] text-[16px] uppercase font-normal lg:px-12 lg:py-5 px-[10px] py-[6px] lg:rounded-xl rounded-md" href="#">
                contect
              </a>
            </div>
          </div>
          <div className="text-white absolute right-6 lg:hidden " onClick={handeShow}>
            {show == true? <RxCross2/> : <CiMenuFries/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
