import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/AuthRedux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../Components/header/Navbar";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/signup/",
        formData
      );
      const userdata = {
        username: response.data.username,
        roles: "9289",
        user_id: response.data.id,
      };
      dispatch(setCredentials(userdata));
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error("Error during sign-up");
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full h-full md:p-12 p-2 bg-white-500 ">
        <div className="bg-grey-lighter min-h-screen flex flex-col ">
          <div className="container mx-auto flex flex-col items-center justify-center px-2">
            <div className="bg-white w-[50%] px-6 py-8 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black ">
              <div className=" pl-28">
                <img className="w-[80px] pl-1" src={""} alt="" />
              </div>

              <form onSubmit={handleSubmit}>
                <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  <input
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="phone_number"
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="address"
                  onChange={handleChange}
                  placeholder="Address Line 1"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded-md bg-[#051570] text-white  hover:bg-green-dark focus:outline-none my-1"
                >
                  {loading ? "Loading..." : "Sign Up"}
                </button>
              </form>
              <div className="text-center text-sm text-gray-400 mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-gray-400"
                  href="/#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-gray-400"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <a
                className="no-underline border-b border-blue text-blue"
                href="/signin"
              >
                <span className="text-[#051570]"> Login</span>
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Signup;
