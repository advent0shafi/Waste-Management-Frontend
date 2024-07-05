import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/AuthRedux";

import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../Components/header/Navbar";
import axios from "axios";
const Signing = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();
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
        "http://127.0.0.1:8000/auth/signin/",
        formData
      );
      console.log(response.data.user.username);
      const userdata = {
        username: response.data.user.username,
        roles: "9289",
        user_id: response.data.user.id,
      };
      dispatch(setCredentials(userdata));
      console.log(response.data);
      setLoading(false);
      history("/");
    } catch (err) {
      setLoading(false);
      toast.error("Password or Email is invalid");
    }
  };

  return (
    <>
      <Navbar />

      <div class="w-full h-full md:p-12 p-2 bg-white-500 ">
        <div class="bg-grey-lighter min-h-screen flex flex-col ">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black w-full">
              <div className=" pl-28">
                <img className="w-[80px] pl-1" src={""} alt="" />
              </div>

              <form onSubmit={handleSubmit}>
                <h1 class="mb-8 text-3xl text-center">Login In</h1>

                <input
                  type="email"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />

                <input
                  type="password"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />

                <button
                  type="submit"
                  class="w-full text-center py-3 rounded-md bg-[#051570] text-white  hover:bg-green-dark focus:outline-none my-1"
                >
                  {loading ? "loading" : "Login In"}
                </button>
              </form>
              <div class="text-center text-sm text-gray-400 mt-4">
                By signing up, you agree to the
                <a
                  class="no-underline border-b border-grey-dark text-gray-400"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  class="no-underline border-b border-grey-dark text-gray-400"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div class="text-grey-dark mt-6">
              Don't have an account?
              <a class="no-underline border-b border-blue text-blue" href="/signup">
                <span className="text-[#051570]"> Signup</span>
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

export default Signing;