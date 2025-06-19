import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      image: "brands/carousel-1.png",
      title: "Start your grooming journey with us",
      subtitle: "Bring out the #GentlemanInYou",
      cta: "Explore Collection"
    },
    {
      image: "brands/carousel-2.png",
      title: "Science of motherhood",
      subtitle: "Premium products for all your needs",
      cta: "Shop Now"
    },
    {
      image: "brands/carousel-3.png",
      title: "Beauty Essentials",
      subtitle: "Discover our premium beauty products",
      cta: "View Products"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative bg-brand-purple text-white overflow-hidden">
      <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `linear-gradient(135deg, rgba(46, 26, 71, 0.4), rgba(46, 26, 71, 0.7)), url(${slide.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: index === activeSlide ? 10 : 0
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 md:p-8">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-montserrat text-white drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-6 text-white/90 drop-shadow-md">{slide.subtitle}</p>
                  <Button className="bg-white text-brand-purple hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full z-20 transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full z-20 transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
