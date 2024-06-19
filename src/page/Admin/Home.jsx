import React, { useState } from "react";
import Navbar from "../../Components/header/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { HeroSection } from "./HeroSection";
import CategoryList from "../../Components/Product/CategoryList";
import ProductList from "../../Components/Product/ProductList";
import ProductCatogery from "./ProductCatogery";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 bg-gray-200">
        <div className="w-full max-w-[80vw]  h-full max-md:max-w-full max-md:my-10 ">
         <ProductCatogery/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
