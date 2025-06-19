import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 font-montserrat">
            <span className="bg-brand-purple text-white px-4 py-1">COLLABORATE</span> WITHOUT CONSTRAINTS
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reach out to us today to discuss how we can help your brand stand out
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Always Accessible</h3>
              <p className="text-gray-600">
                Our platform is built to support your brand anytime, anywhere. Whether you're a startup or an enterprise, UDM's services are scalable and designed to grow with you—without hidden charges or limits on creativity.
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Seamless Integrations</h3>
              <p className="text-gray-600">
                We work with the tools you already love. UDM's digital ecosystem integrates smoothly with your existing workflows.
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Trust-Centered</h3>
              <p className="text-gray-600">
                Your data and brand reputation are in safe hands. UDM prioritizes privacy and security using best-in-class practices, so you can focus on growing your business confidently.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input placeholder="Your Name" className="w-full p-3 border rounded" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
                </div>
              </div>
              
              <div>
                <Input placeholder="Subject" className="w-full p-3 border rounded" />
              </div>
              
              <div>
                <Textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" />
              </div>
              
              <div>
                <Button className="w-full bg-brand-purple hover:bg-brand-purple-light text-white py-3">
                  Send Message
                </Button>
              </div>
            </form>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Mail className="text-brand-purple mr-3" />
                <span>contact@example.com</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-brand-purple mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-brand-purple mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
