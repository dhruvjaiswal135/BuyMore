import React, { useEffect, useState } from "react";
import {
  IoMdArrowDropright,
  IoMdCloseCircle,
  IoMdImages,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_category } from "../../store/reducers/categoryReducer";
import { add_product, messageClear } from "../../store/reducers/productReducer";
import { overrideStyle } from '../../utilities/utlis';
import toast from "react-hot-toast";
import { PropagateLoader } from 'react-spinners';

const AddProduct = () => {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.category)
  const {loader, successMessage,errorMessage} = useSelector(state => state.product)

  useEffect(()=> {
    dispatch(get_category({
      page: 1,
      searchValue: " ",
      perPage:''
    }))
  },[])
  
  const [state, setState] = useState({
    name: "",
    description: "",
    baseprice: "",
    discountpercentage: "",
    couponcode: "",
    
    category: "",
    brand: "",
    stock: "",
  });

  const [cateShow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categories);
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
    description: "",
    baseprice: "",
    discountpercentage: "",
    couponcode: "",
    
    category: "",
    brand: "",
    stock: "",
      });
      setImageShow([])
      setImages([]);
      setCategory('')
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
        
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
    console.log(images);
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImage = images;
      tempImage[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImage]);
    }
  };
  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);

    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  const add = (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', state.name)
    formData.append('description', state.description)
    formData.append('baseprice', state.baseprice)
    formData.append('discountpercentage', state.discountpercentage)
    formData.append('stock', state.stock)
    formData.append('brand', state.brand)
    formData.append('category', category)
    formData.append('couponcode', state.couponcode)
    formData.append('shopName', "Narayana Firms")

    for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i])
    }
    dispatch(add_product(formData)).then((res) => {
      console.log("✅ Product creation response:", res); // Shows the response
      if (res.payload?.product) {
        console.log("🎉 Product created:", res.payload.product); // Shows the created product
      }
      if (res.payload?.message) {
        console.log("📝 Server message:", res.payload.message);
      }
    });
  }

  useEffect(()=>{
    setAllCategory(categories)
  },[categories])

  return (
    <div className="px-2 sm:px-6 lg:px-4 py-9">
      <div className="w-full p-4 rounded-md ">
        <div className="flex justify-between items-center p-4 border border-gray-50 rounded-lg shadow-md">
        <div className="w-full">
  <h1 className="font-normal text-lg mb-1">Add Product</h1>
  
  {/* Breadcrumb Navigation */}
  <div className="flex flex-wrap items-center gap-1 text-xs font-normal">
    <h1 className="text-[#3948ab]">Dashboard</h1>
    <IoMdArrowDropright className="text-gray-500" />
    <h1 className="text-[#3948ab]">Product List</h1>
    <IoMdArrowDropright className="text-gray-500" />
    <h1 className="text-gray-500">Add Product</h1>
  </div>
</div>

          <div className="gap-2 flex">
          <button
  onClick={() => window.location.href = "/seller/dashboard/add-product"}  //to forcefully refresh the page
  className="rounded-md px-3 py-2 text-xs items-center justify-center text-red-700 border border-red-700"
>
  Discard Changes
</button>

            <button to='seller/dashboard/products'
            onClick={() => window.location.href = "/seller/dashboard/products"}
            className="bg-[#3948ab] rounded-md px-5 py-2 text-xs text-white">
              All Product
            </button>
          </div>
        </div>
        <form onSubmit={add}>
  <div className="w-full flex flex-wrap mt-5 justify-between">
    {/* Left Section */}
    <div className="w-full lg:w-7/12 lg:pr-3">
      {/* General Information */}
      <div className="p-4 shadow-md rounded-md border mb-5 border-gray-50">
        <h1>General Information</h1>
        <div className="flex flex-col w-full mt-3">
          {/* Product Name */}
          <label
            htmlFor="name"
            className="text-[13px] mb-1 text-gray-500 font-normal"
          >
            Product Name
          </label>
          <input
            onChange={inputHandle}
            value={state.name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Product name"
            className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
          />

          {/* Description */}
          <label
            htmlFor="description"
            className="text-[13px] mb-1 text-gray-500 font-normal mt-4 block"
          >
            Description
          </label>
          <textarea
            onChange={inputHandle}
            value={state.description}
            name="description"
            id="description"
            placeholder="Enter your product description"
            className="border border-gray-100 rounded-md px-3 py-2 text-[13px] font-normal bg-[#f7fafb] w-full h-24"
          />
        </div>

        <div className="flex items-center justify-between w-full gap-4">
          {/* Brand Name */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="brand"
              className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
            >
              Brand Name
            </label>
            <input
              onChange={inputHandle}
              value={state.brand}
              type="text"
              name="brand"
              id="brand"
              placeholder="Enter Brand Name"
              className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
            />
          </div>

          {/* Stock */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="stock"
              className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
            >
              Product Stock
            </label>
            <input
              onChange={inputHandle}
              value={state.stock}
              type="number"
              name="stock"
              id="stock"
              placeholder="Enter Product stock"
              className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="p-4 shadow-md rounded-md border border-gray-50">
        <h1>Pricing</h1>
        <div className="flex flex-col w-full mt-3">
          {/* Base Price */}
          <label
            htmlFor="baseprice"
            className="text-[13px] mb-1 text-gray-500 font-normal"
          >
            Base Price
          </label>
          <input
            onChange={inputHandle}
            value={state.baseprice}
            type="number"
            name="baseprice"
            id="baseprice"
            placeholder="Enter your Product price"
            className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
          />
          <div className="flex items-center justify-between w-full gap-4">
            {/* Discount Percentage */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="discountpercentage"
                className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
              >
                Discount Percentage (%)
              </label>
              <input
                onChange={inputHandle}
                value={state.discountpercentage}
                type="number"
                name="discountpercentage"
                id="discountpercentage"
                placeholder="Enter discount percentage"
                className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
              />
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="couponcode"
                className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
              >
                Coupon Code
              </label>
              <input
                onChange={inputHandle}
                value={state.couponcode}
                type="text"
                name="couponcode"
                id="couponcode"
                placeholder="Enter Coupon Code"
                className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-5/12 lg:pl-4 mt-5 lg:mt-0">
      {/* Product Media */}
      <div className="p-4 shadow-md rounded-md border mb-5 border-gray-50">
        <h1 className="font-normal text-gray-800">Product Media</h1>
        <h2 className="text-xs mt-2 text-gray-500">Photo Product</h2>

        {/* Image Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full mt-3">
          {imageShow.map((img, i) => (
            <div
            key={img.id || i} // Use img.id if available, else fallback to index
              className="relative group w-full aspect-square overflow-hidden rounded-md shadow-md border border-gray-200"
            >
              <label
                htmlFor={i}
                className="cursor-pointer block w-full h-full"
              >
                <img
                  className="w-full h-full object-cover rounded-md group-hover:opacity-80 transition-opacity"
                  src={img.url}
                  alt="Product"
                />
              </label>
              <input
                onChange={(e) => changeImage(e.target.files[0], i)}
                type="file"
                id={i}
                className="hidden"
              />
              <span
                onClick={() => removeImage(i)}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <IoMdCloseCircle size={20} />
              </span>
            </div>
          ))}

          {/* Upload Box */}
          <label
            htmlFor="images"
            className="flex flex-col justify-center items-center w-full aspect-square cursor-pointer border-2 border-dashed border-gray-300 rounded-md text-gray-500 hover:border-[#3948ab] hover:text-[#3948ab] transition-all"
          >
            <IoMdImages size={30} />
            <span className="mt-1 text-xs">Select Image</span>
          </label>
          <input
            multiple
            onChange={imageHandle}
            type="file"
            id="images"
            className="hidden"
          />
        </div>
      </div>

      {/* Category Section */}
      <div className="p-4 shadow-md rounded-md border mb-5 border-gray-50">
        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-gray-500 text-sm">
          <div className="flex flex-col w-full gap-1 relative">
            <label htmlFor="category" className="text-black">
              Category
            </label>
            <h1 className="text-xs text-gray-500 mt-1">Product Category</h1>
            <input
              readOnly
              onClick={() => setCateShow(!cateShow)}
              className="px-4 py-2 outline-none border border-slate-200 rounded-md text-gray-600 text-sm font-normal cursor-pointer bg-white"
              value={category}
              type="text"
              id="category"
              placeholder="--select category--"
            />
            {/* Dropdown */}
            <div
              className={`absolute top-[105%] left-0 bg-white shadow-md mt-2 rounded-md w-full transition-all duration-300 ease-in-out overflow-hidden ${
                cateShow
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-full px-4 py-2">
                <input
                  value={searchValue}
                  onChange={categorySearch}
                  className="px-3 py-2 w-full outline-none bg-gray-100 border border-gray-200 rounded-md text-gray-600 text-sm"
                  type="text"
                  placeholder="Search category..."
                />
              </div>
              <div className="flex flex-col max-h-[150px] overflow-y-auto">

                {allCategory.map((c, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-[#3948ab] hover:text-white transition-all duration-200 rounded-sm"
                  >
                    <input
                      type="radio"
                      className="hidden"
                      checked={category === c.name}
                      onChange={() => {
                        setCateShow(false);
                        setCategory(c.name);
                        setSearchValue("");
                        setAllCategory(categories);
                      }}
                    />
                    <span
                      className={`w-4 h-4 border-2 rounded-full transition-all duration-200 flex items-center justify-center ${
                        category === c.name
                          ? "border-[#3948ab]"
                          : "border-gray-400"
                      }`}
                    >
                      {category === c.name && (
                        <span className="w-2.5 h-2.5 bg-[#3948ab] rounded-full"></span>
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        category === c.name
                          ? "font-semibold"
                          : "font-normal"
                      }`}
                    >
                      {c.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory */}
      {/* <div className="p-4 shadow-md rounded-md border border-gray-50">
        <h1>Inventory</h1>
        <div className="flex flex-col w-full mt-3">
          <label
            htmlFor="sku"
            className="text-[13px] mb-1 text-gray-500 font-normal"
          >
            SKU
          </label>
          <input
            onChange={inputHandle}
            value={state.sku}
            type="text"
            name="sku"
            id="sku"
            placeholder="113902"
            className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
          />
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="Barcode"
                className="text-[13px] mt-4 mb-1 text-gray-500 font-normal"
              >
                Barcode
              </label>
              <input
                onChange={inputHandle}
                value={state.barcode}
                type="text"
                name="barcode"
                id="Barcode"
                placeholder="Enter Barcode"
                className="border border-gray-100 rounded-md px-3 py-2 text-xs font-normal bg-[#f7fafb]"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>

  {/* Optional Submit Button */}
  <div className="w-full mt-4 flex justify-end">
  <button
            disabled={loader}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
              loader
                ? "bg-[#3948ab] cursor-not-allowed"
                : "bg-[#3948ab] hover:bg-[#2d3985] text-white"
            }`}
          >
            {loader ? (
              <PropagateLoader color="#ffffff" cssOverride={overrideStyle} />
            ) : (
              "Add Product"
            )}
          </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default AddProduct;
