"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: 'Our Journey With CoffeeLabs Has Been Exceptional — From Premium Blends To Top-Notch Service. "Their Passion For Quality Coffee Truly Reflects In Every Cup We Brew!"',
      author: 'Mahesh Babu',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
      bgColor: 'bg-black'
    },
    {
      id: 2,
      text: 'Our Journey With CoffeeLabs Has Been Exceptional — From Premium Blends To Top-Notch Service. "Their Passion For Quality Coffee Truly Reflects In Every Cup We Brew!"',
      author: 'Mahesh Babu',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
      bgColor: 'bg-white'
    },
    {
      id: 3,
      text: 'Our Journey With CoffeeLabs Has Been Exceptional — From Premium Blends To Top-Notch Service. "Their Passion For Quality Coffee Truly Reflects In Every Cup We Brew!"',
      author: 'Mahesh Babu',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
      bgColor: 'bg-black'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const prev = (currentIndex - 1 + reviews.length) % reviews.length;
    const next = (currentIndex + 1) % reviews.length;
    return [prev, currentIndex, next];
  };

  return (
    <div className="bg-[#F8F3EE] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-gray-800"></div>
            <h1                 data-aos="fade-up"
 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4B2E2B] whitespace-nowrap">
              OUR GUESTBOOK
            </h1>
            <div className="w-8 sm:w-12 h-0.5 bg-gray-800"></div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Mobile: Single card view */}
          <div className="md:hidden">
            <div className="mb-6">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                                  data-aos="fade-up"

                  className={`transition-opacity duration-300 ${
                    index === currentIndex ? 'block' : 'hidden'
                  }`}
                >
                  <div
                    className={`${review.bgColor} rounded-lg shadow-lg p-6 h-full flex flex-col justify-between`}
                  >
                    {/* Quote Icon */}
                    <div className="mb-4 flex justify-center">
                      <Quote
                        size={32}
                        className={review.bgColor === 'bg-black' ? 'text-gray-600' : 'text-gray-400'}
                      />
                    </div>

                    {/* Review Text */}
                    <p
                      className={`text-sm leading-relaxed mb-6 flex-grow text-center ${
                        review.bgColor === 'bg-black'
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }`}
                    >
                      {review.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-300 border-opacity-20">
                      <img
                        src={review.image}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4
                          className={`font-bold text-sm ${
                            review.bgColor === 'bg-black'
                              ? 'text-white'
                              : 'text-gray-800'
                          }`}
                        >
                          {review.author}
                        </h4>
                        <p
                          className={`text-xs ${
                            review.bgColor === 'bg-black'
                              ? 'text-gray-400'
                              : 'text-gray-600'
                          }`}
                        >
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Three cards view */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6 mb-8">
            {getVisibleReviews().map((reviewIndex, position) => {
              const review = reviews[reviewIndex];
              const isCenter = position === 1;

              return (
                <div
                  key={review.id}
                  className={`transition-all duration-300 ${
                    isCenter ? 'scale-105 z-10' : 'scale-95 opacity-60'
                  }`}
                >
                  <div
                    className={`${review.bgColor} rounded-lg shadow-lg p-6 lg:p-8 h-full flex flex-col justify-between`}
                  >
                    {/* Quote Icon */}
                    <div className="mb-4 flex justify-center">
                      <Quote
                        size={40}
                        className={isCenter ? 'text-gray-400' : review.bgColor === 'bg-black' ? 'text-gray-600' : 'text-gray-400'}
                      />
                    </div>

                    {/* Review Text */}
                    <p
                      className={`text-sm lg:text-base leading-relaxed mb-6 flex-grow ${
                        review.bgColor === 'bg-black'
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }`}
                    >
                      {review.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-300 border-opacity-20">
                      <img
                        src={review.image}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4
                          className={`font-bold text-sm lg:text-base ${
                            review.bgColor === 'bg-black'
                              ? 'text-white'
                              : 'text-gray-800'
                          }`}
                        >
                          {review.author}
                        </h4>
                        <p
                          className={`text-xs lg:text-sm ${
                            review.bgColor === 'bg-black'
                              ? 'text-gray-400'
                              : 'text-gray-600'
                          }`}
                        >
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevSlide}
              className="bg-gray-800 hover:bg-gray-900 text-white p-2 sm:p-3 rounded-full transition-colors duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800 hover:bg-gray-900 text-white p-2 sm:p-3 rounded-full transition-colors duration-200"
              aria-label="Next review"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Indicator - Mobile only */}
         
        </div>
      </div>
    </div>
  );
}