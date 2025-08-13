import React, { useState } from "react";
import ProductImg from "../components/product_img";
import Review_img from "../assets/review_img.png";
import { products_data } from "../components/productData";


function ProdutPage() {
  const product = product[0];
  const [isadded, setIsadded] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');

  // Sample reviews data
  const Reviews = [
    {
      name: "John Doe",
      review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
      img: Review_img,
      stars: <div><span className="text-yellow-500 text-xl">★★★★★</span>
        <span className="text-gray-600 mx-3">(4.8)</span></div>
    },
    {
      name: "John Carter",
      review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
      img: Review_img,
      stars: <div><span className="text-yellow-500 text-xl">★★★★</span>
        <span className="text-gray-600 mx-3">(4)</span></div>
    },
    {
      name: "John Dom",
      review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
      img: Review_img,
      stars: <div><span className="text-yellow-500 text-xl ">★★★</span>
        <span className="text-gray-600 mx-3">(3)</span></div>
    }

  ]



  return (
    <div className="flex flex-col  justify-between gap-10 p-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 p-10">

        <div className="w-[50%]">
          <ProductImg />
        </div>

        <div className="flex flex-col  gap-1 ">
          <h2 className="font-semibold text-4xl self-center mb-5">Elegant Evening Dress</h2>
          <p className="text-xl mb-5 pl-5">This stunning evening dress is perfect for any special occasion. Made from luxurious fabric, it features a flattering silhouette and exquisite detailing.</p>
          <h3 className="font-semibold text-2xl">Price:</h3><p className="pl-5 mb-5 text-xl font-semibold ">₹999 <span className=" mb-5 text-sm font-semibold text-gray-500 line-through ">₹1999</span></p>
          <h3 className="font-semibold text-2xl">Available Sizes:</h3>

          {/* Sizes button */}
          <div className="flex gap-8 items-center justify-start pl-5">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                className={`px-5 py-3 rounded-2xl border-1 transition-all duration-300 
                  ${selectedSize === size ? 'bg-gradient-to-br from-[#2c0e5c] to-[#391667] text-white' : 'bg-white text-black hover:bg-gradient-to-br from-[#3f2070] to-[#450d8d] hover:text-white'}`}
                onClick={() => setSelectedSize(size)}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity  */}
          <div>
            <h3 className="font-semibold text-2xl my-5">Quantity</h3>
            <div className="flex items-center gap-5 pl-5">
              <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300" onClick={() => setIsadded(isadded > 1 ? isadded - 1 : 1)}>-</button>
              <span className="text-xl">{isadded}</span>
              <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300" onClick={() => setIsadded(isadded + 1)}>+</button>
            </div>
          </div>

          {/* Add to cart button */}
          <button className="mt-5 px-6 py-3 bg-gradient-to-br from-[#2c0e5c] to-[#391667] w-1/2 text-white rounded-2xl hover:bg-[#3f2070] active:scale-[0.98] active:duration-75 transition-all self-center duration-300">
            {isadded === 1 ? "Buy Now" : `Buy ${isadded} Now`}
          </button>

          {/* Buy Now button */}
          <button className="mt-5 px-6 py-3 bg-gradient-to-br from-[#2c0e5c] to-[#391667] w-1/2 text-white rounded-2xl hover:bg-purple-500 self-center active:scale-[0.98] active:duration-75 transition-all duration-300">
            Add to Cart
          </button>


        </div>



      </div >
      {/* Customer Reviews  */}
      <div className="flex flex-col w-[85%] self-center justify-between gap-10 px-10">
        <h3 className="font-semibold text-3xl">Customer Reviews</h3>

        <div className="flex flex-col gap-5 ">
          {Reviews.map((r) => (
            <div className="flex flex-col  bg-gray-100 p-4 my-3 rounded-lg shadow-md">
              <div className="flex  items-center gap-3 ">
                <img src={r.img} />
                <h2 className="mx-5">{r.name}</h2>
              </div>
              {r.stars}
              <p>{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


}

export default ProdutPage;