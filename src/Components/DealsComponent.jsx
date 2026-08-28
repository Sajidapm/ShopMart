import React, { useContext, useState } from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { CompareContext } from "../Context/CompareContext";
const DealsComponent = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { toggleWishlist } = useContext(WishlistContext);
  const { cart, toggleCart } = useContext(CartContext);
  const { compare, toggleCompare } = useContext(CompareContext);
  const isInCart = cart.some((item) => item.id === product.id);
  const isInCompare = compare.some(
    (item) => item.id === product.id
  );
  const toggleButton = () => {
    setLiked(!liked);
    toggleWishlist(product);
  };
  return (
    <>   
     {product.discountPercentage > 13 && (
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
      <div className=" mt-4">
     {/*Discount.............. */}
        <div className="text-start w-fit border rounded-[4px] bg-red-500">
        <span className="text-white  text-sm font-semibold">
          {product.discountPercentage} % OFF </span>
        </div>

        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {product.category}
        </p>
        <div className="text-start">
        <span className="text-yellow-500 ">
            ⭐ {product.rating}
          </span>
          </div>
        
        <div className="flex justify-between items-center mt-3">

          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>
      </div>
        
              {/* Cart Button */}
        <div className="flex">
          {isInCart ? (
            <NavLink
              to="/Cart"
              className="block w-full mt-4 bg-green-600
              text-white py-2 rounded-lg mx-2 hover:bg-green-700"
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

          {isInCart && (
            <button
              onClick={() => (product)}
              className="w-full mt-4 bg-blue-600 text-white
              py-2 rounded-lg mx-2 hover:bg-blue-700"
            >
             Buy Now 
            </button>
          )}

        </div>

        {/* Compare Button */}
<button
  onClick={() => {
    console.log("Compare clicked:", product);
    toggleCompare(product);
  }}
  className={`w-full mt-2 py-2 rounded-lg ${
    isInCompare
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }`}
>
  {isInCompare ? "Remove Compare" : "Compare"}
</button>
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
    )}
  </>);
};

export default DealsComponent;