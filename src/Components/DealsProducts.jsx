import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import DealsProduct from "./DealsComponent";
import DealsComponent from "./DealsComponent";

const DealsProducts= () => {
  const products = useContext(ProductContext);
  return (
    <div>
      <h1 className="font-bold text-2xl text-center m-8">Today's Deals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item) => (
          <DealsComponent
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsProducts;