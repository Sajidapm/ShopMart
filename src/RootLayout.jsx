import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from './Components/Navbar'
import Footer from './Components/Footer' 
import MobileFooter from './Components/MobileFooter';
const RootLayout = () => {
  return (
    <>
      <div className="md:mx-10">
 <div >
         <Navbar />
        </div>
        <main className='pt-20'>
        <Outlet />
        </main>
        <Footer />
      </div>

      <MobileFooter />
    </>
  );
};export default RootLayout