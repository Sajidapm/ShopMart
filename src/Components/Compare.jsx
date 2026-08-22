import React, { useContext } from "react";
import { CompareContext } from "../Context/CompareContext";

const Compare = () => {
  const { compare, toggleCompare } = useContext(CompareContext);

  return (
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

    </div>
  );
};

export default Compare;