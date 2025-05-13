
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
                  className="h-16 mr-3 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150x60?text=VIGNAN+LOGO";
                  }}
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-department-accent group-hover:w-full transition-all duration-300"></div>
              </div>
              <div className="text-left hidden md:block">
                <img
                  src="/logo-vignan-text.png"
                  alt="VIGNAN Institute of Technology and Science"
                  className="h-12 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/180x50?text=VIGNAN+TEXT";
                  }}
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
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/180x50?text=IT+DEPARTMENT";
                }}
              />
            </div>
            <img 
              src="/logo-department.png" 
              alt="IT Department Logo" 
              className="h-20 transition-all duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/80x80?text=IT+DEPT";
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
