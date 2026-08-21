import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RootLayout from './RootLayout'
import Hero from './Hero'
import Cart from './Cart'
import Compare from './Compare'
import Account from './Account'
import Productlist from "./Productlist";
import Categoriespage from './Categoriespage'
import WishlistPage from './WishlistPage'
import SearchPage from './SearchPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="WishlistPage" element={<WishlistPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Compare" element={<Compare />} />
        <Route path='Account' element={<Account/>}/>
 <Route
          path="Categoriespage/:category"
          element={<Categoriespage />}
        />  
        <Route path='SearchPage' element={<SearchPage/>}/>
        <Route path="Productlist" element={<Productlist />} />      </Route>
    </Routes>
  )
}

export default App