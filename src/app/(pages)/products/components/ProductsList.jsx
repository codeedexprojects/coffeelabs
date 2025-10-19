"use client";
import React, { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { getCategoryApi, getFilters, getProductApi } from "@/services/api";
import { getImageUrl } from "@/services/baseUrl";
import { useRouter } from "next/navigation";

export default function CoffeeProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  // 🧩 Helper: format product data
  const formatProducts = (productArray) => {
    return productArray
      .filter((product) => product.customer_picks === true)
      .map((product) => {
        const firstVariant = product.variants?.[0];
        let originalPrice = 0;
        let salePrice = 0;

        if (firstVariant) {
          if (firstVariant.units && firstVariant.units.length > 0) {
            const firstUnit = firstVariant.units[0];
            originalPrice = firstUnit.original_price || 0;
            salePrice = firstUnit.price || 0;
          } else if (firstVariant.original_price !== undefined) {
            originalPrice = firstVariant.original_price;
            salePrice = firstVariant.price;
          }
        }

        if (originalPrice === 0 && product.minPrice !== null) {
          originalPrice = product.maxPrice || product.minPrice || 0;
          salePrice = product.minPrice || 0;
        }

        let imageUrl = "";
        if (product.images && product.images.length > 0) {
          if (typeof product.images[0] === "string") {
            imageUrl = getImageUrl(product.images[0]);
          } else if (product.images[0].url) {
            imageUrl = getImageUrl(product.images[0].url);
          }
        }

        return {
          id: product._id,
          name: product.name,
          image: imageUrl,
          description:
            product.description ||
            product.subtitle ||
            "No description available",
          originalPrice,
          salePrice,
        };
      });
  };

  // 🟤 Fetch all products
  const fetchAllProducts = async () => {
    try {
      setProductLoading(true);
      const data = await getProductApi();
      setProducts(formatProducts(data.data.products));
    } catch (err) {
      setError("Failed to load products");
      console.error("Error fetching products:", err);
    } finally {
      setProductLoading(false);
    }
  };

  // 🟤 Fetch category list
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryApi();
        const apiCategories = data.categories || [];
        setCategories([{ name: "All Products", _id: null }, ...apiCategories]);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setCategoryLoading(false);
      }
    };
    fetchCategories();
    fetchAllProducts();
  }, []);

   const handleExploreClick = (id) => {
  console.log("Navigating to product ID:", id);
  router.push(`/Product-details/${id}`);
};

  // 🧩 Fallback Image Component
  const ProductImage = ({ src, alt, className }) => {
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    if (imgError || !src) {
      return (
        <div
          className={`${className} bg-gray-200 flex items-center justify-center`}
        >
          <span className="text-gray-500 text-sm">No Image</span>
        </div>
      );
    }

    return (
      <div className="relative">
        {!imgLoaded && (
          <div
            className={`${className} bg-gray-200 flex items-center justify-center absolute inset-0`}
          >
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setImgError(true)}
          onLoad={() => setImgLoaded(true)}
          style={{ display: imgLoaded ? "block" : "none" }}
        />
      </div>
    );
  };

  // 🟤 Category click handler
  const handleCategoryClick = async (category) => {
    setSelectedCategory(category.name);
    setIsSidebarOpen(false);

    try {
      setProductLoading(true);

      if (category.name === "All Products") {
        await fetchAllProducts();
      } else if (category._id) {
        const filteredData = await getFilters(category._id);
        const categoryProducts = formatProducts(filteredData.data.products);
        setProducts(categoryProducts);
      }
    } catch (err) {
      console.error("Error fetching category products:", err);
      setError("Failed to load category products");
    } finally {
      setProductLoading(false);
    }
  };

  // 🟠 Loading state
  if (productLoading || categoryLoading) {
    return (
      <div className="min-h-screen bg-[#F8F3EE] flex items-center justify-center">
        <div className="animate-pulse text-gray-700">Loading products...</div>
      </div>
    );
  }

  // 🟠 Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F3EE] flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F3EE] pb-20">
      {/* 🟤 Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-700 text-sm">
          Premium Ingredients And Equipment For The Perfect Cup Every Time
        </p>
      </div>

      {/* 🟤 Mobile Filter Button */}
      <div className="lg:hidden px-4 mb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-between shadow-sm"
        >
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <Menu size={20} />
            Browse Categories
          </span>
          <ChevronDown size={20} className="text-gray-500" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4">
        {/* 🟤 Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } lg:block fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-0
          bg-white lg:bg-transparent w-full sm:w-80 lg:w-64`}
        >
          <div className="lg:sticky lg:top-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden m-4 lg:m-0">
            <div className="bg-[#4B2E2B] text-white px-4 py-3 flex justify-between items-center">
              <h2 className="font-semibold text-base">Browse Categories</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-white hover:bg-white hover:bg-opacity-20 rounded p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-1">
              {categories.map((category) => (
                <button
                  key={category._id || category.name}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left text-sm transition-colors ${
                    selectedCategory === category.name
                      ? "bg-[#4B2E2B] text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* 🟤 Product Grid */}
        <main className="flex-1 min-w-0">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square flex items-center justify-center p-6">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full max-w-[200px] max-h-[200px] object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    {product.originalPrice > product.salePrice && (
                      <span className="text-gray-400 riyal-symbol  line-through text-sm">
                         {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-[#4B2E2B] riyal-symbol font-bold text-2xl">
                      {product.salePrice.toFixed(2)}
                    </span>
                  </div>
                 <button 
                                       onClick={() => handleExploreClick(product.id)}
                                      className="w-full bg-[#4B2E2B] hover:bg-[#5a3a36] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                                        <ShoppingCart size={18} />
                                        Explore Product
                                      </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 🟤 Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
