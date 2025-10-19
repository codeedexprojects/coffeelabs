"use client"
import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function BrandsSection() {
  const brands = [
    {
      id: 1,
      name: 'Bams',
      image: '/brnd1.png',
      bgColor: 'bg-white'
    },
    {
      id: 2,
      name: 'DeLonghi',
      image: '/brnd2.png',
      bgColor: 'bg-white'
    },
    {
      id: 3,
      name: 'Torani',
      image: '/brand3.png',
      bgColor: 'bg-white'
    },
    {
      id: 4,
      name: 'Giffard',
      image: '/brand4.png',
      bgColor: 'bg-white'
    },
    {
      id: 5,
      name: 'Nescafé',
      image: '/brand5.png',
      bgColor: 'bg-white'
    },
    {
      id: 6,
      name: 'Kida',
      image: '/brand6.png',
      bgColor: 'bg-white'
    },
    {
      id: 7,
      name: 'La Cimbali',
      image: '/brand7.png',
      bgColor: 'bg-white'
    },
    {
      id: 8,
      name: 'Intenso2',
      image: '/delonghi.png',
      bgColor: 'bg-white'
    },
    {
      id: 9,
      name: 'Soil',
      image: '/brand9.png',
      bgColor: 'bg-white'
    },
    {
      id: 10,
      name: 'Black Knight',
      image: '/kia.png',
      bgColor: 'bg-white'
    },
    {
      id: 11,
      name: 'Kimbo',
      image: '/soil.png',
      bgColor: 'bg-white'
    },
    {
      id: 12,
      name: 'Qualité Roastery',
      image: '/nescafe.png',
      bgColor: 'bg-white'
    }
  ];
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F3EE]  px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h1  data-aos="fade-up" className="text-4xl sm:text-5xl font-bold text-[#4B2E2B] mb-4 ">
            Brands We Work With
          </h1>
          <p  data-aos="fade-up" className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Collaborating With Trusted Brands And Distributors Who Share Our Passion For Quality Coffee Products
          </p>
        </div>

        {/* Brands Grid */}
        <div  data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {brands.map((brand) => (
            <div
              key={brand.id} 
               data-aos="fade-up"
              className={`${brand.bgColor} rounded-lg shadow-md overflow-hidden aspect-square flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}