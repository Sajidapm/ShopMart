import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  { useContext } from 'react'
import { CartContext } from "../Context/CartContext";
import  ProductContext  from '../Context/ProductContext'
import { House , 
   Tag, 
  GitCompare,  ShoppingCart,
  ClipboardList,
  CircleHelp,
  Package,Sparkles,Sofa,SprayCan,ShoppingBasket} from "lucide-react";
import Categories from './Categories';
import MobileMenu from './MobilMenu'
import SearchPage from '../SearchPage';

const Navbar = () => {
const { cart } = useContext(CartContext);
   const Products= useContext(ProductContext)
const linkStyle = ({ isActive }) =>
  `no-underline ${
    isActive ? "text-teal-400 font-bold" : "text-black"
  }`  
  return (
    <>  
    {/*Navbar in tab and Largr screen..................................... */}
    <nav  className='fixed top-0 left-0 w-full z-[9999] bg-white shadow-[0_3px_4px_-3px_rgba(0,0,0,0.3)]' >
      <div className='hidden md:flex justify-between no-underline border-b border-black p-2' >
      {/*Logo............ */}
      <div className='flex items-center relative '> <span className='text-3xl font-bold'>Shop</span>
      <span className='text-3xl text-blue-700 font-bold'>Smart</span>
      </div>
      {/*Search bar ...........*/}
      
     <SearchPage/>
      {/*Nav menu............... */}
      <div className='flex gap-5 '>
        <NavLink to="/WishlistPage" className={linkStyle} >WishList</NavLink>
        <NavLink to="/Compare" className={linkStyle} >Compare</NavLink>
   <NavLink to="/Cart">
  <div className="relative flex items-center">
    <ShoppingCart size={24} />

    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-700
     text-white text-xs flex items-center justify-center">
      {cart.length}
    </span>

    <div className="ml-1">Cart</div>
  </div>
</NavLink>
        <NavLink to="/AccountPage" className={linkStyle} >Account</NavLink>
      </div>
      </div>
    
      {/*Nav second line <menu styleName={}></menu> */}
        <div className=' gap-16  border-b border-gray-100  p-2  hidden md:flex '>
        <NavLink to="/" className={linkStyle} >
       <div className="flex items-center">
       <House size={18} className="text-black" />
       <div>Home</div>
       </div>
        </NavLink>  
        
        <Categories/>
        <NavLink to="DealsPage" className={linkStyle} ><div className='flex items-center ' > <Tag size={18} className='text-black' />
        <div>Today's Deals</div></div></NavLink>
        <NavLink to="ComparePage" className={linkStyle} ><div className='flex  items-center'> <GitCompare size={18} className='text-black' />
        <div>Compare</div></div></NavLink>
        <NavLink to="Productlist"className={linkStyle} ><div className='flex  items-center' > <Package  size={18} className='text-black' />
        <div>Products</div></div></NavLink>
        <NavLink to="Orders" className={linkStyle} ><div className='flex  items-center' > <ClipboardList size={18} className='text-black' />
        <div>Orders</div></div></NavLink>
        <NavLink to="HelpPage" className={linkStyle} ><div className='flex  items-center'> <CircleHelp size={18} className='text-black' />
        <div>Help</div></div></NavLink>
        </div>
      
    </nav> 

   {/* Navbar in Mobile...............................................*/}
    <nav className=' md:hidden p-8 py-7 fixed top-0 left-0 w-full z-[9999]  bg-white '>
      {/*Align Logo and Menu... */}
      <div className='flex   mr-5 justify-between'>
      {/*logo....... */}
        <div className='flex pl-10'> 
        <h1 className='text-2xl font-bold'>Shop</h1>
        <span className='text-2xl text-blue-700 font-bold'>Smart</span>
        </div>
      {/*Nav menu ..... */}
       <div className='flex  gap-2'>
         <NavLink to="/WishlistPage">❤ </NavLink>
         <NavLink to="/AccountPage">Login</NavLink>
         <NavLink to="/Cart">
      <div className="relative flex items-center ">
      <ShoppingCart size={24} />
      <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-700
      text-white text-xs flex items-center justify-center ">
      {cart.length}
      </span>
      </div>
   </NavLink>

 
       </div>
       {/*Hamburger menu in mobile screen ................. */}
     <div className='absolute top-7 ' >   
    <MobileMenu/>
    </div>
     </div>
      {/*Mobile screen search bar.... */}
    <div className="md:hidden  border border-gray-300 rounded-lg w-full my-3
  focus-within:border-blue-700 flex items-center">
  <div className="flex-1 w-full">
    <SearchPage />
  </div>

</div> 
<div className='md:hidden'><Categories/> </div>
 <div className=' hidden md:flex justify-between px-2 border-y-2 border-gray-200'>
        
                    <NavLink
                      to="/Categoriespage/beauty"
                      className="py-2 block"
                    >
                  <Sparkles size={20} />
                  <span>Beauty</span>
                    </NavLink>
        
                    <NavLink
                      to="/Categoriespage/fragrances"
                      className="py-2 block"
                    >
                     <SprayCan size={20} />
                   <span>Fragrances</span>
                    </NavLink>
        
                    <NavLink
                      to="/Categoriespage/furniture"
                      className="py-2 block"
                                         >
                      <Sofa size={20} />
                      <span>Furniture</span>
                    </NavLink>
        
                    <NavLink
                      to="/Categoriespage/groceries"
                      className="py-2 block"
                                         >
                     <ShoppingBasket size={20} />
                     <span>Groceries</span>
                    </NavLink>
        
      </div>
    </nav>
    
    </>
    )
}

export default Navbar
