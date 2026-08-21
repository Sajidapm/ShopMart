import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartItem = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">
          Your Cart is Empty
        </h2>

        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Cart Products */}

        <div className="lg:col-span-2 space-y-4">

          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center"
            >

              {/* Image */}

              <img
                src={item.images[0]}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />

              {/* Product Details */}

              <div className="flex-1 w-full">

                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  {item.category}
                </p>

                <p className="font-semibold mt-2">
                  ${item.price}
                </p>

                {/* Quantity */}

                <div className="flex items-center gap-3 mt-4">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 border rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 border rounded"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* Remove */}

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 "
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        {/* Order Summary */}

        <div className="bg-white rounded-xl p-6 h-fit">

          <h2 className="text-xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6">
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default CartItem;