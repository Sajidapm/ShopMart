import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from './Components/Navbar'
import Footer from './Components/Footer' 
import MobileFooter from './Components/MobileFooter';
const RootLayout = () => {
  return (
    <div className='md:mx-10 px-2  mt-3'>
      
    
     <Navbar></Navbar>
     <Outlet/>
     <div className='md:hidden '>
      <MobileFooter></MobileFooter>
     </div>
     <Footer></Footer>
    </div>
    
  )
}

export default RootLayout
