import React from "react";

const Product = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">

      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      {/* Product Details */}
      <div className="mt-4">

        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {product.category}
        </p>

        <div className="flex justify-between items-center mt-3">

          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>

        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default Product;