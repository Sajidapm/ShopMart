import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 h-96 '> 
    <div className='border-b border-gray-500'>
    <div className=' flex justify-between px-40 pt-12 '>
    <div >
    <div className='flex py-12'>
      <span className='text-white text-2xl font-bold'>Shop</span>
      <span className='text-yellow-600 font-bold text-2xl'>Smart</span>
    </div>
    <p className='text-white'>Your smarter destination for <br/>everyday shoping</p>
    </div>
    <ul className='flex-col'>
      <h1 className='text-white'>Quick Links</h1>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul className='text-white font-bold'>
      <h2>Customer Service</h2>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>

    <ul className='text-white font-bold'>
      <h2>Contact Us</h2>
      <li></li>
      <li></li>
      <li></li>
      </ul>
      </div>
      </div>
    </div>
  
  )
}

export default Footer
