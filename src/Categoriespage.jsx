import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext} from "./Context/ProductContext"
import Product from "./Components/Product";
import Categories from "./Components/Categories";

const Categoriespage = () => {
  const products = useContext(ProductContext);
  const { category } = useParams();

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="flex">
      <div className="md:w-80 h-dvh border border-gray-200">gdfg</div>
      <div>
      <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-center my-8 p-2 capitalize">
        {category} </h1 ><h1 className="font-bold text-2xl text-center my-8 p-2 capitalize">Collection</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((item) => (
          <Product
            key={item.id}
            product={item}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Categoriespage;