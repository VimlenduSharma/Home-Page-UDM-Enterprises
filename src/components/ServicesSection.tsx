import React from 'react';
import { AlertCircle, Globe, Radio, UserRound, Users, BadgeCheck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Collabs",
      icon: <Users size={56} className="text-teal-400 mb-6" />,
      description: "We build powerful collaborations between creators and brands to drive authentic engagement and real growth."
    },
    {
      title: "Web Services",
      icon: <Globe size={56} className="text-teal-400 mb-6" />,
      description: "From responsive websites to scalable web apps, we provide digital solutions that empower your online presence."
    },
    {
      title: "Advertisements",
      icon: <Radio size={56} className="text-teal-400 mb-6" />,
      description: "We craft data-driven ad campaigns that boost visibility and conversions across digital platforms."
    },
    {
      title: "Influencer Management",
      icon: <UserRound size={56} className="text-teal-400 mb-6" />,
      description: "Our expert team handles influencer scouting, onboarding, and campaign execution for impactful brand storytelling."
    },
    {
      title: "Client Management",
      icon: <AlertCircle size={56} className="text-teal-400 mb-6" />,
      description: "We streamline brand-client relationships with tools and strategies that ensure smooth communication and delivery."
    },
    {
      title: "Brand Promotions",
      icon: <BadgeCheck size={56} className="text-teal-400 mb-6" />,
      description: "We design high-impact promotional strategies to help your brand connect, engage, and expand in competitive markets."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl font-bold mb-2 font-montserrat">
              <span className="bg-brand-purple text-white px-4 py-1">WHAT WE</span> OFFER
            </h2>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your brand and connect with your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="service-card-large flex flex-col items-center text-center text-white min-h-[300px] lg:min-h-[350px]">
              {service.icon}
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-montserrat">{service.title}</h3>
              <p className="text-base md:text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
