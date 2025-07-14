import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/heroimage.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 md:px-12 lg:px-26">
        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">Precision<br></br> at Scale</h1>
          <p className="text-base md:text-lg leading-tight mb-8">
            Fusing cutting-edge technology with decades of engineering expertise, RMS delivers comprehensive solutions for vital infrastructure, energy, and development projects globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="white" text="About Us" route="/about" />
            <Button variant="default" text="Services" route="/services" textColor="white" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-4 md:right-8 text-white text-sm flex items-center">
        <span className="hidden sm:inline">Explore More</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
