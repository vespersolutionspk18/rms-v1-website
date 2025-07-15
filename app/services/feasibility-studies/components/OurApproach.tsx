"use client";

import React from 'react';

const approachSteps = [
  {
    number: '01',
    title: 'Collaborative Engagement',
    description: 'Working closely with stakeholders to understand objectives and constraints'
  },
  {
    number: '02',
    title: 'Data-Driven Analysis',
    description: 'Utilizing advanced analytical tools and industry best practices'
  },
  {
    number: '03',
    title: 'Holistic Examination',
    description: 'Comprehensive assessment of technical, financial, environmental, and social factors'
  },
  {
    number: '04',
    title: 'Actionable Insights',
    description: 'Delivering precise recommendations tailored to your specific objectives'
  }
];

const OurApproach = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Removed background pattern for consistency with homepage aesthetic */}
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-22">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                Our Approach
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                RMS adopts a collaborative, data-driven, and holistic approach. Our teams comprise experts across various fields, ensuring every aspect of a project&apos;s feasibility is thoroughly examined. We utilize advanced analytical tools and industry best practices to deliver precise, actionable insights tailored to your specific objectives. Our ISO certification underscores our commitment to quality and excellence in every study.
              </p>
              
              <div className="flex items-center gap-8 pt-8 border-t border-gray-700">
                <div>
                  <h3 className="text-3xl font-light">24+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-light">250+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-light">ISO</h3>
                  <p className="text-gray-400">Certified Quality</p>
                </div>
              </div>
            </div>

            {/* Right Content - Process Steps */}
            <div className="space-y-6">
              {approachSteps.map((step) => (
                <div 
                  key={step.number}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-light text-gray-500 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-light mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;