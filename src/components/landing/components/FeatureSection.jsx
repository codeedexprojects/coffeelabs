"use client"
import { Leaf, Coffee, Scale } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Leaf size={48} strokeWidth={1.5} />,
      title: "Sustainably Sourced"
    },
    {
      icon: <Coffee size={48} strokeWidth={1.5} />,
      title: "Quality-Focused"
    },
    {
      icon: <Scale size={48} strokeWidth={1.5} />,
      title: "Transparently Traded"
    }
  ];

  return (
    <section className="bg-[#F8F3EE] border-t border-b border-stone-300">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        {/* Desktop grid, mobile horizontal scroll */}
        <div className="md:px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-3 md:gap-12">
          <div className="flex md:contents overflow-x-auto gap-8 md:gap-12 px-4 sm:px-6 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-4 text-center snap-start md:snap-align-none min-w-[250px] sm:min-w-[280px] md:min-w-0"
              >
                <div className="text-gray-800 flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
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