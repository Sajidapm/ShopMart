import React from "react";
import { NavLink } from "react-router-dom";
import { House,Package,Tag,Phone,
  Mail,ShoppingCart,ShieldCheck,
  Truck,Award,RotateCcw,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="border-b border-gray-400">
        <div className="grid sm:grid-cols-2   lg:grid-cols-3
          gap-10 px-6 sm:px-10 lg:px-20  pt-12 pb-10 ">

          {/* Logo / About */}
          <div>
            <div className="flex mb-8">
              <span className="text-white text-2xl font-bold">
                Shop
              </span>

              <span className="text-yellow-600 font-bold text-2xl">
                Smart
              </span>
            </div>

            <p className="text-white leading-7">
              Your smarter destination for
              <br />
              everyday shoping
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h1 className="text-white text-xl font-bold pb-5">
              Quick Links
            </h1>

            <div className="flex flex-col gap-4">

              <NavLink to="/" className="flex items-center gap-3">
                <House size={18} />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/Productlist"
                className="flex items-center gap-3"
              >
                <Package size={18} />
                <span>Products</span>
              </NavLink>

              <NavLink
                to="/DealsPage"
                className="flex items-center gap-3"
              >
                <Tag size={18} />
                <span>Today's Deals</span>
              </NavLink>

              <NavLink
                to="/AccountPage"
                className="flex items-center gap-3"
              >
                <span>Account</span>
              </NavLink>

              <NavLink
                to="/WishlistPage"
                className="flex items-center gap-3"
              >
                <span>WishList</span>
              </NavLink>

              <NavLink
                to="/Cart"
                className="flex items-center gap-3"
              >
                <ShoppingCart size={20} />
                <span>Cart</span>
              </NavLink>

            </div>
          </div>


          {/* Contact Us */}
          <div>
            <h2 className="text-white text-xl font-bold pb-5">
              Contact Us
            </h2>

            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+ 9876552389</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="break-all">
                  sajidapm@gmail.com
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Four Features */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        px-6
        sm:px-10
        lg:px-20
        xl:px-40
        py-8
      ">

        {/* Secure Payment */}
        <div className="flex items-center gap-4">
          <ShieldCheck
            size={42}
            className="text-yellow-500 shrink-0"
          />

          <div>
            <div className="text-white font-bold">
              Secure Payment
            </div>

            <div>
              100% secure payment
            </div>
          </div>
        </div>


        {/* Fast Delivery */}
        <div className="flex items-center gap-4">
          <Truck
            size={42}
            className="text-yellow-500 shrink-0"
          />

          <div>
            <div className="text-white font-bold">
              Fast Delivery
            </div>

            <div>
              On time, every time
            </div>
          </div>
        </div>


        {/* Best Quality */}
        <div className="flex items-center gap-4">
          <Award
            size={42}
            className="text-yellow-500 shrink-0"
          />

          <div>
            <div className="text-white font-bold">
              Best Quality
            </div>

            <div>
              Original and best quality
            </div>
          </div>
        </div>


        {/* Easy Returns */}
        <div className="flex items-center gap-4">
          <RotateCcw
            size={42}
            className="text-yellow-500 shrink-0"
          />

          <div>
            <div className="text-white font-bold">
              Easy Returns
            </div>

            <div>
              Hassle free returns
            </div>
          </div>
        </div>

      </div>


      {/* Copyright */}
      <div className="
        border-t
        border-gray-600
        text-center
        py-6
        text-gray-400
      ">
        © 2026{" "}
        <span className="text-yellow-500">
          ShopSmart
        </span>
        . All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;