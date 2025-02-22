import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";
const Login = () => {

    //to get all the data{name,email,password} from the form and store it in the state variable in the form of an object with the help of useState hook.
        const [state, setState] = useState({
            email: "",
            password: "",
        })
        const inputHandle = (e) => {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }
        const submit = (e) => {
            e.preventDefault()
            console.log(state)
        }

  return (
    <div className="h-fit">
      <div className="flex max-md:flex-col h-fit">
        <div className=" flex justify-center items-center bg-[#3948ab] h-screen  w-3/5  ">
          <div className="flex flex-col items-center">
            <div>
              <img
                //loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/800736e280494d1b80863eb9c0380d6a/80cb2939b8163fdccdf68bef1ac61088fe1e50550af5672e224e0a44beee7740?apiKey=800736e280494d1b80863eb9c0380d6a&"
                alt="Authentication illustration"
                className="object-contain self-center  max-w-full bg-blue-900 rounded-full aspect-[0.88] fill-blue-900 w-[221px]  max-sm:mt-0"
              />
            </div>
            <div className="mt-5">
              <h1 className="text-3xl font-semibold text-white">
                Welcome to Ecommerce
              </h1>
              <p className="font-light text-center text-white">
                Please Sign in to continue
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden z-10 gap-2.5 justify-center items-center py-20 pr-5 pl-9 mt-0 rounded-[182px] max-md:pl-5 max-md:mt-0" />
        </div>
        <div className="flex justify-center items-center  w-2/5 ">
          <div className="w-96">
            <div className="text-center text-3xl font-bold mb-20 text-[#00227B] ">
              <h1>Log In</h1>
            </div>
            <div>
              <form onSubmit={submit}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="email"></label>
                  <input
                  onChange={inputHandle} value={state.email}
                    className="px-3 py-2 outline-none border border-slate-300
                        bg-transparent rounded-md"
                    type="text"
                    name="email"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>

                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="password"></label>
                  <input
                  onChange={inputHandle} value={state.password} 
                    className="px-3 py-2 outline-none border border-slate-300
                        bg-transparent rounded-md"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>

                
                <button
                  className="bg-[#3949AB] w-full hover:shadow-[#3949AB]
                    hover: shadow-md text-white  rounded-md px-7 py-2 mb-3 "
                >
                  Log In
                </button>

                <div className="flex items-center mb-3 gap-3 justify-center">
                  <p>
                    New user ?{" "}
                    <Link className="font-bold text-[#3949AB]" to="/register">
                      Register here
                    </Link>
                  </p>
                </div>
                <div className="w-full flex justify-center items-center mb-3">
                  <div className="w-[35%] bg-[#3948ab] h-[1px]"></div>
                  <div className="w-[10%] flex justify-center items-center">
                    <span className="pb-1">OR</span>
                  </div>
                  <div className="w-[35%] bg-[#3948ab] h-[1px]"></div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <button className="flex justify-center items-center
                    w-[135px] h-[35px] rounded-xl border border-[#3949AB]
                    hover:shadow-[#3949AB] hover:shadow-sm">
                    <div className="flex justify-center items-center gap-3">
                        <span><FaGoogle className="text-[#3949AB]"/></span>
                        <span className="text-[#3949AB] font-medium">Google</span>
                    </div>
                    </button>
                    <button className="flex justify-center items-center
                    w-[135px] h-[35px] rounded-xl border border-[#3949AB]
                    hover:shadow-[#3949AB] hover:shadow-sm">
                    <div className="flex justify-center items-center gap-3">
                        <span><IoLogoGitlab className="text-[#3949AB] w-[17px] h-[35px]"/></span>
                        <span className="text-[#3949AB] font-medium">Gitlab</span>
                    </div>
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;