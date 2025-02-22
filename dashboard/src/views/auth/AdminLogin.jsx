import React, { useEffect, useState } from "react";
import image from "../../assets/admin.svg";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage,successMessage } = useSelector((state) => state.auth || {});
  
  // for loading the admin login button.
  //to get all the data{name,email,password} from the form and store it in the state variable in the form of an object with the help of useState hook.
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
    //console.log("Dispatching login with:", state);
    dispatch(admin_login(state));
  };
  const overrideStyle = {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
  };

  useEffect(()=>{
    if(errorMessage){
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear()); 
      navigate('/');     
    }
  }, [errorMessage,successMessage]);

  return (
    <div className="h-fit">
      <div className="flex max-md:flex-col h-fit">
        <div className=" flex justify-center items-center h-screen  w-3/5 ">
          <div className="flex flex-col items-center  ">
            <div>
              <img
                //loading="lazy"
                src={image}
                alt="Authentication illustration"
                className="w-[540px]"
              />
            </div>
            <div className="mt-5">
              <h1 className="text-3xl font-semibold text-[#3948ab]">
                Welcome to Admin Panel
              </h1>
              <p className="font-light text-center text-[#3948ab]">
                Please Log in to continue
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden z-10 gap-2.5 justify-center items-center py-20 pr-5 pl-9 mt-0 rounded-[182px] max-md:pl-5 max-md:mt-0" />
        </div>
        <div className="flex justify-center items-center  w-2/5 ">
          <div className="w-[396px] border-4 border-double border-[#3948ab] rounded-xl p-10">
            <div className="text-center text-3xl font-bold mb-20 text-[#00227B] ">
              <h1>Log In</h1>
            </div>
            <div>
              <form onSubmit={submit}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="email"></label>
                  <input
                    onChange={inputHandle}
                    value={state.email}
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
                    onChange={inputHandle}
                    value={state.password}
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
                  disabled={loader ? true : false} // to disable the button when the loader is true.
                  className="bg-[#3949AB] w-full hover:shadow-[#3949AB]
                    hover: shadow-md text-white  rounded-md px-7 py-2 mb-3 "
                >
                  {loader ? (
                    <PropagateLoader
                      cssOverride={overrideStyle}
                      color="#ffffff"
                    />
                  ) : (
                    "Log In"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
