import React, { useEffect, useState } from "react";
import Search2 from "../component/Search2";
import { MdCategory,MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Pagination from "../Pagination";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../store/reducers/productReducer";

// Product Data (Example)
// const products = [
//   {
//     id: 1,
//     name: "Foxtale Cleanser",
//     price: "$450",
//     image:
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrl0hkvwaUZJCKMsus_KjQdVpxDiikwgKOBt3ZsZA0IoVuo6b8JgOV21Wt2CpTeRMYpEDu_UiO3ksQIjC8ux05IXOiYqfTnrLpenEdfEs",
//     stock: 4,
//     description: "With an Upgraded Unique Pulsation Technique",
//   },
//   {
//     id: 2,
//     name: "Foxtale Cleanser",
//     price: "$450",
//     image:
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaMbaUROi5ivvnxf95zzjBa15aw0iiCbkSO45lil-PoKFplMVIK4JKXDy4EaE5yqoJybWPd4RxxgMmyDUdKp90GitOwABOyD611kW7j_Ee",
//     stock: 8,
//     description: "With an Upgraded Unique Pulsation Technique",
//   },
//   {
//     id: 3,
//     name: "Foxtale Cleanser",
//     price: "$450",
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4Fj8Th39lco-NVQC4TTVuBurjFPn0SNiyThaQzQU1zJJUrjHB5ze9f2cc1383v8kWtQRddt8QMzhG4XX54QW20rPd_p2522s3JinscegZ0fAVXYmxMyO1gw",
//     stock: 8,
//     description: "With an Upgraded Unique Pulsation Technique",
//   },
//   {
//     id: 4,
//     name: "Foxtale Cleanser",
//     price: "$450",
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-0c3Ol60ZQVThV9KvzXTzisbx_4QzjtF2oNPmQHu4eOa23OVDYVX4xSwmYgO024fvjJRtEMPN__BX9Z806anSMt19kFn55GK5LCuyroF0",
//     stock: 5,
//     description: "With an Upgraded Unique Pulsation Technique",
//   },
// ];

const Product = () => {
  const dispatch = useDispatch();
  const { products,totalProduct } = useSelector(
     (state) => state.product
  );

  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_products(obj));
  }, [searchValue, currentPage, perPage]);


  return (
    <div className="px-4 py-9">
      <div className="w-full p-4 bg-white">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl mb-2">
            All Products
          </h1>
          <h1 className="text-base sm:text-lg font-normal">
            Bring the best experience across the internet at one place
          </h1>
        </div>

        {/* Search Component */}
        <div className="w-full flex justify-center pt-6">
  <div className="w-full max-w-xl">
    <Search2
      setPerpage={setPerPage}
      setSearchValue={setSearchValue}
      searchValue={searchValue}
    />
  </div>
</div>

        {/* Product List */}
        {products.length > 0 ? (
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
  {products.map((product) => (
    <div
      key={product._id}
      className="relative w-56 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      {/* Image Section */}
      <div className=" w-56 rounded-2xl overflow-hidden transition-all duration-300">
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 z-10">
          {product.discountpercentage > 0 ? (
            <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-[2px] rounded-full shadow-md animate-pulse">
              -{product.discountpercentage}%
            </div>
          ) : (
            <div className="bg-gray-200 text-gray-700 text-[10px] font-semibold px-2 py-[2px] rounded-full shadow-sm italic">
              No Discount
            </div>
          )}
        </div>

        <div className="relative w-full h-64">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Floating Dropdown */}
        <div className="absolute top-4 right-3">
          <button
            className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100 flex items-center justify-center"
            onClick={() =>
              setOpenDropdown(openDropdown === product._id ? null : product._id)
            }
          >
            <FiMoreHorizontal size={14} className="text-gray-700" />
          </button>

          {/* Dropdown Menu */}
          {openDropdown === product._id && (
            <div className="absolute right-0 mt-2 flex flex-col gap-2 bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-100 scale-100">
              <Link className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100 flex items-center justify-center">
                <AiOutlineEye size={14} className="text-gray-700" />
              </Link>
              <Link
                to={`/seller/dashboard/edit-product/${product._id}`}
                className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform 
                duration-300 hover:scale-110 hover:bg-gray-100 flex items-center justify-center"
              >
                <MdOutlineEdit size={14} className="text-gray-700" />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform 
              duration-300 hover:scale-110 hover:bg-gray-100 flex items-center justify-center">
                <AiOutlineDelete size={14} className="text-gray-700" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3 w-56 transition-all duration-300 bg-white shadow-md rounded-lg">
        {/* Product Name & Price */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900 truncate max-w-[120px]">
            {product.name}
          </h3>
          <span className="text-sm font-semibold text-green-600 whitespace-nowrap">
            ${product.baseprice}
          </span>
        </div>

        {/* Product Description */}
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Stock Information */}
        <div className="flex items-center justify-between border-t pt-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-700">
              Stock Left:
            </span>
            <span className="text-xs font-bold text-red-600">
              {product.stock}
            </span>
          </div>
          <div className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md">
            {product.stock > 5 ? "In Stock" : "Low Stock"}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
) : (
    <div className="flex flex-col items-center justify-center text-center my-20 w-full">
      <MdCategory size={50} className="text-gray-400 mb-4" />
      <p className="text-xl font-semibold text-gray-600">No products found</p>
      <p className="text-sm text-gray-500 mt-1">Try adding a new product or refine your search.</p>
    </div>
  )}


        {/* Pagination */}
        {
          totalProduct<=perPage? " ":<div className="flex justify-center items-center mt-5">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
        }
      </div>
    </div>
  );
};

export default Product;
