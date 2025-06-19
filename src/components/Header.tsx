import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-brand-purple text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-2">YOUR LOGO</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 font-medium">Home</a>
            <a href="#about" className="text-white hover:text-gray-300 font-medium">About Us</a>
            <a href="#services" className="text-white hover:text-gray-300 font-medium">Services</a>
            <a href="#campaigns" className="text-white hover:text-gray-300 font-medium">Ongoing Campaigns</a>
            <a href="#contact" className="text-white hover:text-gray-300 font-medium">Contact Us</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-white text-brand-purple hover:bg-gray-200">Sign In</Button>
            <Button className="bg-brand-accent text-white hover:bg-opacity-80">Contact Us</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a href="#home" className="block py-2 text-white hover:text-gray-300">Home</a>
            <a href="#about" className="block py-2 text-white hover:text-gray-300">About Us</a>
            <a href="#services" className="block py-2 text-white hover:text-gray-300">Services</a>
            <a href="#campaigns" className="block py-2 text-white hover:text-gray-300">Ongoing Campaigns</a>
            <a href="#contact" className="block py-2 text-white hover:text-gray-300">Contact Us</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button className="bg-white text-brand-purple hover:bg-gray-200">Sign In</Button>
              <Button className="bg-brand-accent text-white hover:bg-opacity-80">Contact Us</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
