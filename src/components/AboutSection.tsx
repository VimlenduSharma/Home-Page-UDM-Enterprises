import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="bg-brand-purple rounded-lg p-4 transform -rotate-3">
                <img 
                  src="brands/carousel-1.png" 
                  alt="About Us" 
                  className="rounded-lg shadow-xl" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-accent rounded-lg p-4 transform rotate-3 hidden md:block">
                <img 
                  src="brands/carousel-2.png" 
                  alt="Our Products" 
                  className="w-32 h-32 object-cover rounded-lg shadow-xl" 
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="inline-block mb-4">
              <h2 className="text-3xl font-bold mb-2 font-montserrat">
                <span className="bg-brand-purple text-white px-4 py-1">ABOUT</span> US
              </h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              UDM Enterprises is a results-driven digital marketing agency specializing in brand elevation through creative, tech-powered strategies. We help businesses grow by delivering tailored solutions in influencer marketing, SEO, web development, and digital promotions.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team blends innovation with data to create meaningful customer experiences. With a strong focus on collaboration and client success, UDM stands at the forefront of the digital marketing landscape.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed font-semibold">
              Your brand's growth is our mission.
            </p>
            
            <Button className="bg-brand-purple hover:bg-brand-purple-light px-8 py-6 text-lg">
              EXPLORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
