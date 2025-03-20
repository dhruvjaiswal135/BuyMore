import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
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
              placeholder="Search by order id, product, category or others..."
            />
          </div>
          <select
            onChange={(e) => setPerpage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-[#3948ab] focus:bg-white font-light text-[13px]
                            outline-none bg-gray-50 border rounded-md text-black"
          >
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <div
            className="px-4 py-2 flex items-center gap-3 focus:border-[#3948ab] focus:bg-white font-light text-[13px]
                            outline-none bg-gray-50 border rounded-md text-black"
          >
            <span>
              <IoDownloadOutline />
            </span>
            <span>Download</span>
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full mt-5 font-light text-xs text-left text-[#000000]">
            <thead className="text-xs  text-[#000000] uppercase border-b ">
              <tr>
                <th scope="col" className="py-3 px-4 font-medium">
                  No
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Image
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Name
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Shop Name
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Email
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Division
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  District
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="uppercase text-xs text-[#000000]  border-b">
              {[1, 2, 3, 4, 5, 6, 7].map((d, i) => (
                <tr key={i} className="border-b">
                  <td
                    scope="row"
                    className="py-1 px-4 text-xs font-light whitespace-nowrap"
                  >
                    {i + 1}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap"
                  >
                    <img
                      className="w-[45px] h-[45px] rounded-xl"
                      src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-0c3Ol60ZQVThV9KvzXTzisbx_4QzjtF2oNPmQHu4eOa23OVDYVX4xSwmYgO024fvjJRtEMPN__BX9Z806anSMt19kFn55GK5LCuyroF0"
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap"
                  >
                    FaceWash{" "}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 text-xs font-light whitespace-nowrap"
                  >
                    BuyMore
                  </td>
                  <td scope="row" className="px-4 font-normal   text-red-700">
                    <div className="flex items-center gap-2">
                      <span>
                        <GoDotFill />
                      </span>
                      <span>PENDING</span>
                    </div>{" "}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap"
                  >
                    buymore@gmail.com{" "}
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap"
                  >
                    Delhi{" "}
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap"
                  >
                    Mayur Vihar{" "}
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/admin/dashboard/seller/details/${d._id}`}
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      >
                        {" "}
                        <FaEye />{" "}
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perpage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Sellers;
