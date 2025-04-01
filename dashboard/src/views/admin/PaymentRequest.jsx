//react window is used

import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex items-center text-sm border-b border-gray-100">
        <div className="w-1/5 p-2 text-center">{index + 1}</div>
        <div className="w-1/5 p-2 text-center">$3432</div>
        <div className="w-1/5 p-2 text-center">
          <span className="py-0.5 px-2 font-medium text-red-700 rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-1/5 p-2 text-center">25 Dec 2025</div>
        <div className="w-1/5 p-2 text-center">
          <button className="bg-[#3938ab] text-white px-3 py-1.5 rounded-xl text-xs shadow hover:shadow-lg transition">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" px-4 py-9">
      <div className="bg-white rounded-md shadow border border-gray-200">
        <div className="p-4">
          <h1 className="text-xl font-medium text-[#3948ab]">Withdrawal Request</h1>
        </div>
        <div className="flex justify-between items-center gap-3 px-4">
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
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-2 uppercase text-xs font-medium text-gray-800 p-2 mt-4 border-t border-b border-gray-200">
          <div className="text-center">S.NO</div>
          <div className="text-center">Amount</div>
          <div className="text-center">Status</div>
          <div className="text-center">Date</div>
          <div className="text-center">Action</div>
        </div>
        {/* Table Rows */}
        <div className="w-full">
          <List
            style={{ minWidth: "340px" }}
            className="List"
            height={450}
            itemCount={100}
            itemSize={45}
            outerElementType={outerElementType}
          >
            {Row}
          </List>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
