//import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Account from './Account'
//import  { useContext } from 'react'


const DashboardNavbar=()=>{
    const linkStyle = ({ isActive }) =>
  `no-underline ${
    isActive ? "text-teal-400 font-bold" : "text-black"
  }`  

    return(
        <>
           {/*Navbar in tab and Largr screen..................................... */}
    <nav  className='fixed top-0 left-0 w-full z-[9999] bg-white shadow-[0_3px_4px_-3px_rgba(0,0,0,0.3)]' >
      <div className='hidden md:flex justify-between no-underline border-b border-black p-2' >
      {/*Logo............ */}
      <div className='flex items-center relative '> <span className='text-3xl font-bold'>Shop</span>
      <span className='text-3xl text-blue-700 font-bold'>Smart</span>
      </div>
      {/*Search bar ...........*/}
      
     
      {/*Nav menu............... */}
      <div className='flex gap-5 '>
        <NavLink to="/AccountPage" className={linkStyle} >Account</NavLink>
        </div>
        </div>
        </nav>
 
        </>
    )
};
 export default DashboardNavbar