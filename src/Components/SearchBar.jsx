import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Search } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  

  const products = useContext(ProductContext);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onClick={() => setShowMenu(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowMenu(true);
        }}
        className="border border-gray-300 rounded-lg px-4 pr-12 py-2 h-10 w-full
        hover:border-blue-500 hover:shadow-md
        focus:border-blue-500 focus:ring-1 focus:ring-blue-500
        outline-none"
      />

      <Search
        size={22}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      />

      {showMenu && search && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">

          {filteredProducts.map((product) => (
            <NavLink
              key={product.id}
              to={`/Product/${product.id}`}
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 p-2 hover:bg-gray-100"
            >

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-12 h-12 object-contain"
              />

              <p className="text-sm">
                {product.title}
              </p>

            </NavLink>
          ))}

        </div>
      )}

    </div>
  );
};

export default SearchBar;