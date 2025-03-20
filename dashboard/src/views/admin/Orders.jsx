import React from "react";
import { useState } from "react";
import { LuArrowDownNarrowWide } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Pagination from "../Pagination";


const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1); //used for pagination
  const [searchValue, setSearchValue] = useState("");
  const [perpage, setPerpage] = useState(5);
  const [show, setShow] = useState(false);  //for dropdown menu in action's next column
  return (
    <div className="px-2 lg:px-7 pt-9">
      <div className="w-full p-4 rounded-md bg-white border border--slate-200">
        <div className="flex justify-between items-center gap-3">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <CiSearch />
            </span>
            <input
              className="rounded-lg px-12 py-2 w-full text-black font-light text-[13px]
              outline-none border focus:border-[#3948ab] focus:bg-white
              overflow-hidden focus:text-[#000000] focus:text-opacity-5 
              pl-10"
              type="text"
              name="search"
              placeholder="Search by order id, product, category or others..."/>
          </div>
          <select
            onChange={(e) => setPerpage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-[#3948ab] focus:bg-white font-light text-[13px]
                    outline-none bg-gray-50 border rounded-md text-black">
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <div className="px-4 py-2 flex items-center gap-3 focus:border-[#3948ab] focus:bg-white font-light text-[13px]
                    outline-none bg-gray-50 border rounded-md text-black">
            <span><IoDownloadOutline /></span>
            <span>Download</span>
          </div>
        </div>
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-xs text-left">
            <div
              className=" text-[#000000] uppercase border-b">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-medium">Order Id</div>
                <div className="py-3 w-[25%] font-medium">Product</div>
                <div className="py-3 w-[25%] font-medium">Category</div>
                <div className="py-3 w-[25%] font-medium">Price</div>
                <div className="py-3 w-[25%] font-medium">Payment Status</div>
                <div className="py-3 w-[25%] font-medium">Action</div>
                <div className="py-3 w-[25%] font-medium">
                  <LuArrowDownNarrowWide />
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
              <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div> 
              <div onClick={(e)=> setShow(!show)} className="py-3 w-[25%] font-light"> 
              {/* for dropdown menu in action's next column */}
                <LuArrowDownNarrowWide /></div>
            </div>
          </div>

          {/* here implement the dropdown menu */}
          <div className={show ? 'block border-b  bg-[#c6c6c622]' : 'hidden'}> 
          <div className="flex border-b text-xs ">
              <div className="py-3 pl-3 w-[14.5%]  whitespace-nowrap text-gray-400 font-normal"> #3454</div>
              <div className="py-3 w-[14.5%] font-light">Denim Jeans</div>
              <div className="py-3 w-[14%] font-light">Clothing</div>
              <div className="py-3 w-[14%] font-light">$458</div>
              
            </div>
            <div className="flex border-b text-xs ">
              <div className="py-3 pl-3 w-[14.5%]  whitespace-nowrap text-gray-400 font-normal"> #3454</div>
              <div className="py-3 w-[14.5%] font-light">Denim Jeans</div>
              <div className="py-3 w-[14%] font-light">Clothing</div>
              <div className="py-3 w-[14%] font-light">$458</div>
              
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] font-light">
                <LuArrowDownNarrowWide />
              </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
              <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div> 
              <div className="py-3 w-[25%] font-light"><LuArrowDownNarrowWide /></div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] font-light">
                <LuArrowDownNarrowWide />
              </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
              <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div> 
              <div className="py-3 w-[25%] font-light"><LuArrowDownNarrowWide /></div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] font-light">
                <LuArrowDownNarrowWide />
              </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
              <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div> 
              <div className="py-3 w-[25%] font-light"><LuArrowDownNarrowWide /></div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] font-light">
                <LuArrowDownNarrowWide />
              </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
              <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div> 
              <div className="py-3 w-[25%] font-light"><LuArrowDownNarrowWide /></div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] font-light">
                <LuArrowDownNarrowWide />
              </div>
            </div>
          </div>
        </div>

        {/* pagination starts here */}
        <div className="w-full flex justify-end bottom-4 right-4 items-center mt-5">
        <Pagination
        pageNumber = {currentPage}
        setPageNumber = {setCurrentPage}
        totalItem = {50}
        perPage = {perpage}
        showItem = {3}/>
</div>
      </div>
    </div>
  );
};

export default Orders;
