"use client";
import React from 'react';
import Button from '@/app/components/Button';
import Image from 'next/image';

const FeasibilityCTA = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="bg-black rounded-2xl overflow-hidden">
          <div className="mx-auto flex flex-col lg:flex-row items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Ready to lay the foundation for your next successful project?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Partner with RMS Technologies for comprehensive feasibility studies that transform ambitious visions into achievable realities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  route="/contact" 
                  variant="white" 
                  text="Start Your Project" 
                />
                <Button 
                  route="/services" 
                  variant="white" 
                  text="Explore Other Services" 
                />
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
              <Image 
                src="/assets/sector3.jpeg" 
                alt="Feasibility Studies" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="mt-16 w-full px-6 md:px-12 lg:px-20">
        <Image 
          src="/assets/logo-white.svg" 
          alt="RMS Logo" 
          width={1920}
          height={200}
          className="w-full h-auto opacity-5"
          style={{ maxHeight: '150px', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default FeasibilityCTA;