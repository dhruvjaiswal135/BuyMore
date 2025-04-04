import React from "react";
import { FaTimes } from "react-icons/fa";
const OrderDetails = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:max-w-4xl p-6 border-[#3948ab] animate-modalIn">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-[#3948ab]">Order Details</h1>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            <FaTimes size={18} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row text-gray-800 gap-6">
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
            <div>
              <img
                className="w-28 h-28 shadow-lg rounded-full border border-gray-100"
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrl0hkvwaUZJCKMsus_KjQdVpxDiikwgKOBt3ZsZA0IoVuo6b8JgOV21Wt2CpTeRMYpEDu_UiO3ksQIjC8ux05IXOiYqfTnrLpenEdfEs"
                alt="Seller"
              />
            </div>
            <div className="flex flex-col items-center text-center mt-3">
              <h1 className="text-xs font-semibold text-[#3948ab]">
                Foxtale Cleanser
              </h1>
              <h1 className="text-xs font-medium">Brand: Easy</h1>
              <h1 className="text-xs font-medium">Quantity: 03</h1>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-2">
            <h2 className="text-md font-semibold mb-2 border-b pb-1 border-gray-300">
              Basic Info
            </h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Order Id:</span>
                <span className="text-gray-800">#394675</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Delivered to:</span>
                <span className="text-gray-800">John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Role:</span>
                <span className="text-gray-800">Seller</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Price:</span>
                <span className="text-black">$4565</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Payment Status:</span>
                <span className="text-green-600">Paid</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <h2 className="text-md font-semibold mb-2 border-b pb-1 border-gray-300">
              Address
            </h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Shop Name:</span>
                <span className="text-gray-800">Doe's Shop</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">ZIP Code:</span>
                <span className="text-gray-800">110933</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">Division:</span>
                <span className="text-gray-800">Central</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">District:</span>
                <span className="text-gray-800">Main District</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">State:</span>
                <span className="text-gray-800">California</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t pt-4 flex flex-col sm:flex-row justify-end items-center gap-4">
          <select
            name=""
            id=""
            className="px-3 py-2 border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3948ab] transition text-sm"
            required
          >
            <option value="">--Select Status--</option>
            <option value="active">Pending</option>
            <option value="deactive">Processing</option>
            <option value="deactive">Warehouse</option>
            <option value="deactive">Placed</option>
            <option value="deactive">Cancelled</option>
          </select>
          <button
            type="button"
            className="bg-[#3948ab] hover:bg-blue-700 text-white rounded-md px-6 py-2 transition text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
