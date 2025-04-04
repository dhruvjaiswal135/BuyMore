import React, { useEffect, useState } from "react";
import image from "../../assets/admin.svg";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { overrideStyle } from "../../utilities/utlis";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector((state) => state.auth || {});

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]">
      {/* Left Side (Image & Text) */}
      <div className="md:w-1/2 flex flex-col justify-center items-center text-white p-8 md:p-12">
        <img
          src={image}
          alt="Admin Panel"
          className="w-[60%] md:w-[75%] max-w-sm drop-shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-5 text-center drop-shadow-md">
          Welcome to Admin Panel
        </h1>
        <p className="text-lg text-center font-light mt-2 drop-shadow-md">
          Please log in to continue
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="md:w-1/2 flex justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Admin Login
          </h1>

          <form onSubmit={submit}>
            {/* Email Input */}
            <div className="mb-5">
              <label htmlFor="email" className="text-white text-sm font-semibold">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="w-full px-4 py-3 mt-1 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label htmlFor="password" className="text-white text-sm font-semibold">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="w-full px-4 py-3 mt-1 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-blue-300"
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              disabled={loader ? true : false}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 flex items-center justify-center"
            >
              {loader ? (
                <PropagateLoader color="#ffffff" cssOverride={overrideStyle} size={8} />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
