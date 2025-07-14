"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Logo and Description (50%) */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <Image 
                src="/assets/fav.svg" 
                alt="RMS Logo" 
                width={60} 
                height={60}
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Leading infrastructure development through innovation, expertise, and sustainable solutions across diverse sectors.
            </p>
          </div>

          {/* Right side - Links divided into 3 columns (50%) */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-sm hover:text-gray-300 transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-gray-300 transition-colors">About</Link></li>
                  <li><Link href="/services" className="text-sm hover:text-gray-300 transition-colors">Services</Link></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <ul className="space-y-3">
                  <li><Link href="/projects" className="text-sm hover:text-gray-300 transition-colors">Projects</Link></li>
                  <li><Link href="/contact" className="text-sm hover:text-gray-300 transition-colors">Contact</Link></li>
                  <li><Link href="/careers" className="text-sm hover:text-gray-300 transition-colors">Careers</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <ul className="space-y-3">
                  <li><Link href="/privacy-policy" className="text-sm hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions" className="text-sm hover:text-gray-300 transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Logo */}
      <div className="mt-8 w-full">
        <Image 
          src="/assets/logo-white.svg" 
          alt="RMS Logo" 
          width={1920}
          height={300}
          className="w-full h-auto opacity-10"
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
      </div>

      {/* Bottom Section */}
      <div className="mt-3 pt-2 border-t border-gray-800">
        <p className="text-sm text-gray-500 text-center">&copy; 2024 RMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
