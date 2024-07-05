import React, { useState } from "react";
import Navbar from "../../Components/header/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { HeroSection } from "./HeroSection";
import CategoryList from "../../Components/Product/CategoryList";
import ProductList from "../../Components/Product/ProductList";
import ProductCatogery from "./ProductCatogery";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (

      <main className="relative h-screen  bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="sticky top-0">
        <Sidebar/>
          </div>
          <div className="flex flex-col w-full md:space-y-4 overflow-hidden relative">
            <div className="sticky top-0">

          <Navbar/>
            </div>

          <ProductCatogery/>          
          </div>
        </div>
      </main>
    
  );
};

export default Home;
