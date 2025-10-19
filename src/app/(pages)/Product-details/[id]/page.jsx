import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
// import Specification from "./components/Specification";
import ProductDetails from "./components/HeroSection";
import ImageSection from "@/components/landing/components/Appstore";
import CustomerFavorites from "./components/productsSection";

function page() {
  return (
    <div>
      <Header />
      <ProductDetails />

      {/* <Specification /> */}
      <CustomerFavorites />
      <ImageSection />
      <Footer />
    </div>
  );
}

export default page;
