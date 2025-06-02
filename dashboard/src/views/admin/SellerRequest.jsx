import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { CiSearch, CiSquareAlert } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import SellerDetailsModal from "./SellerDetails";
import Search2 from '../component/Search2';
import {get_seller_request} from "../../store/reducers/sellerReducer";
import { useDispatch, useSelector } from "react-redux";
const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(4);
  const [show, setShow] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {sellers, totalSeller} = useSelector((state) => state.seller);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(get_seller_request({
      perPage,
      page: currentPage,
      searchValue,
    }));
  },[perPage, currentPage, searchValue]);

  return (
    <div className=" px-4 py-9">
      <div className="bg-white p-4 rounded-md shadow border border-gray-200">
        <Search2
        className="mb-4"
            setPerPage={setPerPage}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />

        <div className="relative overflow-x-auto">
          <table className="w-full mt-5 font-light text-xs text-left text-[#000000]">
            <thead className="text-xs text-[#000000] uppercase border-b">
              <tr>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  S.No
                </th>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  Name
                </th>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  Email
                </th>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  Shop Name
                </th>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  Status
                </th>
                <th scope="col" className="py-3 px-4 font-medium text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="uppercase text-xs text-[#000000]  border-b">
              {sellers.map((d, i) => (
                <tr key={i} className="border-b ">
                  <td
                    scope="row"
                    className="py-4 px-4 text-xs text-gray-400 text-center font-light whitespace-nowrap"
                  >
                    {i + 1}
                  </td>

                  <td
                    scope="row"
                    className="py-1 text-center px-4 font-light whitespace-nowrap"
                  >
                    {d.name}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 text-center font-light whitespace-nowrap"
                  >
                    {d.email}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 text-center text-xs font-light whitespace-nowrap"
                  >
                    BuyMore
                  </td>
                  <td
                    scope="row"
                    className="px-4 text-center font-normal   text-gray-500"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <span>
                        <CiSquareAlert />
                      </span>
                      {d.payment}
                    </div>{" "}
                  </td>
                  <td
                    scope="row"
                    className="px-4 text-center font-normal   text-red-700"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <span>
                        <GoDotFill />
                      </span>
                      {d.status}
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-light whitespace-nowrap text-center"
                  >
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => setIsModalOpen(true)} // Open modal on click
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      >
                        <FaEye />
                      </button>
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
      {/* Modal */}
      {isModalOpen && (
        <SellerDetailsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default SellerRequest;
