import React, { useContext } from "react";
import { CompareContext } from "../Context/CompareContext";
import { ProductContext } from "../Context/ProductContext";
import {NavLink} from "react-router-dom"
const Compare = () => {
  const { compare, toggleCompare } = useContext(CompareContext);
  const products = useContext(ProductContext);

  return (
    <div>
    <div>
 <div>   
  <div className=" flex justify-between">
      <h1 className=" text-2xl  m-8">
      Select Products
      </h1>
      <button className="border border-gray-300 m-8 p-1 rounded pr-6  hover:bg-blue-400 h-8 text-center ">Compare</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {products.map((item) => (
            <div
              className="bg-white rounded-2xl shadow-md hover:shadow-xl
              transition duration-300 overflow-hidden border border-gray-100
              group relative"
            >
               <input  type="checkbox" className="m-2"></input>

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
        ))}

      </div>
    </div>
    </div>
    <div className="p-5">

      <h1 className="text-2xl font-bold text-center mb-8">
        Compare Products
      </h1>

      {compare.length === 0 ? (
        <p className="text-center text-gray-500">
          No products selected for comparison
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {compare.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl p-5 shadow-md"
            >

              {/* Product Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain"
              />

              {/* Product Name */}
              <h2 className="font-bold text-lg mt-4">
                {product.title}
              </h2>

              {/* Category */}
              <p className="text-gray-500 mt-2">
                Category: {product.category}
              </p>

              {/* Price */}
              <p className="text-blue-600 font-bold mt-2">
                Price: ${product.price}
              </p>

              {/* Rating */}
              <p className="text-yellow-500 mt-2">
                ⭐ {product.rating}
              </p>

              {/* Remove */}
              <button
                onClick={() => toggleCompare(product)}
                className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-red-600"
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div></div>
  );
};

export default Compare;