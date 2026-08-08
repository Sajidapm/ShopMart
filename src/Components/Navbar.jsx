import React from 'react'
import {NavLink} from 'react-router-dom'
import { Search } from "lucide-react";
const Navbar = () => {
  const linkStyle=({isActive})=>{
    isActive? "text-teal-400 font-bold": "text-gray-300"
  }
  return (
    <>  
    {/*Navbar in tab and Largr screen..................................... */}
    <nav className='hidden md:flex'>
      {/*Logo............ */}
      <div className="justify-between  px-2 mx-auto mx-6 py-3 md:flex">
      <div className='flex'> <h1 className='text-2xl font-bold'>Shop</h1>
      <span className='text-2xl text-blue-700 font-bold'>Smart</span>
      </div>
      {/*Search bar ...........*/}
      <div className='border border-gray-300 rounded-lg w-full focus-within:border-blue-700 Bg-pin md:w-80 lg:w-96 xl:w-[500px]  flex'>
      <div className='h-full bg-blue-200 rounded-l-lg p-2 '>
      <Search size={22} strokeWidth={2} /></div>
      <input   className="w-full border  border-gray-300 rounded-r-lg px-2 outline-none  "
      placeholder='Serch Products,brand and more'></input>
      </div>
      {/*Nav menu............... */}
      <div className='flex gap-5'>
        <NavLink to="/wishlist">WishList</NavLink>
        <NavLink to="/compaire">Compaire</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/Account">Account</NavLink>
      </div>
      </div>
    </nav> 

   {/* Navbar in Mobile...............................................*/}
    <nav className='md:hidden pb-3 '>
      {/*logo....... */}
      <div className='flex justify-between items-center pb-3 '>
     <div className='flex'> 
      <h1 className='text-2xl font-bold'>Shop</h1>
     <span className='text-2xl text-blue-700 font-bold'>Smart</span>
     </div>
     {/*Nav menu..... */}
    <div className='flex gap-2'>
      <NavLink to="/whishlist">❤ </NavLink>
      <NavLink to="/Account">Account</NavLink>
      <NavLink to="/Cart" >Cart</NavLink>
      </div></div>
      {/*Mobile screen search bar.... */}
      <div className='border border-gray-300 rounded-lg w-full focus-within:border-blue-700 Bg-pin md:w-80 lg:w-96 xl:w-[500px]  flex'>
        <div className='h-full bg-blue-200 rounded-l-lg p-2 '>
           <Search size={22} strokeWidth={2} ></Search></div>
              <input   className="w-full border  border-gray-300 rounded-r-lg px-2 outline-none  "
              placeholder='Serch Products,brand and more'></input>
      </div>
    </nav>
    </>
    )
}

export default Navbar
