import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RootLayout from './RootLayout'
import Hero from './Hero'
import Cart from './Cart'
import ComparePage from './ComparePage'
import Productlist from "./Productlist";
import Categoriespage from './Categoriespage'
import WishlistPage from './WishlistPage'
import SearchPage from './SearchPage'
import Product from './Components/Product'
import ProductDetailsPage from './ProductDetailsPage'
import DealsPage from './DealsPage'
import HelpPage from './HelpPage'
import AccountPage from './AccountPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="WishlistPage" element={<WishlistPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="ComparePage" element={<ComparePage />} />
        <Route path='AccountPage' element={<AccountPage/>}/>
 <Route
          path="Categoriespage/:category"
          element={<Categoriespage />}
        />  
        <Route path='SearchPage' element={<SearchPage/>}/>
        <Route path='DealsPage' element={<DealsPage/>}/>
        <Route path="Productlist" element={<Productlist />} />
        <Route path="Product/:id" element={<Product />} />  
        <Route path="/ProductDetails/:id" element={<ProductDetailsPage />}/>
        <Route path='/HelpPage' element={<HelpPage/>}/>

   </Route>
 </Routes>
  )
}

export default App