import React from "react";
import { IoIosMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";

const Header = () => {
  const user = false;
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <div className="w-full bg-white">
      {/* Top header strip */}
      <div className="bg-[#3949ab] hidden md:block">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-between items-center h-[50px] text-white text-xs">
            {/* Contact Info */}
            <ul className="flex items-center gap-6 font-normal">
              <li className="flex items-center gap-2 relative after:absolute after:right-[-12px] after:h-4 after:w-[1px] after:bg-[#f1f1f1]">
                <IoIosMail />
                <span>support@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+1 234 567 890</span>
              </li>
            </ul>

            {/* Right: Social + Language + Login */}
            <div className="flex items-center gap-6 relative">
              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>

              {/* Language Selector */}
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  <img
                    className="w-5 h-auto"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
                    alt="India Flag"
                  />
                  <IoMdArrowDropdown />
                </div>

                <ul className="absolute top-8 left-0 bg-black text-white text-sm p-2 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 w-24">
                  <li className="hover:text-gray-300">Hindi</li>
                  <li className="hover:text-gray-300">English</li>
                </ul>
              </div>

              {/* User Auth */}
              {user ? (
                <Link
                  className="flex cursor-pointer items-center gap-2 text-sm text-white"
                  to="/dashboard"
                >
                  <FaUser />
                  <span>Dhruv Jaiswal</span>
                </Link>
              ) : (
                <Link
                  className="flex cursor-pointer items-center gap-2 text-sm text-white"
                  to="/login"
                >
                  <FaLock />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

        {/* Main header */}
        <div className="w-full bg-white">
            <div className="w-[85%]  mx-auto">
                <div className="h-[80px] flex justify-between 
                items-center flex-wrap">
                    <div className="w-full pt-4 ">
                    <div className="flex justify-between items-center">

                    
                    <Link to="/" >
                    <img
                      className="w-auto h-6 lg:h-7"
                      src="http://localhost:3000/images/Logo.png"
                      alt="Logo"
                    />
                    </Link>
                    <div className=" justify-center items-center
                    bg-white text-black   
                    cursor-pointer lg:hidden md-lg:flex" onClick={() => setShowSidebar(false)} >
                        <span className="h-[20px]"><VscListSelection /></span>
                    </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  );
};

export default Header;
