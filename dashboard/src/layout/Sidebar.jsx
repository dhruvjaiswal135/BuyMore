import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = ({showSidebar, setShowSidebar}) => {
  const { pathname } = useLocation();
  // using this will create same sidebar for different pages like admin, seller and user
  const [allNav, setallNav] = useState([]);
  useEffect(() => {
    const navs = getNav("admin"); //sidebar only for admin
    setallNav(navs);
  }, []);
  //console.log(allNav)
  return (
    <div>
      <div onClick={()=> setShowSidebar(false)}
        className={`fixed duration-200 ${!showSidebar ? "invisible" : "visible"}
        w-screen h-screen bg-white top-0 left-0 z-10 `}>

      </div>
      {/* this div is for whole sidebar */}
      <div
        className={`w-[250px] bg-[#ffffff] z-50 h-screen fixed top-2 left-2 bottom-2 right-2
         transition-all ${showSidebar?'left-0': '-left-[260px] lg:left-0'} shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] rounded-lg border-r-2`}
      >
        {/* this div is for logo */}
        <div className="pt-8 pb-12 flex items-center px-[20px]">
          <Link to="/" className="w-[140px] h-[50px]">
            <img
              className="w-full"
              src="http://localhost:3001/Logo.png"
              alt=""
            />
          </Link>
        </div>
        {/* this div if for all the elements in sidebar */}
        <div className="px-[16px]">
          <div className="mb-4">
            <p className=" text-[#3948ab] text-opacity-55 text-[12px] px-[4px]">
              GENERAL
            </p>
          </div>
          <ul>
            {allNav.map((name, index) => (
              <li key={index}>
                <Link
                  to={name.path}
                  className={`${
                    pathname === name.path
                      ? "bg-[#000000] shadow-md text-[#ffffff] border border-[#000000] duration-500"
                      : "text-[#000000] border border-transparent duration-200"
                  } 
                            px-[20px] py-[10px] rounded-lg flex items-center gap-3 
                            hover:pl-4 hover:border-[#3948ab] hover:border-opacity-55 
                            transition-all w-full mb-1`}>
                  <span>{name.icon}</span>
                  <span>{name.title}</span>
                </Link>
              </li>
            ))}
            <div className="mt-4 mb-4">
              <p className=" text-[#3948ab] text-opacity-55 text-[12px] px-[4px]">
                ACCOUNT
              </p>
            </div>
            <li>
              <button
                className="text-[#3948ab]  duration-200 px-[20px] py-[10px] 
                rounded-lg flex items-center gap-3 hover:pl-4 
                transition-all w-full mb-1"
              >
                <span>
                  <RiLogoutCircleLine />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
