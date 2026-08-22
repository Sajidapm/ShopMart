import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./Context/ProductContext";
import Product from "./Components/Product";

const CategoriesPage = () => {
  const { category } = useParams();

  const products = useContext(ProductContext);

  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  // Category filter
  const categoryProducts = products.filter(
    (item) => item.category === category
  );

  // Price + Rating filter
  const filteredProducts = categoryProducts.filter((item) => {

    const priceMatch =
      price === "" || item.price <= Number(price);

    const ratingMatch =
      rating === "" || item.rating >= Number(rating);

    return priceMatch && ratingMatch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 p-5">

      {/* Sidebar */}
      <aside className="w-full md:w-64 border border-gray-200 rounded-lg p-5 h-fit">

        <h2 className="text-xl font-bold mb-5">
          Filter
        </h2>

        {/* Price */}
        <div className="mb-6">

          <h3 className="font-semibold mb-2">
            Price
          </h3>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">All Price</option>
            <option value="50">Below $50</option>
            <option value="100">Below $100</option>
            <option value="200">Below $200</option>
            <option value="500">Below $500</option>
          </select>

        </div>

        {/* Rating */}
        <div>

          <h3 className="font-semibold mb-2">
            Rating
          </h3>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">All Rating</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
            <option value="2">2★ & above</option>
          </select>

        </div>

      </aside>

      {/* Products */}
      <div className="flex-1">

        <h1 className="text-2xl font-bold mb-6 capitalize">
          {category}
        </h1>

        {filteredProducts.length === 0 ? (

          <p className="text-center text-gray-500">
            No products found
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {filteredProducts.map((item) => (
              <Product
                key={item.id}
                product={item}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default CategoriesPage;