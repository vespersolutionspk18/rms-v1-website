
import React from 'react';


const ComprehensiveOfferings = () => {
  

  return (
    <section className="bg-black py-20">
      <div className="px-6 md:px-12 lg:px-22">
        <div className="max-w-7xl flex flex-row mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
            Our Comprehensive Offerings
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Leveraging our multidisciplinary expertise and state-of-the-art tools, RMS Technologies provides a full spectrum of pre-feasibility and full feasibility studies and planning services, including:
          </p>

          {/* Interactive Offerings Grid */}
         
        </div>
        <div className="flex flex-row gap-5 mt-10">
          <div className="h-[420px] w-[60%] bg-cover bg-blend-multiply rounded-md"     style={{ backgroundImage: "url('/assets/sector1.jpeg')" }}>

          </div>
          <div className="h-[420px] w-[40%] bg-cover bg-blend-multiply rounded-md"     style={{ backgroundImage: "url('/assets/sector1.jpeg')" }}>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ComprehensiveOfferings;