"use client";
import React from 'react';
import Button from './Button';

const AboutCTA = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 rounded-md mt-12 md:mt-24 lg:mt-36">
      <section className="bg-white/3 p-3 text-white">
        <div className="mx-auto flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-4">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/assets/sector1.jpeg" 
                alt="RMS Engineering Excellence" 
                className="w-full max-w-sm md:max-w-md h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight">
              Uncover the story behind RMS and our commitment to advanced technology.
            </h2>
            
            <Button 
              route="/about" 
              variant="white" 
              text="Learn more" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCTA;