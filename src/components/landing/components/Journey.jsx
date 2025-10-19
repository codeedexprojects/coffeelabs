import React from 'react';

export default function AboutSection() {
  return (
    <div className=" bg-[#F8F3EE] py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h1                 data-aos="fade-up"
 className="text-4xl sm:text-5xl font-bold text-[#4B2E2B] mb-4">
            The Coffee Labs Journey
          </h1>
          <p                  data-aos="fade-up"
className="text-lg sm:text-xl text-[#1E1E1E] max-w-4xl mx-auto">
            Blending Innovation, Quality, And Craftsmanship To Redefine The Coffee Experience
          </p>
        </div>

        {/* Content */}
        <div                 data-aos="fade-up"
 className="">
          {/* Text Content */}
          <div className="  text-[#1E1E1E]">
            <p className="text-base sm:text-lg leading-relaxed">
              At CoffeeLabs, We Believe That Great Coffee Starts Long Before The First Sip — It Begins With Quality, Innovation, And Passion. Founded With The Vision To Bring Professional Coffee-Making Experiences Closer To Everyone, We Curate And Craft Premium Products Ranging From Coffee Powders And Syrups To Creams And High-Performance Brewing Equipment.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We Are Focused In <span className="font-bold text-[#4B2E2B]">Excellence, Authenticity, And Sustainability</span>. Every Product We Offer Is Carefully Selected To Help Coffee Lovers, Home Brewers, And Cafés Create The Perfect Cup — Consistently. We Blend Science With Art, Ensuring That Each Ingredient And Tool Meets The Highest Standards Of Quality.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              At CoffeeLabs, We're More Than Just A Brand — We're A Community Built On The Love Of Coffee, Innovation, And The Pursuit Of Perfection In Every Brew.
            </p>
          </div>

          {/* Image Placeholder */}
          {/* <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-lg aspect-square lg:aspect-auto lg:h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=500&h=600&fit=crop"
                alt="Coffee Labs"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}