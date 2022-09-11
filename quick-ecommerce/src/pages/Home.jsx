import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
