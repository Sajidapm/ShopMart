import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RootLayout from './RootLayout'
import Hero from './Hero'
import Whishlist from './Whishlist'
import Cart from './Cart'
import Compare from './Compare'
import Account from './Account'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="Whishlist" element={<Whishlist />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Compaire" element={<Compare />} />
        <Route path='Account' element={<Account/>}/>
      </Route>
    </Routes>
  )
}

export default App