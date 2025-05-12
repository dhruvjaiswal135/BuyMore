import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { overrideStyle } from "../../utilities/utlis";
import { useDispatch, useSelector } from "react-redux";
import { seller_login, messageClear } from "../../store/reducers/authReducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

  const [state, setState] = useState({ email: "", password: "" });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_login(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f6f6f6]">
      <div className="relative w-full max-w-5xl flex rounded-3xl overflow-hidden shadow-2xl  border border-white/50">
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-[#3948ab] text-white p-10 relative">
          <div className="absolute inset-0  rounded-3xl z-0" />
          <div className="z-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/800736e280494d1b80863eb9c0380d6a/80cb2939b8163fdccdf68bef1ac61088fe1e50550af5672e224e0a44beee7740?apiKey=800736e280494d1b80863eb9c0380d6a&"
              alt="Ecommerce"
              className="w-36 rounded-full border-4 border-white mb-6"
            />
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="mt-3 text-lg text-white/90 max-w-sm text-left">
              Your favorite marketplace awaits. Let's get you signed in!
            </p>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="flex-1 flex items-center justify-center p-10 bg-white bg-opacity-90">
          <div className="w-full max-w-md space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 text-center">Login to your account</h2>
              <p className="text-center text-gray-500 text-sm mt-1">
                Don’t have one?{" "}
                <Link to="/register" className="text-[#3948ab] font-medium hover:underline">
                  Register now
                </Link>
              </p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={inputHandle}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={inputHandle}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3948ab] outline-none transition"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loader}
                className="w-full py-3 bg-[#3948ab] text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md"
              >
                {loader ? (
                  <PropagateLoader color="#ffffff" cssOverride={overrideStyle} size={8} />
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="h-px bg-gray-300 flex-1" />
              OR
              <div className="h-px bg-gray-300 flex-1" />
            </div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition text-sm">
                <FaGoogle className="text-gray-500" />
                Google
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition text-sm">
                <IoLogoGitlab className="text-gray-500" />
                GitLab
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
