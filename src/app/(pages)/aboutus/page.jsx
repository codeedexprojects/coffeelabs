"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageSection from "@/components/landing/components/Appstore";
import AboutSection from "@/components/landing/components/Journey";
import ReviewsSection from "@/components/landing/components/Reviews";
import ValuesSection from "@/components/landing/components/Values";
import React, { useEffect } from "react";
import Values from "./components/Values";
import Aos from "aos";

function page() {

    useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div                 data-aos="fade-up"
 className="mt-15">
      <Header />
      <AboutSection />
      <ValuesSection />
      <Values/>
      <ReviewsSection />
      <ImageSection />
      <Footer />
    </div>
  );
}

export default page;
