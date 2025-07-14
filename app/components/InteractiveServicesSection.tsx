"use client";
import React, { useState } from 'react';
import Button from './Button';

const servicesData = [
  {
    id: 'feasibility-studies',
    name: 'Feasibility Studies & Project Planning',
    subheading: 'Strategic Foundations',
    description: 'RMS delivers comprehensive feasibility studies and meticulous project planning, providing essential insights and laying robust groundwork for successful ventures from conception to execution.',
    image: '/assets/sector1.jpeg',
  },
  {
    id: 'survey-geospatial',
    name: 'Survey & Geospatial Investigations',
    subheading: 'Precision Data Collection',
    description: 'Utilizing state-of-the-art GPS and remote sensing, RMS conducts detailed surveys and geospatial investigations, providing accurate data crucial for design, mapping, and site analysis.',
    image: '/assets/sector2.jpeg',
  },
  {
    id: 'engineering-design',
    name: 'Detailed Engineering & Design',
    subheading: 'Innovative Solutions',
    description: 'RMS excels in comprehensive detailed engineering and design, translating concepts into precise, buildable plans across civil, structural, and mechanical disciplines for optimal performance.',
    image: '/assets/sector3.jpeg',
  },
  {
    id: 'construction-supervision',
    name: 'Construction Supervision & Project Management',
    subheading: 'Quality & Efficiency',
    description: 'RMS provides expert construction supervision and rigorous project management, ensuring quality control, adherence to timelines, and efficient resource utilization from groundbreaking to completion.',
    image: '/assets/sector1.jpeg',
  },
  {
    id: 'institutional-development',
    name: 'Institutional Development & Capacity Building',
    subheading: 'Strengthening Organizations',
    description: 'RMS empowers clients by developing sustainable strategic plans, enhancing organizational structures, and building human capital, fostering robust public and private sector entities.',
    image: '/assets/sector2.jpeg',
  },
  {
    id: 'financial-advisory',
    name: 'Financial & Transaction Advisory',
    subheading: 'Maximizing Value',
    description: 'RMS offers specialized financial engineering and transaction advisory services, including PPP/BOT support, optimizing investments and ensuring economic viability for global development.',
    image: '/assets/sector3.jpeg',
  },
  {
    id: 'operations-maintenance',
    name: 'Operations, Maintenance & Post-Construction ',
    subheading: 'Enduring Performance',
    description: 'RMS ensures long-term asset performance through comprehensive post-construction services, including O&M manuals, routine inspections, and performance monitoring, maximizing project value.',
    image: '/assets/sector1.jpeg',
  },
  {
    id: 'smart-city-it',
    name: 'Smart City & IT Solutions',
    subheading: 'Intelligent Urban Futures',
    description: 'RMS delivers end-to-end smart city solutions, integrating advanced detection systems, AI-enabled analytics, and secure networks for responsive, intelligent urban environments.',
    image: '/assets/sector2.jpeg',
  },
];

const InteractiveServicesSection = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen">
      {/* Left Column: Services List and Details */}
      <div className="w-full lg:w-1/2 bg-black text-white px-6 md:px-12 lg:px-16 py-10 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 lg:mb-8">Our Services</h2>
          <div className="flex flex-col">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`group cursor-pointer border-b-[0.5px] py-2 text-lg md:text-xl lg:text-2xl font-light transition-colors duration-300
                  ${activeService.id === service.id ? 'text-white border-b-white' : 'text-gray-500 hover:text-gray-300 border-b-gray-500 hover:border-b-gray-300'}`
                }
                onClick={() => setActiveService(service)}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="pr-2">{service.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 transition-all duration-300
                      ${activeService.id === service.id ? 'text-white rotate-45' : 'text-gray-500 group-hover:text-gray-300'}`
                    }
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 lg:mt-12">
          <h3 className="text-xl md:text-2xl font-light mb-4">{activeService.subheading}</h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-tight">{activeService.description}</p>
          <Button 
            route={`/services/${activeService.id}`} 
            variant="white" 
            text="learn more"
          />
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-full bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={activeService.image}
          alt={activeService.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default InteractiveServicesSection;
