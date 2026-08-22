import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import ProductContextProvider from "./Context/ProductContext";
import WishlistProvider from "./Context/WishlistContext";
import CartProvider from "./Context/CartContext";
import CompareProvider from "./Context/CompareContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CompareProvider>
    <CartProvider>
      <ProductContextProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </ProductContextProvider>
    </CartProvider>
  </CompareProvider>
);