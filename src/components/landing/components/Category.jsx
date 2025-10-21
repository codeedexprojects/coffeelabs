"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, getImageUrl } from "@/services/baseUrl";
import { getCategoryApi } from "@/services/api";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryApi();
        setCategories((data.categories || []).slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  const defaultImage =
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80";
  const getDisplayTitle = (name) => name || "Category";
  // Improved image URL handler with fallback
  const getCategoryImageUrl = (category) => {
    if (!category.image) {
      console.warn(`No image for category: ${category.name}`);
      return defaultImage;
    }
    const imageUrl = getImageUrl(category.image);
    console.log(`Category: ${category.name}, Image URL: ${imageUrl}`);
    return imageUrl || defaultImage;
  };
  if (loading) {
    return (
      <section className="bg-[#F8F3EE] py-12 sm:py-16 lg:py-20">
        <div className="text-center animate-pulse text-gray-700">
          Loading categories...
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="bg-[#F8F3EE] py-12 sm:py-16 lg:py-20">
        <div className="text-center text-red-600">{error}</div>
      </section>
    );
  }
  return (
    <section className="bg-[#F8F3EE] py-12 sm:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-[#4B2E2B] mb-3">
            Discover Our Range
          </h2>
          <p data-aos="fade-up" className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore Our Best-Selling Coffee Essentials — From Ingredients To
            Brewing Tools
          </p>
        </div>
        {/* Categories */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-6">
          <div className="flex lg:contents overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
            {categories.map((category) => {
              const imageUrl = getCategoryImageUrl(category);
              return (
                <div
                  key={category._id}
                  data-aos="fade-up"
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 snap-center"
                >
                  {/* Background Image - Using Next.js Image for better handling */}
                  <div className="absolute inset-0">
                    <Image
                      src={imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 25vw"
                      onError={(e) => {
                        console.error(`Failed to load image for ${category.name}`);
                        e.target.src = defaultImage;
                      }}
                      unoptimized={imageUrl.includes('cloudinary')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  </div>
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                    <h3 className="text-2xl font-bold mb-2">
                      {getDisplayTitle(category.name)}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <button
                      onClick={() => router.push("/products")}
                      className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
                    >
                      View Category
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}