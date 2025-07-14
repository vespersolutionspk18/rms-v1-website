"use client";
import React, { useState } from 'react';

const offerings = [
  {
    id: 'market',
    title: 'Market & Financial Viability Assessment',
    description: 'Analyzing demand, competition, revenue potential, cost structures, and funding mechanisms to ensure economic sustainability.',
    icon: '📊'
  },
  {
    id: 'technical',
    title: 'Technical Analysis & Site Evaluation',
    description: 'Assessing engineering challenges, material requirements, logistical considerations, and site suitability for complex infrastructure.',
    icon: '⚙️'
  },
  {
    id: 'environmental',
    title: 'Environmental & Social Impact Assessments (ESIA)',
    description: 'Identifying potential impacts and developing mitigation strategies, ensuring compliance and responsible development.',
    icon: '🌱'
  },
  {
    id: 'risk',
    title: 'Risk Identification & Mitigation Strategies',
    description: 'Proactive assessment of potential challenges and development of robust plans to address them.',
    icon: '🛡️'
  },
  {
    id: 'design',
    title: 'Preliminary Design & Cost Estimates',
    description: 'Developing conceptual designs and initial budgetary outlines to inform decision-making.',
    icon: '📐'
  },
  {
    id: 'resource',
    title: 'Resource Planning & Allocation',
    description: 'Optimizing the deployment of human, material, and financial resources.',
    icon: '📋'
  },
  {
    id: 'strategic',
    title: 'Strategic Development & Master Planning',
    description: 'Long-term visioning and detailed planning for large-scale urban, rural, and industrial projects.',
    icon: '🏗️'
  },
  {
    id: 'specialized',
    title: 'Specialized Infrastructure Planning',
    description: 'Including cross-country pipelines, compressor stations, liquid petroleum and chemical storage facilities, and marine loading/unloading facilities.',
    icon: '🏭'
  }
];

const ComprehensiveOfferings = () => {
  const [activeOffering, setActiveOffering] = useState(offerings[0]);

  return (
    <section className="bg-black py-20">
      <div className="px-6 md:px-12 lg:px-22">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
            Our Comprehensive Offerings
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Leveraging our multidisciplinary expertise and state-of-the-art tools, RMS Technologies provides a full spectrum of pre-feasibility and full feasibility studies and planning services, including:
          </p>

          {/* Interactive Offerings Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side - Offering List */}
            <div className="space-y-2">
              {offerings.map((offering) => (
                <div
                  key={offering.id}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                    activeOffering.id === offering.id
                      ? 'bg-white text-black'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  onClick={() => setActiveOffering(offering)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{offering.icon}</span>
                      <h3 className="text-lg font-light">{offering.title}</h3>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeOffering.id === offering.id ? 'rotate-45 text-black' : 'text-white'
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Active Offering Detail */}
            <div className="bg-gray-900 rounded-lg p-8 lg:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{activeOffering.icon}</span>
                <h3 className="text-2xl font-light">{activeOffering.title}</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {activeOffering.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveOfferings;