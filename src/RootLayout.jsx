import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from './Components/Navbar'
import Footer from './Components/Footer' 
const RootLayout = () => {
  return (
    <div className='container max-w-6xl mx-auto px-2 '>
      
    <div>
     <Navbar></Navbar>
     <Outlet/>
     <Footer></Footer>
    </div>
    </div>
  )
}

export default RootLayout
