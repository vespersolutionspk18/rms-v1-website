"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = "RMS Technologies, an ISO-certified Pakistani firm, offers global engineering and management consultancy. With 24+ years and over 250 projects, we deliver precise solutions for vital infrastructure, energy, and urban development, focused on client satisfaction and sustainable impact.";
  const words = text.split(' ');

  useEffect(() => {
    if (sectionRef.current && textRef.current) {
      const wordsSpans = textRef.current.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: `+=${words.length * 50}`, // Each word takes 50px of scroll to change color
          scrub: true,
        },
      });

      words.forEach((word, i) => {
        const targetColor = word.toLowerCase().includes('iso-certified') ? '#ef4444' : 'black';
        tl.to(wordsSpans[i], { color: targetColor, ease: 'none' }, i * 0.1); // Adjust timing for word reveal
      });
    }
  }, [words.length]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white text-black flex items-center justify-center px-6 md:px-12 lg:px-22 py-16"
    >
      <div className="text-justify max-w-4xl">
        <p ref={textRef} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tightest">
          {words.map((word, index) => (
            <span key={index} className="text-stone-200 inline-block mr-1 sm:mr-2">
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
