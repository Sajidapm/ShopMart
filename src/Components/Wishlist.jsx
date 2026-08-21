import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import Product from "./Product";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="md:flex-row sm:flex-col ">

      {/* Sidebar */}
      <div className="md:w-80 h-full border border-gray-200">
        <aside >
          <div className="sm:flex ">
            <div className="border rounded-full align-content-center bg-blue-300">ffff</div>
            <div><p>sssssss</p></div>
          </div>
        </aside>
      </div>

      {/* Display Wishlist */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-5">
          
        {wishlist.map((item) => (
  <div
    key={item.id}
    className="flex items-center gap-5 bg-white rounded-xl shadow p-4"
  >
    <img
      src={item.thumbnail}
      alt={item.title}
      className="w-28 h-28 object-contain"
    />

    <div className="flex-1">
      <h2 className="font-semibold text-lg">
        {item.title}
      </h2>

      <p className="text-gray-500 text-sm">
        {item.category}
      </p>

      <p className="text-yellow-500">
        ⭐ {item.rating}
      </p>

      <p className="font-bold text-blue-600">
        ${item.price}
      </p>
    </div>

    <button className="text-red-500">
      ❤️
    </button>
  </div>
))}
        </div>
      </div>

    </div>
  );
};

export default Wishlist;