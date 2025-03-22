import React from "react";
import { useState } from "react";
import { LuArrowDownNarrowWide } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoCheckmark, IoDownloadOutline } from "react-icons/io5";
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
    <div className=" px-4 py-9">
      <div className="w-full p-4 shadow rounded-md bg-white border border--slate-200">
        <div className="flex justify-between items-center gap-3 px-">
                  {/* Search Input */}
                  <div className="relative w-full ">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <CiSearch />
                    </span>
                    <input
                      type="text"
                      name="search"
                      placeholder="Search by order id, product, category or others..."
                      className="block w-full pl-10 pr-3 py-2 border font-light border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3938ab] focus:border-[#3938ab] text-xs"
                    />
                  </div>
                  {/* Select */}
                  <select
                    onChange={(e) => console.log("Change page size:", parseInt(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#3938ab] focus:border-[#3938ab]"
                  >
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                  {/* Download Button */}
                  <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-xs text-gray-700 cursor-pointer hover:bg-gray-100">
                    <IoDownloadOutline />
                    <span>Download</span>
                  </div>
                </div>
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-xs text-left">
            <div
              className=" text-[#000000] uppercase border-b">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] text-center  font-medium">Order Id</div>
                <div className="py-3 w-[25%] text-center font-medium">Product</div>
                <div className="py-3 w-[25%] text-center font-medium">Category</div>
                <div className="py-3 w-[25%] text-center font-medium">Price</div>
                <div className="py-3 w-[25%] text-center font-medium">Payment Status</div>
                <div className="py-3 w-[25%] text-center font-medium">Action</div>
                <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
              </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          {/* here implement the dropdown menu */}
          <div className={show ? 'block border-b  bg-[#c6c6c622]' : 'hidden'}> 
          <div className="flex border-b text-xs text-center">
              <div className="py-3 pl-3 w-[14.5%]  whitespace-nowrap text-gray-400 font-normal"> #3454</div>
              <div className="py-3 w-[14.5%] font-light">Denim Jeans</div>
              <div className="py-3 w-[14%] font-light">Clothing</div>
              <div className="py-3 w-[14%] font-light">$458</div>
              
            </div>
            <div className="flex border-b text-xs text-center ">
              <div className="py-3 pl-3 w-[14.5%]  whitespace-nowrap text-gray-400 font-normal"> #3454</div>
              <div className="py-3 w-[14.5%] font-light">Denim Jeans</div>
              <div className="py-3 w-[14%] font-light">Clothing</div>
              <div className="py-3 w-[14%] font-light">$458</div>
              
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span><GoDotFill /></span>
                Pending</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
                    <LuArrowDownNarrowWide />
                  </div>
            </div>
          </div>

          <div
            className="text-xs text-[#000000] text-center  uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal"> #34543</div>
              <div className="py-3 w-[25%] font-light">Denim Jeans</div>
              <div className="py-3 w-[25%] font-light">Clothing</div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-green-700">
                <span><IoMdCheckmark /></span>
                Received</div>
                <div className=" py-3 w-[25%] font-light  ">
              <Link>
              <div className="flex items-center justify-center gap-2">
              <span><IoDocumentAttachOutline /></span> 
              View</div></Link></div>
              <div className="py-3 w-[25%] flex justify-center items-center font-medium">
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
