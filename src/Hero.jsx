import React from 'react'
import Productlist from './Productlist'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <NavLink to="/Productlist" >
      <img src='public\ChatGPT Image Aug 14, 2026, 03_58_20 PM.png' className='md:h-125 w-full'></img></NavLink>
    </div>
  )
}

export default Hero
