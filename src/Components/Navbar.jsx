import React from 'react'
import {NavLink} from 'react-router-dom'

import { Search,House , 
  Grid2X2, Tag, 
  GitCompare, Heart, 
  ClipboardList,
  CircleHelp,
  HelpCircle,
  Package,} from "lucide-react";
import Product from './Product';
const Navbar = () => {
  const linkStyle=({isActive})=>
    isActive? "text-teal-400 font-bold": "text-gray-300"
  
  return (
    <>  
    {/*Navbar in tab and Largr screen..................................... */}
    <nav >
      <div className='hidden md:flex justify-between  border-b border-gray-200 p-2' >
      {/*Logo............ */}
      <div className='flex'> <h1 className='text-2xl font-bold'>Shop</h1>
      <span className='text-2xl text-blue-700 font-bold'>Smart</span>
      </div>
      {/*Search bar ...........*/}
      <div className='border border-gray-300 rounded-lg w-full
       focus-within:border-blue-700 Bg-pin md:w-80 lg:w-96 xl:w-[500px]  flex'>
        <div className='h-full bg-blue-200 rounded-l-lg p-2 '>
        <Search size={22} strokeWidth={2} />
        </div>
        <input   className="w-full border  border-gray-300 rounded-r-lg px-2 outline-none  "
        placeholder='Serch Products,brand and more'></input>
      </div>
      {/*Nav menu............... */}
      <div className='flex gap-5'>
        <NavLink to="/Wishlist"  >WishList</NavLink>
        <NavLink to="/Compaire">Compaire</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/Account">Account</NavLink>
      </div>
      </div>
    
      {/*Nav second line <menu styleName={}></menu> */}
        <div className='flex gap-16  border-b border-gray-100 p-2 shadow-s'>
        <NavLink to="Hero"><div className='flex ' > <House size={18} className='text-black' />
        <div>Home</div></div></NavLink>
        <NavLink to="Categories"><div className='flex ' > <Grid2X2 size={18} className='text-black' />
        <div>Categories</div></div></NavLink>
        <NavLink to="Deals"><div className='flex ' > <Tag size={18} className='text-black' />
        <div>Deals</div></div></NavLink>
        <NavLink to="Compare"><div className='flex '> <GitCompare size={18} className='text-black' />
        <div>Compare</div></div></NavLink>
        <NavLink to="Productlist"><div className='flex ' > <Package  size={18} className='text-black' />
        <div>Products</div></div></NavLink>
        <NavLink to="Orders"><div className='flex ' > <ClipboardList size={18} className='text-black' />
        <div>Orders</div></div></NavLink>
        <NavLink to="Help"><div className='flex '> <CircleHelp size={18} className='text-black' />
        <div>Help</div></div></NavLink>
        </div>
      
    </nav> 

   {/* Navbar in Mobile...............................................*/}
    <nav className='md:hidden pb-3 '>
      {/*Align Logo and Menu... */}
      <div className='flex justify-between'>
      {/*logo....... */}
        <div className='flex'> 
        <h1 className='text-2xl font-bold'>Shop</h1>
        <span className='text-2xl text-blue-700 font-bold'>Smart</span>
        </div>
      {/*Nav menu..... */}
       <div className='flex gap-2'>
         <NavLink to="/Wishlist">❤ </NavLink>
         <NavLink to="/Account">Account</NavLink>
         <NavLink to="/Cart" >Cart</NavLink>
       </div>
            
    
     </div>
      {/*Mobile screen search bar.... */}
      <div className='border border-gray-300 rounded-lg w-full
       focus-within:border-blue-700 Bg-pin md:w-80 lg:w-96 xl:w-[500px]  flex'>
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
