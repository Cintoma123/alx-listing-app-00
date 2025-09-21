export default function HeroSection() {
import React from 'react';
import FilterSection from '../src/components/FilterSection';
import PropertyCard from '../src/components/PropertyCard';
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from '../src/constants';

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 h-screen flex items-center justify-between px-8 sm:px-16">
      {/* Left Section */}
      <div className="text-left max-w-xl space-y-6">
        <div className="inline-block bg-indigo-800 text-white py-2 px-4 rounded-lg text-sm font-semibold tracking-wide">
          Limited time deals – book now!
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
          Find your <br />
          <span className="text-green-300">favorite place</span> <br />
          here!
        </h1>
        <p className="text-white text-base sm:text-lg font-light max-w-md">
          The best prices for over <span className="font-semibold">2 million properties worldwide</span>. 
          From cozy rooms to luxury mansions, your perfect stay awaits.
        </p>
        <button className="bg-green-300 text-gray-800 px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-green-400 transition ease-in-out duration-200">
          Start Exploring
        </button>
      </div>
      </section>

      {/* Right Section - Image */}
      <div className="hidden lg:block">
        <img
          src="/villa.jpg"
          alt="Luxury property illustration"
          className="w-[450px] h-[450px] object-contain"
        />
      </div>
    </section>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Section */}
        <FilterSection />

        {/* Listing Section */}
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                name={property.name}
                price={property.price}
                rating={property.rating}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
};

export default Home;
