import React from 'react';
import { Settings, Gem, Zap } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      id: 1,
      icon: Settings,
      title: 'Quality',
      description: 'We Never Compromise On The Quality Of Our Equipment Or Services.'
    },
    {
      id: 2,
      icon: Gem,
      title: 'Integrity',
      description: 'We Build Relationships Based On Trust And Transparency.'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Innovation',
      description: 'We Stay Ahead With The Latest In Coffee Technology And Techniques.'
    }
  ];

  const stats = [
    {
      id: 1,
      number: '1200+',
      label: 'BUSINESS PARTNERS'
    },
    {
      id: 2,
      number: '8000+',
      label: 'PRODUCTS AVAILABLE'
    },
    {
      id: 3,
      number: '25+',
      label: 'YEARS EXPERIENCE'
    },
    {
      id: 4,
      number: '150+',
      label: 'BRANDS DISTRIBUTED'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F3EE] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1                 data-aos="fade-up"
 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B2E2B] mb-3 sm:mb-4">
            Our Values
          </h1>
          <p                  data-aos="fade-up"
className="text-base sm:text-lg lg:text-xl text-[#1E1E1E]">
            What Defines Every Blend We Create
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                                data-aos="fade-up"

                className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#4B2E2B]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#4B2E2B] mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-[#1E1E1E] text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-[#F8F3EE] p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center py-3 sm:py-4"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4B2E2B] mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#1E1E1E] tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}