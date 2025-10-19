"use client"
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="/aboutus" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="/products" className="text-gray-700 hover:text-gray-900 font-medium">
              Products
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Center */}
          <div className="flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            <img
            src='/logo.jpg'
             className="text-xl font-semibold text-gray-900"/>
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="bg-[#4B2E2B] text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
              Booking Slot
            </button>
          </div>

          {/* Right Actions - Mobile (Search & Booking) */}
          <div className="flex md:hidden items-center space-x-2">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="bg-[#4B2E2B] text-white px-3 py-1.5 text-sm rounded  transition-colors">
              Booking
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <a href="/" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              Home
            </a>
            <a href="/aboutus" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              About
            </a>
            <a href="/products" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              Products
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}