import React, { createContext } from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const ProductContext = createContext() 
const  ProductContextProvider= ({children})=>{
        const [products,setProducts] = useState([])
        useEffect(()=>{
            async function fetchData() {
        try{
                const response = await axios.get("https://dummyjson.com/products")
               setProducts(response.data.products);
               console.log(response)
                    }catch (error){console.log(error)}
        }fetchData()
    },[])
    
  return (
    <div>
      <ProductContext value={products}>
        {children}
    </ProductContext>    </div>
  )}

export {ProductContext}
export default ProductContextProvider