import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <div className="flex  md:flex-row gap-6 ">

      {/* Sidebar */}
      <div className="hidden md:flex md:w-64  h-lvh border border-gray-200 rounded-lg p-5">
        <aside className=" pt-5 w-full">
          <div className="flex flex-col items-center w-full justify-start gap-3">
            <div className="border rounded-full bg-blue-300 w-14 h-14 flex items-center justify-center">
              s
            </div>

            <div>
              <p>Sajida</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Wishlist Products */}
      <div className="flex-1 ">
        <div className="grid pt-24 md:pt-3 grid-cols-1 gap-5">

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

              <button
                className="text-red-500"
                onClick={() => toggleWishlist(item)}
              >
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