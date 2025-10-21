"use client"
import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getProductApi } from '@/services/api';
import { getImageUrl } from '@/services/baseUrl';
import { useRouter } from 'next/navigation';

export default function CustomerFavorites() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductApi();
        
        const customerFavoriteProducts = data.data.products
          .filter(product => product.customer_picks === true)
          .map(product => {
            const firstVariant = product.variants?.[0];
            
            let originalPrice = 0;
            let salePrice = 0;
            
            if (firstVariant) {
              if (firstVariant.units && firstVariant.units.length > 0) {
                const firstUnit = firstVariant.units[0];
                originalPrice = firstUnit.original_price || 0;
                salePrice = firstUnit.price || 0;
              } 
              else if (firstVariant.original_price !== undefined) {
                originalPrice = firstVariant.original_price;
                salePrice = firstVariant.price;
              }
            }
            
            if (originalPrice === 0 && product.minPrice !== null) {
              originalPrice = product.maxPrice || product.minPrice || 0;
              salePrice = product.minPrice || 0;
            }

            let imageUrl = '';
            if (product.images && product.images.length > 0) {
              if (typeof product.images[0] === 'string') {
                imageUrl = getImageUrl(product.images[0]);
                console.log('Generated Image URL:', imageUrl); // Debug log
              } 
              else if (product.images[0].url) {
                imageUrl = getImageUrl(product.images[0].url);
                console.log('Generated Image URL:', imageUrl); // Debug log
              }
            }

            return {
              id: product._id,
              name: product.name,
              image: imageUrl,
              description: product.description || product.subtitle || 'No description available',
              originalPrice: originalPrice,
              salePrice: salePrice
            };
          });
        
        setProducts(customerFavoriteProducts);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const ProductImage = ({ src, alt, className }) => {
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    
    const handleError = () => {
      console.log('Image failed to load:', src); 
      setImgError(true);
    };

    const handleLoad = () => {
      console.log('Image loaded successfully:', src); 
      setImgLoaded(true);
    };

    if (imgError || !src) {
      return (
        <div className={`${className} bg-gray-200 flex items-center justify-center`}>
          <span className="text-gray-500 text-sm">No Image</span>
        </div>
      );
    }

    return (
      <div className="relative">
        {!imgLoaded && (
          <div className={`${className} bg-gray-200 flex items-center justify-center absolute inset-0`}>
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          onError={handleError}
          onLoad={handleLoad}
          style={{ display: imgLoaded ? 'block' : 'none' }}
        />
      </div>
    );
  };

 const handleExploreClick = (id) => {
  console.log("Navigating to product ID:", id);
  router.push(`/Product-details/${id}`);
};
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F3EE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F3EE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F3EE] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1                 data-aos="fade-up"
className="text-4xl sm:text-5xl font-bold text-[#4B2E2B] mb-4">
          Customer Favorites
        </h1>
        <p                 data-aos="fade-up"
 className="text-lg sm:text-xl text-gray-600">
          The Best Of CoffeeLabs, Chosen By You
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {products.length === 0 ? (
          <div className="text-center text-gray-500">
            No customer favorite products found.
          </div>
        ) : (
          <>
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                                  data-aos="fade-up"

                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  <div className="aspect-square bg-white overflow-hidden flex items-center justify-center">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex justify-around gap-10 mb-6">
                      {product.originalPrice > product.salePrice ? (
                        <span className="text-gray-400 riyal-symbol line-through text-sm">
                           {product.originalPrice.toFixed(2)}
                        </span>
                      ) : null}
                      <span className="text-black font-bold">
                         {product.salePrice.toFixed(2)}
                      </span>
                    </div>

                    {/* Button */}
                    <button
                     onClick={() => handleExploreClick(product.id)}
                      className="w-full bg-[#4B2E2B] hover:bg-[#5a3a36] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />
                      Explore Product
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col min-w-[280px] max-w-[280px] flex-shrink-0"
                  >
                    <div className="aspect-square bg-white overflow-hidden flex items-center justify-center">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-40 h-40 object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-2">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="flex justify-between items-center mb-4">
                        {product.originalPrice > product.salePrice ? (
                          <span className="text-gray-400 line-through text-sm">
                             {product.originalPrice.toFixed(2)}
                          </span>
                        ) : null}
                        <span className="text-black font-bold">
                           {product.salePrice.toFixed(2)}
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}