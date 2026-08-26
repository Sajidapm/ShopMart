import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Product from "./Product";

const Products = () => {
  const products = useContext(ProductContext);
  

  return (
    <div>
      <h1 className="font-bold text-2xl text-center m-8">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item) => (
          <Product
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;