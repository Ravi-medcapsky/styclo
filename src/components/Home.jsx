import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import TopProducts from "./TopProducts";
import Banner from "./Banner";
import AOS from "aos";

const Home = () => {
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
    <div>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
    </div>
  );
};

export default Home;
