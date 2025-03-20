import React from 'react';
import { FaList } from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-5 px-20 lg:px-7 z-40 bg-white
         '>
        <div className='ml-0 lg:ml-[260px] rounded-md h-[90px]
        flex justify-between items-center px-5 transition-all duration-300'>
            <div onClick={()=> setShowSidebar(!showSidebar) }
                className='w-[35px] flex lg:hidden h-[35px] rounded-sm justify-center items-center
                cursor-pointer'>
                    <span><FaList/></span>
            </div>
            <div className='hidden md:block '>
                <div className='flex items-center'>
                    <div>
                <h1 className='text-2xl'>Welcome Back, Dhruv! </h1>
                <p className='text-[13px] font-light text-slate-500 pt-2'>Here's what happening with your store today</p>
                </div>
                {/* <input  className='rounded-lg px-12 py-2  text-black text-opacity-55
                outline-none border bg-[#3948ab] bg-opacity-5
                focus:border-[#3948ab] focus:bg-[white] focus:opacity-100
                overflow-hidden focus:text-[#000000] focus:text-opacity-55'
                type="text" name='search' placeholder='Search'
                /> */}
                </div>
            </div>
            <div className='flex items-center justify-center gap-8 relative'>
                <div className='flex items-center justify-center gap-3'>
                    <div className=' border border-slate-200 rounded-full p-2'>
                        <IoSearchOutline/>
                    </div>
                    <div className=' border border-slate-200 rounded-full p-2'>
                        <IoIosNotificationsOutline/>
                    </div>
                    <div className="h-9 border-r border-slate-200"></div>
                <div className='flex items-center justify-center gap-1'>
                <img className='w-[40px] h-[40px] rounded-full overflow-hidden'
                src="http://localhost:3000/admin.webp" alt="" />
                <div className='flex items-center justify-center flex-col
                text-start'>
                    <h2 className='text-sm font-medium text-[#3948ab]'>Dhruv Jaiswal</h2>
                    <span className='text-[10px] opacity-70 w-full font-normal'>Admin</span>
                </div>
                </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Header;