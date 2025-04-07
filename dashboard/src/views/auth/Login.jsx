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
    const navigate = useNavigate()
    const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

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
        dispatch(seller_login(state))
    };

    useEffect(() =>{
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            navigate('/')
            
          }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
          }
          
    },[successMessage, errorMessage])

    return (
        <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center bg-[#3948ab] w-full md:w-3/5 h-1/2 md:h-screen p-6 md:p-0">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/800736e280494d1b80863eb9c0380d6a/80cb2939b8163fdccdf68bef1ac61088fe1e50550af5672e224e0a44beee7740?apiKey=800736e280494d1b80863eb9c0380d6a&"
                    alt="Authentication illustration"
                    className="w-44 md:w-[221px] rounded-full"
                />
                <h1 className="text-2xl md:text-3xl font-semibold text-white mt-5 text-center">Welcome to Ecommerce</h1>
                <p className="text-white text-sm md:text-base text-center">Please Sign in to continue</p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-2/5 h-1/2 md:h-screen p-6 md:p-0">
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#00227B] text-center">Log In</h1>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <input
                                onChange={inputHandle} value={state.email}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                onChange={inputHandle} value={state.password}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
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
                    <div className="text-center mt-4">
                        <p>New user? <Link className="font-bold text-[#3949AB]" to="/register">Register here</Link></p>
                    </div>
                    <div className="flex items-center my-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="mx-2 text-gray-500">OR</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 border border-[#3949AB] rounded-md hover:shadow-md">
                            <FaGoogle className="text-[#3949AB]" />
                            <span className="text-[#3949AB] font-medium">Google</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-[#3949AB] rounded-md hover:shadow-md">
                            <IoLogoGitlab className="text-[#3949AB]" />
                            <span className="text-[#3949AB] font-medium">Gitlab</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;