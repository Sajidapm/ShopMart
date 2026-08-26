import React from 'react'
import {NavLink } from 'react-router-dom'
import  { useContext } from 'react'
import { Search, ShoppingCart ,ClipboardList, UserRound} from "lucide-react";
import { House } from 'lucide-react'
import { CartContext } from '../Context/CartContext';
import { Heart} from 'lucide-react'
const MobileFooter = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <div>
      <footer className='fixed bottom-0 left-0 right-0 z-50 bg-white  md:hidden mx-2'>
      <div className='flex justify-between  '>
        <NavLink to="/Hero"><div > <House size={24} className='text-blue-600' />
            <div>Home</div></div></NavLink>

        <NavLink to="/wishlistPage"><div > <Heart size={24} className='' />
           <div>Wishlist</div></div></NavLink>

        <NavLink to="/Cart"><div className='relative'> <ShoppingCart size={24} className='' />
           <div>Cart</div><div className='absolute bottom-10 left-5 text-xs w-5 h-5 
             rounded-full bg-red-500 text-white text-center '>{cart.length}</div> </div></NavLink>

        <NavLink to="/Orders"><div className='flex flex-col items-center'>
            <ClipboardList size={24} /><div>Orders</div></div></NavLink>

        <NavLink to="/Account"><div className='flex flex-col items-center'> 
             <UserRound /><div>Account</div></div></NavLink>
      </div>
      </footer>
    </div>
  )
}

export default MobileFooter
