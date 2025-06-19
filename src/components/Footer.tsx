import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">YOUR LOGO</h3>
            <p className="text-gray-300 mb-4">
              We help marketing companies take their campaigns to new heights with innovative strategies and deep industry expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-accent">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-brand-accent">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-brand-accent">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-brand-accent">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Partner Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Pricing</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Free Trial Available</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Business Starter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Premium Suite</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Enterprise Custom</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Contact</h3>
            <p className="text-gray-300 mb-4">Stay up to date with our latest news and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full bg-brand-purple-light text-white rounded-l focus:outline-none"
              />
              <Button className="bg-brand-accent hover:bg-opacity-80 rounded-r px-3">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-purple-light mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2025 Your Company. All rights reserved.</p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">A trusted digital agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
