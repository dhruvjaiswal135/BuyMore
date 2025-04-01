//react window is used

import React, { forwardRef } from "react";
import { MdPayment } from "react-icons/md";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));


const Payments = () => {

    // for react window

    const Row = ({ index, style }) => {
        return (
          <div style={style} className="flex items-center text-sm border-b border-gray-100">
            <div className="w-1/4 p-2 text-center">{index + 1}</div>
            <div className="w-1/4 p-2 text-center">$3432</div>
            <div className="w-1/4 p-2 text-center">
              <span className="py-0.5 px-2 font-medium text-red-700 rounded-md text-sm">
                Pending
              </span>
            </div>
            <div className="w-1/4 p-2 text-center">25 Dec 2025</div>
            
          </div>
        );
      };
  return (
    <div className="px-2 md:px-7 py-12 ">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2
             md:grid-cols-2 lg:grid-cols-4 sm:gap-9 gap-4 sm:pr-4"
      >
        {/* this is the first card */}
        <div className="flex justify-centre items-center px-4 py-6 bg-[#fbfbef] rounded-3xl ">
          <div className="w-full justify-start items-start gap-1 text-[#000000]">
            <div className="flex justify-between items-baseline">
              <span className="text-[16px] text-gray-600 font-light">
                Total Sales
              </span>
              <MdPayment className="text-2xl" />
            </div>
            <h2 className="text-4xl mt-5">$307.48K</h2>
          </div>
        </div>
        {/* this is the second card */}
        <div className="flex justify-centre items-center px-4 py-6 bg-[#f3f3f3] rounded-3xl ">
          <div className="w-full justify-start items-start gap-1 text-[#000000]">
            <div className="flex justify-between items-baseline">
              <span className="text-[16px] text-gray-600 font-light">
                Available Amount
              </span>
              <MdPayment className="text-2xl" />
            </div>
            <h2 className="text-4xl mt-5">$207.48K</h2>
          </div>
        </div>

        {/* this is the third card */}
        <div className="flex justify-centre items-center px-4 py-6 bg-[#eef9ff] rounded-3xl ">
          <div className="w-full justify-start items-start gap-1 text-[#000000]">
            <div className="flex justify-between items-baseline">
              <span className="text-[16px] text-gray-600 font-light">
                Withdrawl Amount
              </span>
              <MdPayment className="text-2xl" />
            </div>
            <h2 className="text-4xl mt-5">$30.48K</h2>
          </div>
        </div>

        {/* this is the forth card */}
        <div className="flex justify-centre items-center px-4 py-6 bg-[#f7f3fb] rounded-3xl ">
          <div className="w-full justify-start items-start gap-1 text-[#000000]">
            <div className="flex justify-between items-baseline">
              <span className="text-[16px] text-gray-600 font-light">
                Pending Amount
              </span>
              <MdPayment className="text-2xl" />
            </div>
            <h2 className="text-4xl mt-5">$77.48K</h2>
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 pr-4 mt-5 gap-5 ">
        <div className="bg-white text-black rounded-md p-5 shadow">
          <h2 className="text-lg font-medium">Send Request</h2>
          <div className="pt-5">
            <form>
              <div className="flex gap-3 flex-wrap w-full items-center justify-between">
                <input
                  type="number"
                  min="0"
                  className="rounded-xl px-6 py-2 md:w-[81%] w-[70%]  text-black font-light text-[13px]
                                outline-none border focus:border-[#3948ab] focus:bg-white
                                overflow-hidden focus:text-[#000000]"
                  placeholder="Enter Amount"
                  name="amount"/>
                <button
                  className="bg-[#3948ab] rounded-md px-5 py-2 text-xs text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <h2 className="text-sm font-normal pt-4">Pending Request</h2>
          <div className="grid grid-cols-4 sm:gap-2 uppercase text-xs font-medium text-gray-800 p-2 mt-4 border-t border-b border-gray-200">
                    <div className="text-center">S.NO</div>
                    <div className="text-center">Amount</div>
                    <div className="text-center">Status</div>
                    <div className="text-center">Date</div>
                    
                  </div>
                  {/* Table Rows */}
                  <div className="w-full">
                    <List
                      style={{ minWidth: "340px" }}
                      className="List"
                      height={250}
                      itemCount={20}
                      itemSize={42}
                      outerElementType={outerElementType}
                    >
                      {Row}
                    </List>
                  </div>
        </div>

        <div className="bg-white text-black rounded-md p-5 shadow">
          <h2 className="text-lg font-medium">Approved Request</h2>
          <div className="pt-5">
            <form>
              <div className="flex gap-3 flex-wrap w-full items-center justify-between">
                <input
                  type="number"
                  min="0"
                  className="rounded-xl px-6 py-2 md:w-[81%] w-[70%]  text-black font-light text-[13px]
                                outline-none border focus:border-[#3948ab] focus:bg-white
                                overflow-hidden focus:text-[#000000]"
                  placeholder="Enter Amount"
                  name="amount"/>
                <button
                  className="bg-[#3948ab] rounded-md px-5 py-2 text-xs text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <h2 className="text-sm font-normal pt-4">Success Withdrawl</h2>
          <div className="grid grid-cols-4 gap-2 uppercase text-xs font-medium text-gray-800 p-2 mt-4 border-t border-b border-gray-200">
                    <div className="text-center">S.NO</div>
                    <div className="text-center">Amount</div>
                    <div className="text-center">Status</div>
                    <div className="text-center">Date</div>
                    
                  </div>
                  {/* Table Rows */}
                  <div className="w-full">
                    <List
                      style={{ minWidth: "340px" }}
                      className="List"
                      height={250}
                      itemCount={20}
                      itemSize={42}
                      outerElementType={outerElementType}
                    >
                      {Row}
                    </List>
                  </div>
        </div>

      </div>
    </div>
  );
};

export default Payments;
