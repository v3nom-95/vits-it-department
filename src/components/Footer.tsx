
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>©  All rights reserved to Department of IT, VITS, Deshmukh</p>
      </div>
    </footer>
  );
};

export default Footer;
