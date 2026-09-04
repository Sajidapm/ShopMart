import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  House,
  Tag,
  GitCompare,
  Package,
  ClipboardList,
  CircleHelp,
} from "lucide-react";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative">

      {/* Hamburger Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-1"
      >
        {showMenu ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute left-0 top-10 z-50 w-56 bg-white shadow-lg border rounded-lg p-3">

          <NavLink to="/"               onClick={() => setShowMenu(false)}
>
            <div className="flex items-center gap-2 py-2">
              <House size={18} />
              <span>Home</span>
            </div>
          </NavLink>

          <NavLink to="DealsPage"               onClick={() => setShowMenu(false)}
>
            <div className="flex items-center gap-2 py-2">
              <Tag size={18} />
              <span>Deals</span>
            </div>
          </NavLink>

          <NavLink to="ComparePage"               onClick={() => setShowMenu(false)}
>
            <div className="flex items-center gap-2 py-2">
              <GitCompare size={18} />
              <span>Compare</span>
            </div>
          </NavLink>

          <NavLink to="Productlist"               onClick={() => setShowMenu(false)}
>
            <div className="flex items-center gap-2 py-2">
              <Package size={18} />
              <span>Products</span>
            </div>
          </NavLink>

          <NavLink to="Orders"               onClick={() => setShowMenu(false)}
>
            <div className="flex items-center gap-2 py-2">
              <ClipboardList size={18} />
              <span>Orders</span>
            </div>
          </NavLink>

          <NavLink to="Help"               onClick={() => setShowMenu(false)}
>
            <div className="flex items-center gap-2 py-2">
              <CircleHelp size={18} />
              <span>Help</span>
            </div>
          </NavLink>

        </div>
      )}
    </div>
  );
};

export default MobileMenu;