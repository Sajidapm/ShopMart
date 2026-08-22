import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from "./Context/ProductContext"
import Product from "./Components/Product"

const Hero = () => {
  const products = useContext(ProductContext)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div>

      {/* Hero Image */}
      <div>
        <NavLink to="/Productlist">
          <img
            src="/Hero.png"
            className="md:h-125 w-full"
            alt="Hero"
          />
        </NavLink>
      </div>

      {/* Small Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols8- lg:grid-cols-8 gap-5 px-4">

        {products.map((item) => (
            <NavLink to={`/Product/${item.id}`}>          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className=" px-3 cursor-pointer"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 border border-gray-300 rounded-2xl object-contain "
            />

            <h2 className="font-semibold text-center mt-2">
              {item.title}
            </h2>
          </div>
          </NavLink>
        ))}

      </div>

      {/* Selected Product Card */}
      {selectedProduct && (
        <div className="p-5">
          <Product product={selectedProduct} />
        </div>
      )}

    </div>
  )
}

export default Hero