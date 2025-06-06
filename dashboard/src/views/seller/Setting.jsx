//image can be added 178

import React from "react";
import { CiEdit } from "react-icons/ci";

const Setting = () => {
    const status ='active'
  return (
    <div className="px-2 sm:px-6 lg:px-4 py-9">
      <div className="w-full p-4 rounded-md ">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-50 rounded-lg shadow-md gap-4">
          <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
            <div className="flex items-center gap-4 sm:gap-8">
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/young-man-with-backpack-mobile-phone-his-hand-3d-illustration_1057-45364.jpg?w=360"
                  className="h-16 w-16 rounded-full"
                  alt="Profile"
                />
              </div>
              <div>
                <h1>John Cooper</h1>
                <h1 className="text-xs font-normal text-gray-500">Seller</h1>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#3948ab] rounded-md px-5 py-2 text-xs text-white">
                Save Changes
              </button>
              <button className="rounded-md px-3 py-2 text-xs text-red-700 border border-red-700">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-7/12 p-4 shadow-md rounded-md border mt-5 border-gray-50">
            <div className="flex justify-between">
              <h1>Personal Information</h1>
              <button className="flex items-center gap-1 text-xs py-1 px-3 border rounded-2xl text-gray-400 font-normal">
                Edit <CiEdit />
              </button>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h1 className="text-gray-400 text-sm">First Name</h1>
                  <h1 className="text-sm mt-1">John</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Last Name</h1>
                  <h1 className="text-sm mt-1">Cooper</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Email</h1>
                  <h1 className="text-sm mt-1">seller@gmail.com</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Role</h1>
                  <h1 className="text-sm mt-1">Seller</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Status</h1>
                  <h1 className="text-sm mt-1">Active</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Payment Account</h1>
                  <p>
                    {
                        status === 'active' ? <span className="rounded-lg bg-yellow-300 text-yellow-700
                        text-xs font-normal  px-2 py-1">
                            Pending</span> : <span className="rounded-lg bg-blue-700 text-white
                        text-xs font-normal px-2 py-1">
                            Click Active</span>
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 p-4 shadow-md rounded-md border mt-5 border-gray-50">
            <div className="flex justify-between">
              <h1>Address</h1>
              <button className="flex items-center gap-1 text-xs py-1 px-3 border rounded-2xl text-gray-400 font-normal">
                Edit <CiEdit />
              </button>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h1 className="text-gray-400 text-sm">Country</h1>
                  <h1 className="text-sm mt-1">United Kingdom</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">City/State</h1>
                  <h1 className="text-sm mt-1">Leads, East London</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Postal Code</h1>
                  <h1 className="text-sm mt-1">EST 3457</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Tax ID</h1>
                  <h1 className="text-sm mt-1">AS357589</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Status</h1>
                  <h1 className="text-sm mt-1">Active</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Payment Account</h1>
                  <h1 className="text-sm mt-1">Pending</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-7/12 mt-5 p-4 shadow-md rounded-md border border-gray-50">
            <h1>Change Password</h1>
            <form>
              <div className="flex flex-col w-full mt-3">
                <label
                  htmlFor="Email"
                  className="text-[13px] mb-1 text-gray-500 font-normal"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Enter Email"
                  className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
                />
                <label
                  htmlFor="Password"
                  className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="Enter Old Password"
                  className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
                />
                <label
                  htmlFor="NewPassword"
                  className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="NewPassword"
                  id="NewPassword"
                  placeholder="Enter New Password"
                  className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-5/12 mt-5 p-4 shadow-md rounded-md border border-gray-50">
            <h1>Shop Details</h1>
            <form>
              <div className="flex flex-col w-full mt-3">
                <label
                  htmlFor="ShopName"
                  className="text-[13px] mb-1 text-gray-500 font-normal"
                >
                  Shop Name
                </label>
                <input
                  type="text"
                  name="ShopName"
                  id="ShopName"
                  placeholder="Enter Shop name"
                  className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
                />
                <label
                  htmlFor="DivisionName"
                  className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
                >
                  Division Name
                </label>
                <input
                  type="text"
                  name="DivisionName"
                  id="DivisionName"
                  placeholder="Enter Division Name"
                  className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
                />
                <label
                  htmlFor="DistrictName"
                  className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
                >
                  District Name
                </label>
                <input
                  type="text"
                  name="DistrictName"
                  id="DistrictName"
                  placeholder="Enter District Name"
                  className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
