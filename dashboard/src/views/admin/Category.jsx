import React from "react";
import "@fontsource/poppins";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from "../Pagination";
import { MdCategory, MdOutlineEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utilities/utlis";
import {
  categoryAdd,
  messageClear,
  get_category,
} from "../../store/reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Search2 from "../component/Search2";

const Category = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage, categories,totalCategory } = useSelector(
    (state) => state.category
  );

  

  const [isOpen, setIsOpen] = useState(false); //used for modal
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerpage] = useState(4); //4 prod on one page
  const [currentPage, setCurrentPage] = useState(1); //used for pagination
  const [show, setShow] = useState(false); //for dropdown menu in action's next column
  const [imageShow, setImage] = useState("");

  const [state, setState] = useState({
    name: "",
    image: "",
    price: "",           
    description: "", 

  });

  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };

  const add_category = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state));
    console.log(state);
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        image: "",
        price: "",
        description: "",
      });
      setImage("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {
    const obj = {
      perpage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_category(obj));
  }, [searchValue, currentPage, perPage]);


  return (
    <div className="px-4 sm:px-6 lg:px-12 pt-9">
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
      <div className="flex flex-col sm:flex-row  sm:items-center justify-center  gap-3 w-full max-w-5xl mx-auto px-4 pt-6">
        <div>
          <Search2
            setPerpage={setPerpage}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          + Add Category
        </button>
      </div>

      <br />
      <div className="flex flex-wrap justify-center p-4 bg-white rounded-md">
  {categories.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((card) => (
        <div
          key={card.id}
          className="bg-white w-full max-w-xs rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {/* Image Wrapper */}
          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />

            {/* Floating Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-transform duration-300 hover:scale-110">
                <MdOutlineEdit size={18} className="text-gray-700" />
              </div>
              <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={18} className="text-gray-700" />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-gray-900 truncate w-3/4">
                {card.name}
              </h3>
              <span className="text-sm font-medium text-green-600">${card.price}</span>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center text-center my-20 w-full">
      <MdCategory size={50} className="text-gray-400 mb-4" />
      <p className="text-xl font-semibold text-gray-600">No categories found</p>
      <p className="text-sm text-gray-500 mt-1">Try adding a new category or refine your search.</p>
    </div>
  )}
</div>

      {/* pagination */}

      <div className="flex justify-center  items-center mt-5">
      
        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={totalCategory}
          perPage={perPage}
          showItem={3}
          
        />
      </div>

      {/* Modal Component */}
      {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="bg-white shadow-2xl rounded-3xl px-8 py-6 w-[420px] relative animate-fade-in">
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-all duration-200"
      >
        <IoCloseOutline className="w-6 h-6" />
      </button>

      {/* Modal Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add New Category
      </h2>

      {/* Form */}
      <form onSubmit={add_category} className="space-y-4">
        {/* Category Name Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Category Name
          </label>
          <input
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            type="text"
            placeholder="Enter category name..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Price
          </label>
          <input
            value={state.price}
            onChange={(e) => setState({ ...state, price: e.target.value })}
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Description
          </label>
          <textarea
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            placeholder="Enter description..."
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold text-gray-600 mb-2">
            Upload Image
          </label>
          <label
            htmlFor="image"
            className="w-full h-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-500 transition-all duration-300 overflow-hidden bg-gray-50"
          >
            {imageShow ? (
              <img
                src={imageShow}
                alt="Preview"
                className="h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400">
                <IoImageOutline className="text-3xl mb-1" />
                <span>Select Image</span>
              </div>
            )}
            <input
              onChange={imageHandle}
              className="hidden"
              type="file"
              name="image"
              id="image"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            disabled={loader}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
              loader
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {loader ? (
              <PropagateLoader color="#ffffff" cssOverride={overrideStyle} />
            ) : (
              "Add Category"
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default Category;

// In the above code, we have created a simple category page with some dummy data. We have also added a modal to add a new category.
// Now, we need to add the  Category  component to the  App.js  file.
