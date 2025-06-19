import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandsSection = () => {
  const [brandRows, setBrandRows] = useState([
    [
      { name: "TURMS", logo: "brands/turms.png" },
      { name: "Marc Loire", logo: "brands/marc-lore.png" },
      { name: "Yoho", logo: "brands/yoho.png" },
      { name: "SoRich Organics", logo: "brands/sarich.png" }
    ],
    [
      { name: "Sirona", logo: "brands/sirona.png" },
      { name: "Nova Nova", logo: "brands/nova.png" },
      { name: "Nu Republic", logo: "brands/nu.png" }
    ]
  ]);

  const [campaigns, setCampaigns] = useState([
    { name: "Matt Look", logo: "brands/matt.png" },
    { name: "Solethreads", logo: "brands/campaign-2.png" },
    { name: "Green Protein", logo: "brands/green.png" },
    { name: "Kalakaram", logo: "brands/campaign-4.png" }
  ]);

  const handleAddBrand = () => {
    console.log("Add Brand functionality triggered");
    // This can be expanded to open a modal or form for adding new brands
  };

  const handleAddCampaign = () => {
    console.log("Add Campaign functionality triggered");
    // This can be expanded to open a modal or form for adding new campaigns
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Trusted by <span className="bg-brand-purple text-white px-2">thousands</span></h2>
          <p className="text-gray-600">of top brands</p>
        </div>

        <div className="flex flex-col space-y-8 mb-16">
          {brandRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {row.map((brand, brandIndex) => (
                <div key={brandIndex} className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-16 md:h-20 lg:h-24 object-contain max-w-[150px] md:max-w-[180px] lg:max-w-[200px]" 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button 
            onClick={handleAddBrand}
            className="bg-brand-purple hover:bg-brand-purple-light text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Plus size={20} />
            Add More Brands
          </Button>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat">ONGOING CAMPAIGNS</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {campaigns.map((campaign, index) => (
              <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                <img 
                  src={campaign.logo} 
                  alt={campaign.name} 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full border-4 border-brand-purple p-2" 
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={handleAddCampaign}
              className="bg-brand-purple hover:bg-brand-purple-light text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Plus size={20} />
              Add Many More..
            </Button>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-light italic">make your brand <span className="font-bold">unforgettable</span></h3>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
