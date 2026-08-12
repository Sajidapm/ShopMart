import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Product from './Product'
const Products = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        async function fetchData() {
    try{
            const response = await axios.get("https://dummyjson.com/products")
           setData(response.data.products);
                }catch (error){console.log(error)}
    }fetchData()
},[])
  return (
        <div>  
            <h1 className='font-bold text-2xl text-center m-8'>Explore Our Products</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {
                data.map(item=>(<Product key={item.id} product={item}/>))
            }
            </div>
    </div>
  )
}

export default Products
