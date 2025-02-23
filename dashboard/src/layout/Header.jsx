import React from 'react';
import { FaList, FaSearch } from 'react-icons/fa';

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-5 px-20 lg:px-7 z-40
         '>
        <div className='ml-0 lg:ml-[260px] rounded-md h-[60px]
        flex justify-between items-center px-5 transition-all duration-300'>
            <div onClick={()=> setShowSidebar(!showSidebar) }
                className='w-[35px] flex lg:hidden h-[35px] rounded-sm justify-center items-center
                cursor-pointer'>
                    <span><FaList/></span>
            </div>
            <div className='hidden md:block '>
                <div className='flex items-center'>
                <span><FaSearch/></span>
                <input  className='rounded-lg px-12 py-2  text-black text-opacity-55
                outline-none border bg-[#3948ab] bg-opacity-5
                focus:border-[#3948ab] focus:bg-[white] focus:opacity-100
                overflow-hidden focus:text-[#000000] focus:text-opacity-55'
                type="text" name='search' placeholder='Search'
                />
                </div>
            </div>
            <div className='flex items-center justify-center gap-8 relative'>
                <div className='flex items-center justify-center  '>
                <div className='flex items-center justify-center gap-3'>
                <div className='flex items-center justify-center flex-col
                text-end'>
                    <h2 className='text-md font-bold text-[#3948ab]'>Dhruv Jaiswal</h2>
                    <span className='text-[14px] opacity-70 w-full font-normal'>Admin</span>
                </div>
                <img className='w-[50px] h-[50px] rounded-full overflow-hidden'
                src="http://localhost:3001/admin.webp" alt="" />
                </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Header;