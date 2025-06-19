import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BrandsSection from '@/components/BrandsSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BrandsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
