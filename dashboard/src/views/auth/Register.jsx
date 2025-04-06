import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utilities/utlis";
import {
  seller_register,
  messageClear,
} from "../../store/reducers/authReducer";
import toast from "react-hot-toast";


const Register = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({ name: "", email: "", password: "" });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    //console.log("Sending Data:", state);
    dispatch(seller_register(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate('/')
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="flex justify-center items-center bg-[#3948ab] md:h-screen w-full md:w-3/5 p-5 md:p-0">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/800736e280494d1b80863eb9c0380d6a/80cb2939b8163fdccdf68bef1ac61088fe1e50550af5672e224e0a44beee7740?apiKey=800736e280494d1b80863eb9c0380d6a&"
            alt="Authentication illustration"
            className="w-48 h-48 rounded-full shadow-lg"
          />
          <h1 className="text-3xl font-semibold text-white mt-5">
            Welcome to Ecommerce
          </h1>
          <p className="text-white text-lg">
            Just a couple of clicks and we start
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-2/5 p-8 bg-white shadow-lg rounded-lg">
        <div className="w-full max-w-md">
          <h1 className="text-center text-3xl font-bold mb-10 text-[#00227B]">
            Register Now!
          </h1>
          <form onSubmit={submit} className="space-y-5">
            <input
              onChange={inputHandle}
              value={state.name}
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#3949AB]"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              onChange={inputHandle}
              value={state.email}
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#3949AB]"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              onChange={inputHandle}
              value={state.password}
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#3949AB]"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="flex items-center text-sm text-gray-600">
              <input type="checkbox" id="terms" required className="mr-2" />
              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>
            <button
              disabled={loader ? true : false}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 flex items-center justify-center"
            >
              {loader ? (
                <PropagateLoader
                  color="#ffffff"
                  cssOverride={overrideStyle}
                  size={8}
                />
              ) : (
                "Sign In"
              )}
            </button>
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link className="font-bold text-[#3949AB]" to="/login">
                Sign In
              </Link>
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <span className="w-1/3 h-px bg-gray-300"></span>
              <span>OR</span>
              <span className="w-1/3 h-px bg-gray-300"></span>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-5 py-2 border rounded-lg hover:shadow-md transition">
                <FaGoogle className="text-[#3949AB] mr-2" /> Google
              </button>
              <button className="flex items-center px-5 py-2 border rounded-lg hover:shadow-md transition">
                <IoLogoGitlab className="text-[#3949AB] mr-2" /> Gitlab
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
