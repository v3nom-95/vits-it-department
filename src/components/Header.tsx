
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/logo-vignan.png" 
                  alt="Vignan Institute Logo" 
                  className="h-20 mr-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-left hidden md:block">
                <img
                  src="public/lovable-uploads/86baccc9-9a9e-445d-98b0-af64e83c68fa.png"
                  alt="VIGNAN Institute of Technology and Science"
                  className="h-16 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="mr-4 hidden md:block">
              <img
                src="/logo-department-text.png"
                alt="Department of Information Technology"
                className="h-12 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <img 
              src="/logo-department.png" 
              alt="IT Department Logo" 
              className="h-20 transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
