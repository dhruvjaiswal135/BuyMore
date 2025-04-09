import React from "react";
import { CiSearch } from "react-icons/ci";

const Search2 = ({ setPerpage, searchValue, setSearchValue }) => {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Search Input */}
      <div className="relative w-full sm:max-w-md">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <CiSearch />
        </span>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="w-full rounded-full px-12 py-2 text-black font-light text-sm outline-none border focus:border-[#3948ab] focus:bg-white pl-10"
          type="text"
          name="search"
          placeholder="Search by order id, product, category or others..."
        />
      </div>

      {/* Per Page Dropdown */}
      <div className="relative">
        <select
          onChange={(e) => setPerpage(parseInt(e.target.value))}
          className="px-4 py-2 bg-black text-white font-light text-sm rounded-full appearance-none cursor-pointer pr-8"
        >
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <div className="absolute top-1/2 right-3 text-white transform -translate-y-1/2 pointer-events-none">
          ⏷
        </div>
      </div>
    </div>
  );
};

export default Search2;
