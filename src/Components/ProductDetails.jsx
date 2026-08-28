import React, { useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Heart } from "lucide-react";

import { ProductContext } from "../Context/ProductContext";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { CompareContext } from "../Context/CompareContext";

const ProductDetails = () => {
  const { id } = useParams();

  const products = useContext(ProductContext);

  const { toggleWishlist } = useContext(WishlistContext);

  const { cart, toggleCart } = useContext(CartContext);

  const { compare, toggleCompare } =
    useContext(CompareContext);

  const [liked, setLiked] = useState(false);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const isInCart = cart.some(
    (item) => item.id === product.id
  );

  const isInCompare = compare.some(
    (item) => item.id === product.id
  );

  const toggleButton = () => {
    setLiked(!liked);
    toggleWishlist(product);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="w-full max-w-4xl border rounded-2xl shadow-lg p-8 bg-white">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Product Image */}
          <div className="relative">
             
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-contain"
            />

            {/* Wishlist */}
            <button
              className="absolute top-2 right-2"
              onClick={toggleButton}
            >
              <Heart
                size={24}
                fill={liked ? "red" : "none"}
                className={
                  liked
                    ? "text-red-500"
                    : "text-gray-500"
                }
              />
            </button>

          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">
              {product.title}
            </h1>

            <p className="mt-3 text-gray-500">
              {product.category}
            </p>

            <p className="text-2xl font-bold mt-5 text-blue-600">
              ${product.price}
            </p>

            <p className="mt-3">
              ⭐ {product.rating}
            </p>
              {/*Discount.............. */}
        <div className="text-start w-fit border 
         px-3 bg-red-500">
        <span className="text-white  text-sm font-semibold">
          {product.discountPercentage} % OFF </span>
        </div>

            <p className="mt-5 text-gray-600">
              {product.description}
            </p>

            {/* Cart Button */}
            <div className="flex">

              {isInCart ? (
                <NavLink
                  to="/Cart"
                  className="flex-1 mt-4 bg-green-600
                  text-white py-2 rounded-lg
                  text-center hover:bg-green-700"
                >
                  Go to Cart
                </NavLink>
              ) : (
                <button
                  onClick={() => toggleCart(product)}
                  className="w-full mt-4 bg-blue-600
                  text-white py-2 rounded-lg
                  hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              )}

              {isInCart && (
                <button
                  onClick={() => toggleCart(product)}
                  className="flex-1 mt-4 bg-red-600
                  text-white py-2 rounded-lg
                  hover:bg-red-700"
                >
                Buy Now
                </button>
              )}

            </div>

            {/* Compare Button */}
            <button
              onClick={() => toggleCompare(product)}
              className={`w-full mt-2 py-2 rounded-lg ${
                isInCompare
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {isInCompare
                ? "Remove Compare"
                : "Compare"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;