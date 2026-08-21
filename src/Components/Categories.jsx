import React, { useState } from "react";
import { Grid2X2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center">
      <Grid2X2 size={16} className="text-black" />

      <div className="relative">
        <button onClick={() => setShowMenu(!showMenu)}>
          Categories
        </button>

        {showMenu && (
          <div className="absolute top-full left-0 z-50 bg-white border-2 border-gray-300 rounded p-2 pr-16 shadow-xl">

            <NavLink
              to="/Categoriespage/all"
              className="py-2 block"
              onClick={() => setShowMenu(false)}
            >
              All
            </NavLink>

            <NavLink
              to="/Categoriespage/beauty"
              className="py-2 block"
              onClick={() => setShowMenu(false)}
            >
              Beauty
            </NavLink>

            <NavLink
              to="/Categoriespage/fragrances"
              className="py-2 block"
              onClick={() => setShowMenu(false)}
            >
              Fragrances
            </NavLink>

            <NavLink
              to="/Categoriespage/furniture"
              className="py-2 block"
              onClick={() => setShowMenu(false)}
            >
              Furniture
            </NavLink>

            <NavLink
              to="/Categoriespage/groceries"
              className="py-2 block"
              onClick={() => setShowMenu(false)}
            >
              Groceries
            </NavLink>

          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;