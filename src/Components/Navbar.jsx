import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const linkStyle=({isActive})=>{
    isActive? "text-teal-400 font-bold": "text-gray-300"
  }
  return (
    <>    <nav><div className="justify-between hidden py-3 md:flex">
     <div className='flex'> <h1 className='text-2xl font-bold'>Shop</h1>
     <span className='text-2xl text-blue-700 font-bold'>Smart</span></div>
      <div className='w-full Bg-pin md:w-80 relative lg:w-96 xl:w-[500px  flex'>
              <input   className="w-full bg-pink-50 px-2 mx-2 border border-gray-300 rounded "
         placeholder='Serch Products,brand and more'></input>
         <button className='absolute left-[350px] bg-blue-700 border h-full w-[30px]  rounded-r-lg object-contain'>🔍</button></div>
      <div className='flex gap-5'>

        <NavLink to="/wishlist">WishList</NavLink>
<NavLink to="/compaire">Compaire</NavLink>
<NavLink to="/cart">Cart</NavLink>
<NavLink to="/Account">Account</NavLink>
      </div>
      </div>
    </nav> 
    <nav className='md:hidden flex '>
    <h1 className='text-2xl font'>ShopSmart</h1>
    
 <input className='w-full px-2 mx-2 border border-gray-300 rounded' placeholder='Search Products.....'></input>
      <NavLink to="/Account">Account</NavLink>
    </nav>
    </>
    )
}

export default Navbar
