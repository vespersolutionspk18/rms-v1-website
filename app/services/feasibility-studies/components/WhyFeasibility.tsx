"use client";
import React from 'react';

const WhyFeasibility = () => {
  const introText = "At RMS Technologies, we believe that every successful project begins with a meticulously researched and strategically sound plan. Our Feasibility Studies & Project Planning services are designed to provide clients with a clear, data-driven roadmap, minimizing risks and maximizing potential from the earliest stages of conception. We transform initial ideas into viable, actionable strategies ready for implementation.";
  
  const whyText = "In today's complex development landscape, a comprehensive feasibility study is not just an option—it's a necessity. It provides a robust understanding of a project's technical, economic, environmental, and social viability, ensuring informed decision-making, optimizing resource allocation, and attracting necessary investment. It's the critical first step in turning a vision into a tangible, impactful reality.";

  return (
    <>
      {/* New Intro Section - White background, large text, similar to AboutSection's text presentation but static */}
      <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-22">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tightest">
            {introText}
          </p>
        </div>
      </section>

      {/* Existing "Why Feasibility is Crucial" section - Black background */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-22">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12">
            Why Feasibility is Crucial
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                {whyText}
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-light mb-2">Informed Decisions</h3>
                <p className="text-gray-400">Data-driven insights for strategic planning</p>
              </div>
              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-light mb-2">Risk Mitigation</h3>
                <p className="text-gray-400">Identify and address challenges early</p>
              </div>
              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-light mb-2">Resource Optimization</h3>
                <p className="text-gray-400">Maximize efficiency and minimize waste</p>
              </div>
              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-light mb-2">Investment Attraction</h3>
                <p className="text-gray-400">Build confidence with stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFeasibility;