import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav("seller"); // Sidebar for admin only
    setAllNav(navs);
  }, []);

  return (
    <>
      {/* 🔹 Overlay with Blur Effect */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 
          ${showSidebar ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* 🔹 Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-screen w-[250px] bg-white 2 border-r z-50 transform transition-transform duration-300 
          ${showSidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* 🔹 Logo Section */}
        <div className="pt-14 pb-12 flex items-center px-5">
          <Link to="/" className="w-[160px] h-[50px]">
            <img className="w-full" src="http://localhost:3000/Logo.png" alt="Logo" />
          </Link>
        </div>

        {/* 🔹 Sidebar Items */}
        <div className="px-5">
          <div className="mb-4">
            <p className="text-[#3948ab] text-opacity-55 text-sm">GENERAL</p>
          </div>
          <ul>
            {allNav.map((name, index) => (
              <li key={index}>
                <Link
                  to={name.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full mb-1 transition-all 
                    ${pathname === name.path ? "bg-black text-white shadow-md border border-black" : "text-black"}
                    hover:pl-5 hover:border-[#3948ab] hover:border-opacity-55`}
                >
                  <span>{name.icon}</span>
                  <span>{name.title}</span>
                </Link>
              </li>
            ))}

            {/* 🔹 Account Section */}
            <div className="mt-4 mb-4">
              <p className="text-[#3948ab] text-opacity-55 text-sm">ACCOUNT</p>
            </div>
            <li>
              <button
                className="flex items-center gap-3 px-4 py-2 rounded-lg w-full mb-1 text-[#3948ab] transition-all 
                hover:pl-5"
              >
                <RiLogoutCircleLine />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;










// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { getNav } from "../navigation/index";
// import { RiLogoutCircleLine } from "react-icons/ri";

// const Sidebar = ({showSidebar, setShowSidebar}) => {
//   const { pathname } = useLocation();
//   // using this will create same sidebar for different pages like admin, seller and user
//   const [allNav, setallNav] = useState([]);
//   useEffect(() => {
//     const navs = getNav("admin"); //sidebar only for admin
//     setallNav(navs);
//   }, []);
//   //console.log(allNav)
//   return (
//     <div>
//       <div onClick={()=> setShowSidebar(false)}
//         className={`fixed duration-200 ${!showSidebar ? "invisible" : "visible"}
//         w-screen h-screen bg-white top-0 left-0 z-10 `}>

//       </div>
//       {/* this div is for whole sidebar */}
//       <div
//         className={`w-[250px] bg-[#ffffff] z-50 h-screen fixed  left-2  right-2
//          transition-all ${showSidebar?'left-0': '-left-[260px] lg:left-0'} shadow-[0_0_15px_0_rgb(34_41_47_/_5%)]  border-r`}
//       >
//         {/* this div is for logo */}
//         <div className="pt-14 pb-12 flex items-center px-[20px]">
//           <Link to="/" className="w-[160px] h-[50px]">
//             <img
//               className="w-full"
//               src="http://localhost:3000/Logo.png"
//               alt=""
//             />
//           </Link>
//         </div>
//         {/* this div if for all the elements in sidebar */}
//         <div className="px-[16px]">
//           <div className="mb-4">
//             <p className=" text-[#3948ab] text-opacity-55 text-[12px] px-[4px]">
//               GENERAL
//             </p>
//           </div>
//           <ul>
//             {allNav.map((name, index) => (
//               <li key={index}>
//                 <Link
//                   to={name.path}
//                   className={`${
//                     pathname === name.path
//                       ? "bg-[#000000] shadow-md text-[#ffffff] border border-[#000000] duration-500"
//                       : "text-[#000000] border border-transparent duration-200"
//                   } 
//                             px-[20px] py-[10px] rounded-lg flex items-center gap-3 
//                             hover:pl-4 hover:border-[#3948ab] hover:border-opacity-55 
//                             transition-all w-full mb-1`}>
//                   <span>{name.icon}</span>
//                   <span>{name.title}</span>
//                 </Link>
//               </li>
//             ))}
//             <div className="mt-4 mb-4">
//               <p className=" text-[#3948ab] text-opacity-55 text-[12px] px-[4px]">
//                 ACCOUNT
//               </p>
//             </div>
//             <li>
//               <button
//                 className="text-[#3948ab]  duration-200 px-[20px] py-[10px] 
//                 rounded-lg flex items-center gap-3 hover:pl-4 
//                 transition-all w-full mb-1"
//               >
//                 <span>
//                   <RiLogoutCircleLine />
//                 </span>
//                 <span>Logout</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
