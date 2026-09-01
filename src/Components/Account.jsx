import React, { useState } from "react";
import Navbar from "./Navbar";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);


  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string()
      .required("Password is required"),
  });

  // Signup validation
  const signupSchema = yup.object({
    username: yup
      .string()
      .required("Username is required"),

    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      isLogin ? loginSchema : signupSchema
    ),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <>
      
      <Navbar />

    
      <div
        className="min-h-screen flex justify-end items-start
        pt-[100px] pr-[11%] bg-white"
      >


        <div
          className="w-[450px]
          bg-white
          border border-gray-200
          rounded-xl
          shadow-md
          p-8"
        >

          {/* ShopSmart Logo */}
          <h1 className="text-3xl font-bold text-center mb-2">
            <span className="text-black">Shop</span>
            <span className="text-blue-600">Smart</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-500 mb-8">
            {isLogin
              ? "Login to your ShopSmart account"
              : "Create your ShopSmart account"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Username - Signup only */}
            {!isLogin && (
              <div className="mb-4">

                <label className="block text-sm font-semibold mb-2">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter your username"
                  {...register("username")}
                  className="w-full h-[51px]
                  px-4
                  rounded-lg
                  border border-gray-300
                  bg-blue-50
                  outline-none
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500"
                />

                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}

              </div>
            )}

            {/* Email */}
            <div className="mb-5">

              <label className="block text-sm font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full h-[51px]
                px-4
                rounded-lg
                border border-gray-300
                bg-blue-50
                outline-none
                focus:border-blue-500
                focus:ring-1
                focus:ring-blue-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}

            </div>

      
            <div className="mb-5">

              <label className="block text-sm font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full h-[51px]
                px-4
                rounded-lg
                border border-gray-300
                bg-blue-50
                outline-none
                focus:border-blue-500
                focus:ring-1
                focus:ring-blue-500"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Confirm Password - Signup only */}
            {!isLogin && (
              <div className="mb-6">

                <label className="block text-sm font-semibold mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword")}
                  className="w-full h-[51px]
                  px-4
                  rounded-lg
                  border border-gray-300
                  bg-blue-50
                  outline-none
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500"
                />

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}

              </div>
            )}

        
            <button
              type="submit"
              className="w-full h-[49px]
              bg-blue-600
              text-white
              font-semibold
              rounded-lg
              hover:bg-blue-700
              transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>

          </form>

          {/* Switch */}
          <p className="text-center text-gray-500 mt-7">

            {isLogin ? (
              <>
                Don't have an account?{" "}

                <button
                  type="button"
                  onClick={switchForm}
                  className="text-blue-600
                  font-semibold
                  hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}

                <button
                  type="button"
                  onClick={switchForm}
                  className="text-blue-600
                  font-semibold
                  hover:underline"
                >
                  Login
                </button>
              </>
            )}

          </p>

        </div>
      </div>
    </>
  );
};

export default Account;