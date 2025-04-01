import React, { useState } from "react";
import { MdOutlineSettings, MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { RiAttachment2 } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { IoSendOutline } from "react-icons/io5";

const SellerToCustomer = () => {
  const [showInbox, setShowInbox] = useState(false); // For small screens toggle

  return (
    <div className="py-6">
      <div className="w-full p-4 bg-white">
        {/* Toggle button visible on small screens */}
        <div className="block lg:hidden mb-4">
          <button
            onClick={() => setShowInbox(!showInbox)}
            className="text-gray-700 p-2 border rounded"
          >
            <MdMenu size={24} />
          </button>
        </div>

        <div className="w-full flex flex-wrap">
          {/* First Section: Inbox */}
          <div
            className={`w-full lg:w-4/12 p-2 ${
              showInbox ? "block" : "hidden"
            } lg:block`}
          >
            <div className="w-full p-2 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-sm font-semibold">Inbox</h1>
                  <span className="bg-[#ced4fa46] p-2 pr-2 rounded-lg text-[10px] font-bold text-[#3948ab]">
                    2 New
                  </span>
                </div>
                <MdOutlineSettings className="w-[20px] h-[20px]" />
              </div>
              <div className="relative w-full mt-5">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  name="search"
                  placeholder="Search chat"
                  className="block w-full pl-10 pr-3 py-2 border font-light border-gray-200 rounded-full placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#3938ab] focus:border-[#3938ab] text-xs"
                />
              </div>
              <div className="w-full mt-5 shadow rounded-md p-2 max-h-[489px] overflow-y-auto space-y-4">
                {/* Chat item 1 */}
                <div className="w-full pb-5 border-b pt-2">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="flex items-center gap-1">
                        <GoDotFill className="text-[#3948ab]" />
                        <div className="w-10 h-10 rounded-full">
                          <img
                            className="w-[40px] h-[40px] rounded-full overflow-hidden"
                            src="http://localhost:3000/admin.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="justify-between">
                        <h1 className="text-sm font-semibold">John Cooper</h1>
                        <p className="text-xs font-light text-gray-400">
                          ID #345245
                        </p>
                      </div>
                    </div>
                    <h1 className="text-xs font-medium text-gray-300">5m</h1>
                  </div>
                  <div className="w-full mt-5 pl-6">
                    <p className="text-xs font-medium text-gray-800">
                      Hello, Will this item be shipped today?
                    </p>
                  </div>
                </div>
                {/* Chat item 2 */}
                <div className="w-full mt-5 pb-5 border-b">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="flex items-center gap-1">
                        <GoDotFill className="text-[#3948ab]" />
                        <div className="w-10 h-10 rounded-full">
                          <img
                            className="w-[40px] h-[40px] rounded-full overflow-hidden"
                            src="https://img.freepik.com/premium-photo/young-man-with-backpack-mobile-phone-his-hand-3d-illustration_1057-45364.jpg?w=360"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="justify-between">
                        <h1 className="text-sm font-semibold">John Cooper</h1>
                        <p className="text-xs font-light text-gray-400">
                          ID #345245
                        </p>
                      </div>
                    </div>
                    <h1 className="text-xs font-medium text-gray-300">5m</h1>
                  </div>
                  <div className="w-full mt-5">
                    <p className="text-xs font-medium pl-6 text-gray-800">
                      Hello, Will this item be shipped today?
                    </p>
                  </div>
                </div>
                {/* Chat item 3 */}
                <div className="w-full mt-5 pb-5 border-b">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="flex items-center gap-1">
                        <GoDotFill className="text-[#3948ab]" />
                        <div className="w-10 h-10 rounded-full">
                          <img
                            className="w-[40px] h-[40px] rounded-full overflow-hidden"
                            src="https://icons8.com/l/3d/images/3_2_with_phone_girl_1.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="justify-between">
                        <h1 className="text-sm font-semibold">John Cooper</h1>
                        <p className="text-xs font-light text-gray-400">
                          ID #345245
                        </p>
                      </div>
                    </div>
                    <h1 className="text-xs font-medium text-gray-300">5m</h1>
                  </div>
                  <div className="w-full mt-5">
                    <p className="text-xs font-medium pl-6 text-gray-800">
                      Hello, Will this item be shipped today?
                    </p>
                  </div>
                </div>
                {/* Chat item 4 */}
                <div className="w-full mt-5 pb-5 border-b">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="flex items-center gap-1">
                        <GoDotFill className="text-[#3948ab]" />
                        <div className="w-10 h-10 rounded-full">
                          <img
                            className="w-[40px] h-[40px] rounded-full overflow-hidden"
                            src="https://icons8.com/l/3d/images/5_applause_girl_2_2.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="justify-between">
                        <h1 className="text-sm font-semibold">John Cooper</h1>
                        <p className="text-xs font-light text-gray-400">
                          ID #345245
                        </p>
                      </div>
                    </div>
                    <h1 className="text-xs font-medium text-gray-300">5m</h1>
                  </div>
                  <div className="w-full mt-5">
                    <p className="text-xs font-medium pl-6 text-gray-800">
                      Hello, Will this item be shipped today?
                    </p>
                  </div>
                </div>
                {/* Chat item 5 */}
                <div className="w-full mt-5 pb-5 border-b">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="flex items-center gap-1">
                        <GoDotFill className="text-[#3948ab]" />
                        <div className="w-10 h-10 rounded-full">
                          <img
                            className="w-[40px] h-[40px] rounded-full overflow-hidden"
                            src="https://icons8.com/l/3d/images/1_with_coffee_girl_2.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="justify-between">
                        <h1 className="text-sm font-semibold">John Cooper</h1>
                        <p className="text-xs font-light text-gray-400">
                          ID #345245
                        </p>
                      </div>
                    </div>
                    <h1 className="text-xs font-medium text-gray-300">5m</h1>
                  </div>
                  <div className="w-full mt-5">
                    <p className="text-xs font-medium pl-6 text-gray-800">
                      Hello, Will this item be shipped today?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second section */}
          <div className="w-full lg:w-8/12 p-2">
            <div className="w-full rounded-t-3xl shadow">
              <div>
                {/* header section */}
                <div className="shadow-xl rounded-t-3xl p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center gap-1">
                        <div className="w-10 h-10 rounded-full">
                          <img
                            className="w-[40px] h-[40px] rounded-full overflow-hidden"
                            src="https://img.freepik.com/premium-photo/young-man-with-backpack-mobile-phone-his-hand-3d-illustration_1057-45364.jpg?w=360"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="justify-between">
                        <h1 className="text-sm font-semibold">John Cooper</h1>
                        <p className="text-xs font-light text-gray-400">
                          ID #345245
                        </p>
                      </div>
                    </div>
                    <PiDotsThreeOutlineVertical className="text-gray-400" />
                  </div>
                </div>

                {/* chat section */}
                <div className="mt-1 pt-4 pb-4">
                  {/* date */}
                  <div className="w-full flex justify-center mt-4 ">
                    <h1 className="text-center text-[10px] rounded-md px-3 py-1 bg-gray-100 text-gray-400 font-semibold">
                      August 21
                    </h1>
                  </div>

                  {/* chat section */}
                  <div className="mt-5 px-4  justify-center">
                    {/* seller message */}
                    <div className="flex gap-2">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src="https://img.freepik.com/premium-photo/young-man-with-backpack-mobile-phone-his-hand-3d-illustration_1057-45364.jpg?w=360"
                          alt="User Avatar"
                        />
                      </div>
                      {/* Message */}
                      <div className="flex flex-col">
                        <div className="w-[80%] bg-white border border-[#3948ab6f] p-4 rounded-br-xl rounded-bl-xl rounded-tr-xl shadow">
                          <p className="text-xs text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magni eius dolor neque blanditiis architecto
                            optio earum, provident itaque ipsum, perferendis
                            placeat, nam blanditiis!
                          </p>
                        </div>
                        <span className="mt-2 text-[9px] text-gray-500">
                          12:30 PM
                        </span>
                      </div>
                    </div>
                    {/* Reply Content */}
                    <div className="flex mt-4">
                      <div className="flex gap-2">
                        <div className="flex flex-col items-end">
                          <div className="w-[80%] bg-[#3948ab] text-white border border-[#3948ab] p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-md">
                            <p className="text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Expedita, reprehenderit sit beatae explicabo
                              provident atque!
                            </p>
                          </div>
                          <span className="mt-2 text-[9px] text-gray-500">
                            12:32 PM
                          </span>
                        </div>
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="http://localhost:3000/admin.webp"
                            alt="User Avatar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center mt-4">
                      <h1 className="text-center text-[10px] rounded-md px-3 py-1 bg-gray-100 text-gray-400 font-semibold">
                        August 21
                      </h1>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br /> <br /> <br />
                    <div className="relative w-full ">
                      <input
                        type="text"
                        name="search"
                        placeholder="Write a message"
                        className="block w-full pr-10 pb-3 pt-3 pl-3 py-2 border font-light border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3938ab] focus:border-[#3938ab] text-xs"
                      />
                      <div className="absolute inset-y-0 gap-1.5 right-0 pr-3 flex items-center text-gray-400">
                        <RiAttachment2 />
                        <BsEmojiSmile />
                        <div className="bg-[#3948ab] p-1.5 rounded-lg text-white">
                          <IoSendOutline />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* third section  */}
        </div>
      </div>
    </div>
  );
};

export default SellerToCustomer;
