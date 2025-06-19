import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '2000+', label: 'Digital Campaigns' },
    { number: '1000+', label: 'Clients' },
    { number: '500+', label: 'Connected Brands' },
    { number: '200+', label: 'Categories' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat">
            OUR KEY <span className="bg-brand-purple text-white px-2">STATS</span>
          </h2>
          <p className="text-gray-600 mt-4">Numbers don't lie...</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;