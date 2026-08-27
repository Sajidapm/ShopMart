import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";

const Products = () => {
  const products = useContext(ProductContext);

  return (
    <div>
      <h1 className="font-bold text-2xl text-center m-8">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {products.map((item) => (
          <NavLink
            to={`/ProductDetails/${item.id}`}
            key={item.id}
          >
            <div
              className="bg-white rounded-2xl shadow-md hover:shadow-xl
              transition duration-300 overflow-hidden border border-gray-100
              group relative"
            >

              {/* Product Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-contain"
              />

              {/* Product Details */}
              <div className="text-center mt-4 p-3">

                {/* Product Title */}
                <h2 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h2>

                {/* Category */}
                <p className="text-gray-500 text-sm mt-2">
                  {item.category}
                </p>

                {/* Rating */}
                <div className="text-start mt-2">
                  <span className="text-yellow-500">
                    ⭐ {item.rating}
                  </span>
                </div>

                {/* Price + Discount */}
                <div className="flex justify-between items-center mt-3">

                  <span className="text-lg font-bold text-blue-600">
                    ${item.price}
                  </span>

                  {item.discountPercentage > 0 && (
                    <span className="text-green-600 text-sm font-semibold">
                      {item.discountPercentage}% OFF
                    </span>
                  )}

                </div>

              </div>
            </div>
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Products;