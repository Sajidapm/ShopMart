import React, { useContext, useState } from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";

const Product = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const { toggleWishlist } = useContext(WishlistContext);

  const { cart, toggleCart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  const toggleButton = () => {
    setLiked(!liked);
    toggleWishlist(product);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl
      transition duration-300 overflow-hidden border border-gray-100
      group relative"
    >

      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      {/* Product Details */}
      <div className="text-center mt-4">

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

        {/* Cart Button */}
<div className="flex">
        {isInCart ? (
          <NavLink
            to="/Cart"
            className="block w-full mt-4 bg-green-600
            text-white py-2 rounded-l-lg hover:bg-green-700"
          >
            Go to Cart
          </NavLink>
        ) : (
          <button
            onClick={() => toggleCart(product)}
            className="w-full mt-4 bg-blue-600 text-white
            py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        )}
                {isInCart &&
          <button
            onClick={() => toggleCart(product)}
            className="w-full mt-4 bg-blue-600 text-white
            py-2 rounded-r-lg hover:bg-blue-700"
          >
            Remove
          </button>
            }
</div>

      </div>

      {/* Wishlist Button */}

      <button
        className="absolute top-2 right-2"
        onClick={toggleButton}
      >
        <Heart
          size={18}
          fill={liked ? "red" : "none"}
          className={liked ? "text-red-500" : "text-gray-500"}
        />
      </button>

    </div>
  );
};

export default Product;