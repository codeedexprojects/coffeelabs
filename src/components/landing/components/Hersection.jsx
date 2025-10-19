export default function HeroSection() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <h1                 data-aos="fade-up"
 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Craft. Quality. CoffeeLabs
          </h1>

          {/* Subtitle */}
          <p                 data-aos="fade-up"
className="text-gray-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-4 leading-relaxed">
            Explore A Curated Selection Of Powders, Syrups, Creams, And Equipment To
            Elevate Your Coffee Experience
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <button href="/"                 data-aos="fade-up"
className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Explore Now
            </button>
            <button href="/product"                data-aos="fade-up"
 className="w-full sm:w-auto bg-amber-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-200 transition-colors shadow-lg">
              Order In App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}