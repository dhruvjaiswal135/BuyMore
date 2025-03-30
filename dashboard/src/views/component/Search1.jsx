import React from 'react';
import { CiSearch } from "react-icons/ci";
import {IoDownloadOutline } from "react-icons/io5";
const Search1 = ({setPerpage, searchValue,setSearchValue}) => {
    return (
        <div className="flex justify-between items-center gap-3 px-">
                  {/* Search Input */}
                  <div className="relative w-full ">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <CiSearch />
                    </span>
                    <input
                    onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
                      type="text"
                      name="search"
                      placeholder="Search by order id, product, category or others..."
                      className="block w-full pl-10 pr-3 py-2 border font-light border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none  focus:border-[#3938ab] text-xs"
                    />
                  </div>
                  {/* Select */}
                  <select
                    onChange={(e) => setPerpage(parseInt(e.target.value))}
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
    );
};

export default Search1;