import React from "react";
import "@fontsource/poppins";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from "../Pagination";
import { MdOutlineEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);  //used for modal
  const [perpage, setPerpage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1); //used for pagination
  const [show, setShow] = useState(false); //for dropdown menu in action's next column

  return (
    <div className="px-4 sm:px-6 lg:px-12 pt-9 ">
      <div className="text-center">
        <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl">
          Connect the best tools <br className="hidden sm:block" />
          together to make your life easy.
        </h1>
        <br />
        <h1 className="text-base sm:text-lg font-normal">
          Bring the best experience across the internet at one place{" "}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row pt-6 gap-3 w-full sm:w-4/5 md:w-3/5 justify-center mx-auto items-center">
        <div className="relative w-full sm:w-3/5">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch />
          </span>
          <input
          
            className="rounded-full px-12 py-2 w-full text-black font-light text-[13px]
                                  outline-none border focus:border-[#3948ab] focus:bg-white
                                  overflow-hidden focus:text-[#000000] focus:text-opacity-5 
                                  pl-10"
            type="text"
            name="search"
            placeholder="Search by order id, product, category or others..."
          />
        </div>

        <div>
          <button
            onClick={() => setIsOpen(true)} // Open modal on click
            className="bg-black text-[13px] text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            + Add Category
          </button>
        </div>
        <select
          onChange={(e) => setPerpage(parseInt(e.target.value))}
          className="px-4 py-2 bg-black  font-light text-[13px]
                    outline-none rounded-full text-white"
        >
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <br />
      <div className="flex flex-wrap">
        <div className=" flex-wrap flex gap-6 justify-center p-4 bg- rounded-md">
          {/* this is for category card */}

          {/* cate-1 */}
          <div className=" w-56 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative w-56  rounded-2xl overflow-hidden  transition-all duration-300 ">
              {/* Image with Overlay Effect */}
              <div className="relative w-full h-64">
                <img
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrl0hkvwaUZJCKMsus_KjQdVpxDiikwgKOBt3ZsZA0IoVuo6b8JgOV21Wt2CpTeRMYpEDu_UiO3ksQIjC8ux05IXOiYqfTnrLpenEdfEs"
                  className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110 "
                />
              </div>

              {/* Floating Plus Button */}
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100">
                <MdOutlineEdit size={18} className="text-gray-700" />
              </div>
              <div className="absolute top-14 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={18} className="text-gray-700" />
              </div>
            </div>

            {/* Text & Icon Section */}
            <div className="p-2  w-56 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900 w-40">
                    Foxtale Cleanser
                  </h3>
                  <h3>$450</h3>
                </div>
              </div>
              <p className="text-gray-500 text-xs w-40 mt-1">
                With an Upgraded Unique Pulsation Technique
              </p>
            </div>
          </div>

          {/* cate-2 */}

          <div className=" w-56 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative w-56  rounded-2xl overflow-hidden  transition-all duration-300 ">
              {/* Image with Overlay Effect */}
              <div className="relative w-full h-64">
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaMbaUROi5ivvnxf95zzjBa15aw0iiCbkSO45lil-PoKFplMVIK4JKXDy4EaE5yqoJybWPd4RxxgMmyDUdKp90GitOwABOyD611kW7j_Ee"
                  className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110 "
                />
              </div>

              {/* Floating Plus Button */}
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100">
                <MdOutlineEdit size={18} className="text-gray-700" />
              </div>
              <div className="absolute top-14 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={18} className="text-gray-700" />
              </div>
            </div>

            {/* Text & Icon Section */}
            <div className="p-2  w-56 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900 w-40">
                    Foxtale Cleanser
                  </h3>
                  <h3>$450</h3>
                </div>
              </div>
              <p className="text-gray-500 text-xs w-40 mt-1">
                With an Upgraded Unique Pulsation Technique
              </p>
            </div>
          </div>

          {/* cate-3 */}

          <div className=" w-56 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative w-56  rounded-2xl overflow-hidden  transition-all duration-300 ">
              {/* Image with Overlay Effect */}
              <div className="relative w-full h-64">
                <img
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4Fj8Th39lco-NVQC4TTVuBurjFPn0SNiyThaQzQU1zJJUrjHB5ze9f2cc1383v8kWtQRddt8QMzhG4XX54QW20rPd_p2522s3JinscegZ0fAVXYmxMyO1gw"
                  className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110 "
                />
              </div>

              {/* Floating Plus Button */}
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100">
                <MdOutlineEdit size={18} className="text-gray-700" />
              </div>
              <div className="absolute top-14 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={18} className="text-gray-700" />
              </div>
            </div>

            {/* Text & Icon Section */}
            <div className="p-2  w-56 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900 w-40">
                    Foxtale Cleanser
                  </h3>
                  <h3>$450</h3>
                </div>
              </div>
              <p className="text-gray-500 text-xs w-40 mt-1">
                With an Upgraded Unique Pulsation Technique
              </p>
            </div>
          </div>

          {/* cate-4 */}
          <div className=" w-56 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative w-56  rounded-2xl overflow-hidden  transition-all duration-300 ">
              {/* Image with Overlay Effect */}
              <div className="relative w-full h-64">
                <img
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-0c3Ol60ZQVThV9KvzXTzisbx_4QzjtF2oNPmQHu4eOa23OVDYVX4xSwmYgO024fvjJRtEMPN__BX9Z806anSMt19kFn55GK5LCuyroF0"
                  className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110 "
                />
              </div>

              {/* Floating Plus Button */}
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100">
                <MdOutlineEdit size={18} className="text-gray-700" />
              </div>
              <div className="absolute top-14 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={18} className="text-gray-700" />
              </div>
            </div>

            {/* Text & Icon Section */}
            <div className="p-2  w-56 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900 w-40">
                    Foxtale Cleanser
                  </h3>
                  <h3>$450</h3>
                </div>
              </div>
              <p className="text-gray-500 text-xs w-40 mt-1">
                With an Upgraded Unique Pulsation Technique
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}

      <div className="flex justify-center  items-center mt-5">
        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={50}
          perPage={perpage}
          showItem={3}
        />
      </div>

      {/* Modal Component */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
          {/* Modal Container */}
          <div className="bg-white shadow-xl rounded-2xl p-6 w-[400px] relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 transition"
            >
              <IoCloseOutline className="w-6 h-6" />
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Add New Category
            </h2>

            {/* Category Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter category name..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3948ab] transition"
              />
            </div>

            {/* Image Upload Section */}
            <div className="mb-4 flex flex-col items-center">
              <label className="block text-gray-700 font-medium mb-2">
                Upload Image
              </label>
              <div htmlFor="image" className="w-full h-32 gap-2 items-center justify-center flex border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-[#3948ab] transition">
                <label htmlFor="image">
                <input className="hidden" type="file" name="image" id="image" />
                <span ><IoImageOutline className="justify-center w-full" /></span>
                <span className="text-gray-500 "> Select Image</span>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex justify-end gap-4 mt-6">
              
              <button className="px-5 w-full py-2 rounded-lg bg-[#3948ab] text-white hover:bg-[#2f3c8e] transition">
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;

// In the above code, we have created a simple category page with some dummy data. We have also added a modal to add a new category.
// Now, we need to add the  Category  component to the  App.js  file.
