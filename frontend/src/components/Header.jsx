import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#3949ab] md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto ">
          <div
            className="flex w-full justify-between
                     items-center h-[50px]  text-slate-50">
            <ul
              className="flex justify-start items-center
                        gap-8 font-regular text-white">
              <li
                className="flex relative justify-center
                            items-center gap-2 text-xs after:absolute
                            after:h-[18px] after:w-[1px] after:bg-[#f1f1f1]
                            after:-right-[16px]">
                <span>
                  <IoIosMail />
                </span>
                <span>support@gmail.com</span>
              </li>

              <li
                className="flex relative justify-center
                            items-center gap-2 text-xs after:absolute
                            after:h-[18px]  after:bg-[#f1f1f1]
                            after:-right-[16px]">
                <span>
                  <FaPhoneAlt />
                </span>
                <span>+1 234 567 890</span>
              </li>
              
            </ul>

            <ul
              className="flex justify-start items-center
                        gap-8 font-regular text-white">
              <li
                className="flex relative justify-center
                            items-center gap-2 text-xs after:absolute
                            after:h-[18px] after:w-[1px] after:bg-[#f1f1f1]
                            after:-right-[16px]">
                <span className="flex gap-2">
                  <a href = "#"><FaFacebookF /></a>
                   <a href = "#"><FaTwitter /></a>
                   <a href = "#"><FaInstagram /></a>
                   <a href = "#"><FaLinkedinIn /></a>
                </span>
                
              </li>
               
               <div className=" flex group cursor-pointer justify-center
               items-center gap-1 relative after: h-[18px]">

               </div>
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
