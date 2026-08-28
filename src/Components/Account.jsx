import React, { useState } from "react";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-end lg:mr-24   px-4 py-10">

      <div className="w-full max-w-md bg-white  rounded-xl shadow-md p-8 border border-gray-200">
        {/*Logo name........ */}
      <div className='flex items-center justify-center relative '> <span className='text-3xl font-bold'>Shop</span>
      <span className='text-3xl text-blue-700 font-bold'>Smart</span>
      </div>
  
        <div className="text-center mb-7">
          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Login to your ShopSmart account"
              : "Sign up to start shopping"}
          </p>
        </div>

        {/* Name */}
        {!isLogin && (
          <div className="mb-4">
            <label className="flex text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="button"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Switch Login / Signup */}
        <div className="text-center mt-6">
          <p className="text-gray-500">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Account;