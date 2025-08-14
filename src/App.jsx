import React, { useState } from "react";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BestSeller from "./pages/BestSelller";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import Women from "./pages/Women";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ProductPage from "./pages/singleProduct";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  const [cartItems, setCartItems] = useState([]);

  // 2. This function will be passed to the ProductPage.
  const handleAddToCart = (product, quantity, size) => {
    setCartItems((prevItems) => {
      // Check if the item (with the same id AND size) is already in the cart
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === size
      );

      // If it exists, update its quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      // If it's a new item, add it to the cart
      // We create a new object with all necessary info
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: quantity,
          size: size,
          cartImages: product.img, // Use the first product image for the cart
        },
      ];
    });

    // alert(`${quantity} x ${product.name} (Size: ${size}) added to cart!`);
  };

  return (
    <Router>
      <Routes>
        {/* Login route without header */}
        <Route path="/login" element={<Login />} />

        {/* All other routes with header */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/best-seller" element={<BestSeller />} />
                <Route path="/men" element={<Men />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/women" element={<Women />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}  />
                <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
                <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
