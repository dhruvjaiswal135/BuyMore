import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
const DeactiveSeller = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);
    return (
        <div className=" px-4 py-9">
            <div className="bg-white p-4 rounded-md shadow border border-gray-200">
                <div className="flex justify-between items-center gap-3 ">
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

                <div className="relative overflow-x-auto">
                    <table className="w-full mt-5 font-light text-xs text-left text-[#000000]">
                        <thead className="text-xs text-[#000000] uppercase border-b">
                            <tr>
                                <th scope="col" className="py-3 px-4 font-medium text-center">S.No</th>
                                <th scope="col" className="py-3 px-4 font-medium text-center">Image</th>
                                <th scope="col" className="py-3 px-4 font-medium text-center">Name</th>
                                <th scope="col" className="py-3 px-4 font-medium text-center">Shop Name</th>
                                <th scope="col" className="py-3 px-4 font-medium text-center">Payment Status</th>
                                <th scope="col" className="py-3 px-4 font-medium text-center">Email</th>
                                <th scope="col" className="py-3 px-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>


                        <tbody className="uppercase text-xs text-[#000000]  border-b">
                            {[1, 2, 3, 4, 5, 6, 7].map((d, i) => (
                                <tr key={i} className="border-b">
                                    <td
                                        scope="row"
                                        className="py-1 px-4 text-xs text-gray-400 text-center font-light whitespace-nowrap"
                                    >
                                        {i + 1}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-1 px-4 text-center font-light whitespace-nowrap"
                                    >
                                        <img
                                            className="w-[45px] text-center h-[45px] rounded-xl"
                                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-0c3Ol60ZQVThV9KvzXTzisbx_4QzjtF2oNPmQHu4eOa23OVDYVX4xSwmYgO024fvjJRtEMPN__BX9Z806anSMt19kFn55GK5LCuyroF0"
                                            alt=""
                                        />
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-1 text-center px-4 font-light whitespace-nowrap"
                                    >
                                        FaceWash{" "}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-1 px-4 text-center text-xs font-light whitespace-nowrap"
                                    >
                                        BuyMore
                                    </td>
                                    <td scope="row" className="px-4 text-center font-normal   text-red-700">
                                        <div className="flex justify-center items-center gap-2">
                                            <span>
                                                <GoDotFill />
                                            </span>
                                            <span>PENDING</span>
                                        </div>{" "}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-1 px-4 text-center font-light whitespace-nowrap"
                                    >
                                        buymore@gmail.com{" "}
                                    </td>



                                    <td
                                        scope="row"
                                        className="py-1 px-4 font-light whitespace-nowrap text-center"
                                    >
                                        <div className="flex items-center justify-center gap-4">
                                            <Link
                                                to={`/admin/dashboard/seller/details/${d._id}`}
                                                className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                                            >
                                                <FaEye />
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

export default DeactiveSeller;
