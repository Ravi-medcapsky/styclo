import React from "react";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BestSeller from "./pages/BestSelller";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import Women from "./pages/Women";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Testimonials from "./components/Testimonials";


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
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Testimonials />
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
