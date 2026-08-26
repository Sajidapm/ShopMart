import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Heart,
  ShoppingCart,
  ClipboardList,
  UserRound,
} from "lucide-react";
import { CartContext } from "../Context/CartContext";

const MobileFooter = () => {
  const { cart } = useContext(CartContext);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">

        <NavLink to="/Hero">
          <div className="flex flex-col items-center text-xs">
            <House size={24} className="text-blue-600" />
            <span>Home</span>
          </div>
        </NavLink>

        <NavLink to="/wishlistPage">
          <div className="flex flex-col items-center text-xs">
            <Heart size={24} />
            <span>Wishlist</span>
          </div>
        </NavLink>

        <NavLink to="/Cart">
          <div className="relative flex flex-col items-center text-xs">
            <ShoppingCart size={24} />

            <span>Cart</span>

            <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {cart.length}
            </span>
          </div>
        </NavLink>

        <NavLink to="/Orders">
          <div className="flex flex-col items-center text-xs">
            <ClipboardList size={24} />
            <span>Orders</span>
          </div>
        </NavLink>

        <NavLink to="/Account">
          <div className="flex flex-col items-center text-xs">
            <UserRound size={24} />
            <span>Account</span>
          </div>
        </NavLink>

      </div>
    </footer>
  );
};

export default MobileFooter;