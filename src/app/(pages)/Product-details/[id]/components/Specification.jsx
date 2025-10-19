import { Star } from 'lucide-react';
import React from 'react'

function Specification() {

    
  const specifications = [
    { label: 'Material', value: 'Stainless Steel' },
    { label: 'Power', value: '1450W' },
    { label: 'Water Tank Capacity', value: '1.5 Liters' },
    { label: 'Voltage', value: '220-240V' },
    { label: 'Dimensions', value: '30 × 25 × 32 Cm' },
    { label: 'Warranty', value: '1 Year' }
  ];


  return (
    <div>
        <div className=" bg-[#F8F3EE] p-4 md:p-8">
      <div className=" overflow-hidden">
        <div className="relative  px-6 py-12 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Product Specifications
          </h2>

          <div className=" bg-white rounded-2xl shadow-lg overflow-hidden">
            {specifications.map((spec, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 md:px-8 py-5 ${
                  idx !== specifications.length - 1 ? 'border-b border-gray-200' : ''
                } hover:bg-amber-50 transition-colors`}
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg mb-2 sm:mb-0">
                  {spec.label}
                </span>
                <span className="text-[#4B2E2B] text-base md:text-lg font-medium">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Specification
