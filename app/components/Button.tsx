'use client';

import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'white' | 'black';
  route?: string;
  text: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', route, text, textColor }) => {
  const baseStyles = 'inline-block transition-all duration-300 ease-in-out cursor-pointer';
  let variantStyles = '';

  switch (variant) {
    case 'default':
      variantStyles = textColor ? `text-${textColor} px-4 py-3 text-md` : 'text-black text-md';
      break;
    case 'white':
      variantStyles = 'bg-white text-black px-4 py-3 rounded-sm hover:bg-gray-200';
      break;
    case 'black':
      variantStyles = 'bg-black text-white px-4 py-3 rounded-sm hover:bg-gray-800';
      break;
    default:
      variantStyles = 'text-black text-md';
  }

  const className = `${baseStyles} ${variantStyles}`;

  if (route) {
    return (
      <a href={route} className={className}>
        {text}
      </a>
    );
  }

  return (
    <button className={className} type="button">
      {text}
    </button>
  );
};

export default Button;