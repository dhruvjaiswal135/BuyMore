import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Pagination from "../Pagination";
import Search1 from "../component/Search1";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ordersData = [
    {
      id: "#34543",
      price: "$458",
      paymentStatus: "Pending",
      orderStatus: "Pending",
    },
    {
      id: "#67890",
      price: "$512",
      paymentStatus: "Completed",
      orderStatus: "Shipped",
    },
    {
      id: "#12345",
      price: "$299",
      paymentStatus: "Pending",
      orderStatus: "Processing",
    },
    {
      id: "#54321",
      price: "$150",
      paymentStatus: "Completed",
      orderStatus: "Delivered",
    },
    {
      id: "#78901",
      price: "$699",
      paymentStatus: "Pending",
      orderStatus: "Pending",
    },
  ];

  return (
    <div className="px-4 py-9">
      <div className="w-full p-4 shadow rounded-md bg-white border border-gray-200">
        <div className="relative overflow-x-auto">
          <div className="w-full text-xs text-left">
            <Search1
              setPerpage={setPerPage}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
            <div className="text-[#000000] mt-5 uppercase border-b">
              <div className="flex justify-between items-center">
                {[
                  "Order Id",
                  "Price",
                  "Payment Status",
                  "Order Status",
                  "Action",
                ].map((header) => (
                  <div
                    key={header}
                    className="py-3 w-[25%] text-center font-medium"
                  >
                    {header}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {ordersData.map((order, index) => (
            <div
              key={index}
              className="text-xs text-[#000000] text-center uppercase border-b"
            >
              <div className="py-1 flex justify-between items-start">
                <div className="py-3 w-[25%] text-gray-400 font-normal">
                  {order.id}
                </div>
                <div className="py-3 w-[25%] font-light">{order.price}</div>
                <div
                  className={`flex justify-center items-center gap-2 py-3 w-[25%] font-normal ${
                    order.paymentStatus === "Pending"
                      ? "text-red-700"
                      : "text-green-700"
                  }`}
                >
                  <span>
                    <GoDotFill />
                  </span>
                  {order.paymentStatus}
                </div>
                <div
                  className={`flex justify-center items-center gap-2 py-3 w-[25%] font-normal ${
                    order.orderStatus === "Pending"
                      ? "text-red-700"
                      : "text-blue-700"
                  }`}
                >
                  <span>
                    <GoDotFill />
                  </span>
                  {order.orderStatus}
                </div>
                <div className="py-3 w-[25%] font-light">
                  <Link onClick={() => setIsModalOpen(true)}>
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        <IoDocumentAttachOutline />
                      </span>
                      <h1>View</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-end items-center mt-5">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              perPage={perPage}
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <OrderDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Orders;
