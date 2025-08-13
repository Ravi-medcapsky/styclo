import React, { useState } from "react";
import Image1 from '../assets/product1.png';
import Image2 from '../assets/product2.png';
import Image3 from '../assets/product3.png';
import Image4 from "../assets/women4.jpg";


const initialCart = [
  { id: 1, name: "Classic White T-Shirt", size: "M", quantity: 1, cartImages:Image1 },
  { id: 2, name: "Slim Fit Jeans", size: "S", quantity: 1, cartImages:Image2 },
  { id: 3, name: "Leather Ankle Boots", size: "8", quantity: 1, cartImages:Image3 },
  { id: 4, name: "Leather Ankle Boots", size: "8", quantity: 1, cartImages:Image4 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex flex-col sm:flex-row items-center space-x-4 max-w-[50%]">
               <img src={ item.cartImages } className="w-[10%]" />
            <div className="flex flex-col  space-x-4 ">
                {/* cartImages  */}
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">Size: {item.size}</p>
            </div>
            </div>


            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>


        {/* Promocode  */}
      <div className="mt-8">
        <label className="block mb-2 font-medium">Promo Code</label>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter promo code"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>


        {/* Checkout  */}
      <div className="mt-6 flex justify-center">
        <button className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;