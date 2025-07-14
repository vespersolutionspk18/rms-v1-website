"use client";
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:px-8 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/fav.svg" alt="Logo" width={40} height={40} />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
          <Link href="/projects" className="text-white hover:underline">
            Projects
          </Link>
        </nav>
        
        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button variant="white" text="Contact" route="/contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="/services"
              className="text-white text-2xl hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white text-2xl hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-white text-2xl hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </nav>
          <Button variant="white" text="Contact" route="/contact" />
        </div>
      </div>
    </>
  );
};

export default Header;