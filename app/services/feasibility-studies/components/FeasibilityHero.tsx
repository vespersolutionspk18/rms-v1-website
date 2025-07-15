"use client";

import React from 'react';

const FeasibilityHero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/sector1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 md:px-12 lg:px-26">
        <div className="flex flex-col w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Feasibility Studies &<br />Project Planning
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-6">
            Strategic Foundations
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            At RMS Technologies, we specialize in providing comprehensive feasibility studies and meticulous project planning services. Our approach ensures that every project, from conception to execution, is built upon a foundation of rigorous analysis, strategic foresight, and data-driven insights. We empower our clients to make informed decisions, mitigate risks, and maximize the potential for success in their ventures.
          </p>
          {/* Removed buttons as requested */}
        </div>
      </div>
      <div className="absolute bottom-8 right-4 md:right-8 text-white text-sm flex items-center animate-bounce">
        <span className="hidden sm:inline">Discover More</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default FeasibilityHero;