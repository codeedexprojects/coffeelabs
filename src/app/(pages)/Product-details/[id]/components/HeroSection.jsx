"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductByIdApi } from "@/services/api";
import { getImageUrl } from "@/services/baseUrl";
import { Star } from "lucide-react";
import { MdCoffeeMaker, MdEnergySavingsLeaf } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { AiFillThunderbolt } from "react-icons/ai";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const productSpecs = product && [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category?.name },
    { label: "Model Number", value: product.Model_number },
    { label: "Subtitle", value: product.subtitle },
    { label: "Customer Picks", value: product.customer_picks ? "Yes" : "No" },
    { label: "Today's Deal", value: product.todays_deal ? "Yes" : "No" },
  ];

  const features = [
    {
      icon: <MdCoffeeMaker className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Easy Brewing",
      description: "Simple One Touch Control For Ease",
    },
    {
      icon: <HiMiniWrenchScrewdriver className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Premium Build",
      description: "Build To Last Premium Stainless Steel Body",
    },
    {
      icon: <AiFillThunderbolt className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Fast Heating",
      description: "Ready To Serve Hot Coffee In Just 30 Seconds",
    },
    {
      icon: <MdEnergySavingsLeaf className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Energy Efficient",
      description: "Designed For Sustainable, Long-Term Use.",
    },
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductByIdApi(id);
        setProduct(data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-[#F8F3EE] flex justify-center items-center text-gray-600 px-4">
        Loading product details...
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen bg-[#F8F3EE] flex justify-center items-center text-red-500 px-4">
        Product not found!
      </div>
    );

  const images = product.images?.map((img) =>
    typeof img === "string" ? getImageUrl(img) : getImageUrl(img.url)
  );

  const firstVariant = product.variants?.[0];
  const firstUnit = firstVariant?.units?.[0];
  const salePrice = firstUnit?.price || 0;
  const originalPrice = firstUnit?.original_price || 0;

  return (
    <>
      <div className="min-h-screen bg-[#F8F3EE] p-3 sm:p-4 md:p-8 mt-10">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-4 md:p-6 lg:p-12">
            {/* Left Side - Images */}
            <div className="space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center aspect-square bg-white rounded-lg shadow-sm">
                <img
                  src={images?.[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnail Gallery */}
              {images?.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`bg-slate-100 rounded-lg p-2 sm:p-3 transition-all hover:shadow-md ${
                        selectedImage === idx ? "ring-2 ring-amber-600" : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Info */}
            <div className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Product Name */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4B2E2B] mb-2 leading-tight">
                  {product.name}
                </h1>

                {/* Category */}
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  {product.category?.name} / {product.sub_category?.name}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm">
                    (1,342 Reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {product.description || "No description available."}
                </p>
              </div>

              {/* Price */}
              <div className="py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  {originalPrice > salePrice && (
                    <span className="text-gray-400 riyal-symbol line-through text-xl sm:text-2xl">
                      {originalPrice}
                    </span>
                  )}
                  <span className="text-3xl sm:text-4xl riyal-symbol  lg:text-5xl font-bold text-gray-900">
                    {salePrice}
                  </span>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.codeedex.coffeelabs",
                    "_blank"
                  )
                }
                className="w-full bg-[#4B2E2B] text-white font-semibold py-3 sm:py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Order In App
              </button>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#AF797429] rounded-lg flex items-center justify-center text-[#4B2E2B]">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications Section */}
        <div className="bg-[#F8F3EE] p-3 sm:p-4 md:p-8">
          <div className="overflow-hidden">
            <div className="relative px-3 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
                Product Specifications
              </h2>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                {productSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 ${
                      idx !== productSpecs.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    } hover:bg-amber-50 transition-colors`}
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-0">
                      {spec.label}
                    </span>
                    <span className="text-[#4B2E2B] text-sm sm:text-base md:text-lg font-medium break-words">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
