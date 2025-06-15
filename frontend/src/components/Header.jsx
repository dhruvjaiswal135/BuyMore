import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaLock,
  FaHeart,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  const { pathname } = useLocation();
  const user = true;
  const [showSidebar, setShowSidebar] = useState(false);
  const cart_count = 4;

  return (
    <div className="w-full bg-white">
      {/* 🔵 Top header strip (visible on md-lg+ only) */}
      <div className="bg-[#3949ab] hidden min-md-lg:block">
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

            {/* Right side */}
            <div className="flex items-center gap-6">
              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
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

              {/* Auth */}
              {user ? (
                <Link
                  className="flex items-center gap-2 text-sm text-white"
                  to="/dashboard"
                >
                  <FaUser />
                  <span>Dhruv Jaiswal</span>
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-2 text-sm text-white"
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

      {/* 🔵 Main Header */}
      {/* 🔵 Main Header */}
      <div className="w-full bg-white shadow-sm">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-between items-center h-[80px]">
            {/* 🔹 Logo (Always visible) */}
            <Link to="/">
              <img
                src="http://localhost:3000/images/Logo.png"
                alt="Logo"
                className="h-6 lg:h-7 w-auto"
              />
            </Link>

            {/* 🔹 Desktop Nav (hidden on md-lg and smaller) */}
            <div className="hidden min-md-lg:flex gap-8 text-sm font-semibold uppercase">
              <Link
                to="/"
                className={`p-2 block ${
                  pathname === "/" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`p-2 block ${
                  pathname === "/shop" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Shop
              </Link>
              <Link
                to="/blog"
                className={`p-2 block ${
                  pathname === "/blog" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className={`p-2 block ${
                  pathname === "/about" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`p-2 block ${
                  pathname === "/contact" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className=" flex md-lg:hidden justify-center items-center gap-5">
              <div className="flex justify-center gap-5">
                <div
                  className=" relative flex justify-center items-center
        cursor-pointer w-[35px] h-[35px] rounded-full bg-[#3949ab] text-white"
                >
                  <Link to="/cart">
                    <span>
                      <FaHeart />
                    </span>
                  </Link>
                  <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart_count}
                  </span>
                </div>
                <div
                  className=" relative flex justify-center items-center
        cursor-pointer w-[35px] h-[35px] rounded-full bg-[#3949ab] text-white"
                >
                  <Link to="/cart">
                    <span>
                      <IoMdCart />
                    </span>
                  </Link>
                  <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart_count}
                  </span>
                </div>
              </div>
            </div>

            {/* 🔹 Hamburger Icon (visible only on md-lg and smaller) */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="min-md-lg:hidden text-2xl text-black"
            >
              <VscListSelection />
            </button>
          </div>
        </div>
      </div>

      {/* 🔵 Mobile Sidebar Menu — visible only below 992px */}
      {showSidebar && (
        <div className="block min-md-lg:hidden bg-white w-full px-6 py-4 border-t shadow-md">
          {/* 👤 User / Login */}
          <div className="flex items-center gap-2 text-sm text-black">
            <FaUser />
            {user ? (
              <Link to="/dashboard" onClick={() => setShowSidebar(false)}>
                Dhruv Jaiswal
              </Link>
            ) : (
              <Link to="/login" onClick={() => setShowSidebar(false)}>
                Login
              </Link>
            )}
          </div>
          {/* 🌐 Language Selector */}
          <div className="flex items-center gap-2 mb-4 text-sm text-black">
            <img
              className="w-5 h-auto"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
              alt="India Flag"
            />
            <span className="font-medium">Language:</span>
            <select className="text-black bg-transparent outline-none border px-2 py-1 rounded text-sm">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>

          {/* 🔽 Divider */}
          <hr className="my-4 border-gray-300" />

          <ul className="flex flex-col gap-4 text-sm font-semibold">
            <li>
              <Link
                to="/"
                onClick={() => setShowSidebar(false)}
                className={`p-2 block ${
                  pathname === "/" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={() => setShowSidebar(false)}
                className={`p-2 block ${
                  pathname === "/shop" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => setShowSidebar(false)}
                className={`p-2 block ${
                  pathname === "/blog" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setShowSidebar(false)}
                className={`p-2 block ${
                  pathname === "/about" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setShowSidebar(false)}
                className={`p-2 block ${
                  pathname === "/contact" ? "text-[#3949ab]" : "text-black"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <hr className="my-4 border-gray-300" />

          {/* 🌐 Social Icons */}
          <div className="flex justify-center gap-6 text-[#3949ab] mt-6 text-lg">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
