import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RootLayout from './RootLayout'
import Hero from './Hero'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Compare from './Compare'
import Account from './Account'
import Productlist from "./Productlist";const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Compaire" element={<Compare />} />
        <Route path='Account' element={<Account/>}/>
  <Route path="Productlist" element={<Productlist />} />      </Route>
    </Routes>
  )
}

export default App