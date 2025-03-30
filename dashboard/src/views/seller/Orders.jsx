import React from "react";
import { useState } from "react";
import { LuArrowDownNarrowWide } from "react-icons/lu";
import { IoCheckmark, IoDownloadOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Pagination from "../Pagination";
import Search1 from "../component/Search1";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className=" px-4 py-9">
      <div className="w-full p-4 shadow rounded-md bg-white border border-gray-200">
        <div className="relative overflow-x-auto">
          <div className="w-full text-xs text-left">
            <Search1
              setPerpage={setPerPage}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
            <div className=" text-[#000000]  mt-5 uppercase border-b">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] text-center  font-medium">
                  Order Id
                </div>
                <div className="py-3 w-[25%] text-center font-medium">
                  Price
                </div>
                <div className="py-3 w-[25%] text-center font-medium">
                  Payment Status
                </div>
                <div className="py-3 w-[25%] text-center font-medium">
                  Order Status
                </div>
                <div className="py-3 w-[25%] text-center font-medium">
                  Action
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#000000]  text-center uppercase border-b">
            <div className="py-1 flex justify-between items-start ">
              <div className="py-3 w-[25%]  whitespace-nowrap text-gray-400 font-normal">
                #34543
              </div>
              <div className="py-3 w-[25%] font-light">$458</div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className="flex justify-center items-center gap-2 py-3 w-[25%] font-normal text-red-700">
                <span>
                  <GoDotFill />
                </span>
                Pending
              </div>
              <div className=" py-3 w-[25%] font-light ">
                <Link>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <IoDocumentAttachOutline />
                    </span>
                    <h1>View</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end bottom-4 right-4 items-center mt-5">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              perPage={perPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
