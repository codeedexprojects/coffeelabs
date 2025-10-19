import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AppStore from "@/components/landing/components/Appstore";
import BrandsSection from "@/components/landing/components/Brands";
import CategorySection from "@/components/landing/components/Category";
import FeaturesSection from "@/components/landing/components/FeatureSection";
import HeroSection from "@/components/landing/components/Hersection";
import AboutSection from "@/components/landing/components/Journey";
import CustomerFavorites from "@/components/landing/components/Products";
import ReviewsSection from "@/components/landing/components/Reviews";
import ValuesSection from "@/components/landing/components/Values";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {

  return (
   <>
  <div className="mt-12" >
   <Header/>
   <HeroSection/>
   <FeaturesSection/>
   <CategorySection/>
   <CustomerFavorites/>
   <AboutSection/>
  <ValuesSection/>
   <BrandsSection/>
   <ReviewsSection/>
   <AppStore/>
   <Footer/>

  

    </div>
   </>
  );
}
