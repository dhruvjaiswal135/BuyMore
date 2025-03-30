import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search2 = ({setPerpage, searchValue,setSearchValue}) => {
    return (
        <div className="flex sm:flex-row pt-6 gap-1 sm:gap-3 w-full sm:w-4/5 md:w-3/5 justify-center mx-auto items-center">
                      <div className="sm:w-3/5">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                          <CiSearch />
                        </span>
                        <input
                        onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
                          className="rounded-full px-12 py-2 sm:w-full text-black font-light text-[13px]
                                                outline-none border focus:border-[#3948ab] focus:bg-white
                                                overflow-hidden focus:text-[#000000] 
                                                pl-10"
                          type="text"
                          name="search"
                          placeholder="Search by order id, product, category or others..."
                        />
                      </div>
                      <div>
                      </div>
                      <div className="relative inline-block">
  <select
    onChange={(e) => setPerpage(parseInt(e.target.value))}
    className="px-4 py-2 bg-black text-white font-light text-[13px] 
               outline-none rounded-full appearance-none cursor-pointer 
               pr-8"
  >
    <option value="5">05</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select>

  {/* Dropdown Arrow (optional for better UX) */}
  <div className="absolute top-1/2 right-3 text-white transform -translate-y-1/2">
    ⏷
  </div>
</div>

                    </div>
    );
};

export default Search2;