import React from 'react';
import FilterSection from '../src/components/FilterSection';
import PropertyCard from '../src/components/PropertyCard';
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from '../src/constants';

const Home = () => {
  return (
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
};

export default Home;
