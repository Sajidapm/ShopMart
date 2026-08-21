import React from 'react'
import Productlist from './Productlist'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <NavLink to="/Productlist" >
      <img src='/Hero.png' className='md:h-125 w-full'></img></NavLink>
    </div>
  )
}

export default Hero
