import React from "react";
import "@fontsource/poppins";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from "../Pagination";
import { MdOutlineEdit } from "react-icons/md";
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
  const { loader, successMessage, errorMessage, categories } = useSelector(
    (state) => state.category
  );

  const [isOpen, setIsOpen] = useState(false); //used for modal
  const [searchValue, setSearchValue] = useState("");
  const [perpage, setPerpage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1); //used for pagination
  const [show, setShow] = useState(false); //for dropdown menu in action's next column
  const [imageShow, setImage] = useState("");

  const [state, setState] = useState({
    name: "",
    image: "",
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
      perpage: parseInt(perpage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_category(obj));
  }, [searchValue, currentPage, perpage]);



  const categoryCards = [
    {
      id: 1,
      title: "Foxtale Cleanser",
      price: "$450",
      description: "With an Upgraded Unique Pulsation Technique",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrl0hkvwaUZJCKMsus_KjQdVpxDiikwgKOBt3ZsZA0IoVuo6b8JgOV21Wt2CpTeRMYpEDu_UiO3ksQIjC8ux05IXOiYqfTnrLpenEdfEs",
    },
    {
      id: 2,
      title: "Foxtale Cleanser",
      price: "$450",
      description: "With an Upgraded Unique Pulsation Technique",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaMbaUROi5ivvnxf95zzjBa15aw0iiCbkSO45lil-PoKFplMVIK4JKXDy4EaE5yqoJybWPd4RxxgMmyDUdKp90GitOwABOyD611kW7j_Ee",
    },
    {
      id: 3,
      title: "Foxtale Cleanser",
      price: "$450",
      description: "With an Upgraded Unique Pulsation Technique",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4Fj8Th39lco-NVQC4TTVuBurjFPn0SNiyThaQzQU1zJJUrjHB5ze9f2cc1383v8kWtQRddt8QMzhG4XX54QW20rPd_p2522s3JinscegZ0fAVXYmxMyO1gw",
    },
    {
      id: 4,
      title: "Foxtale Cleanser",
      price: "$450",
      description: "With an Upgraded Unique Pulsation Technique",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-0c3Ol60ZQVThV9KvzXTzisbx_4QzjtF2oNPmQHu4eOa23OVDYVX4xSwmYgO024fvjJRtEMPN__BX9Z806anSMt19kFn55GK5LCuyroF0",
    },
  ];
  
  

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
      <div className="flex flex-wrap">
      <div className="flex-wrap flex gap-6 justify-center p-4 bg- rounded-md">
         {categoryCards.map((card) => (
        <div
        key={card.id}
        className="w-56 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
        <div className="relative w-56 rounded-2xl overflow-hidden transition-all duration-300">
          {/* Image with Overlay Effect */}
          <div className="relative w-full h-64">
            <img
              src={card.image}
              className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
              alt={card.title}
            />
          </div>

          {/* Floating Buttons */}
          <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gray-100">
            <MdOutlineEdit size={18} className="text-gray-700" />
          </div>
          <div className="absolute top-14 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
            <AiOutlineDelete size={18} className="text-gray-700" />
          </div>
        </div>

        {/* Text Section */}
        <div className="p-2 w-56 transition-all duration-300">
          <div className="flex items-center gap-2 text-gray-500">
            <h3 className="text-lg font-semibold text-gray-900 w-40">
              {card.title}
            </h3>
            <h3>{card.price}</h3>
          </div>
          <p className="text-gray-500 text-xs w-40 mt-1">{card.description}</p>
        </div>
      </div>
    ))}
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
            <div>
              <form onSubmit={add_category}>
                {/* Category Name Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Category Name
                  </label>
                  <input
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                    type="text"
                    placeholder="Enter category name..."
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3948ab] transition"
                  />
                </div>

                {/* Image Upload Section */}
                <div className="mb-4 flex flex-col items-center w-full">
                  <label className="block text-gray-700 font-medium mb-2">
                    Upload Image
                  </label>

                  <label
                    htmlFor="image"
                    className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-[#3948ab] transition overflow-hidden"
                  >
                    {imageShow ? (
                      <img
                        src={imageShow}
                        alt="Uploaded preview"
                        className="h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500">
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

                {/* Buttons */}
                <div className="w-full flex justify-end gap-4 mt-6">
                  <button
                    disabled={loader ? true : false}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 flex items-center justify-center"
                  >
                    {loader ? (
                      <PropagateLoader
                        color="#ffffff"
                        cssOverride={overrideStyle}
                      />
                    ) : (
                      "Add Category"
                    )}
                  </button>
                </div>
              </form>
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
