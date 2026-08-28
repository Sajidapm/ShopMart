import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "./Context/ProductContext";

const Hero = () => {
  const products = useContext(ProductContext);

  return (
    <div className="pt-20 md:pt-2 px-2 md:px-0">

      {/* Hero Image */}
      <NavLink to="/Productlist" className="pt-11" >
        <img
          src="\Hero.png"
  className="w-full h-auto block"          alt="Hero" 
        />
      </NavLink>

      {/* Small Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-5 px-4 mt-5  mb-24">
        {products.map((item) => (
          <NavLink
            to={`/ProductDetails/${item.id}`}
            key={item.id}
          >
            <div className="px-3 cursor-pointer">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 border border-gray-300 rounded-2xl object-contain"
              />

              <h2 className="font-semibold text-center mt-2">
                {item.title}
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Hero;