
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md will-change-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/logo-vignan.png" 
                  alt="Vignan Institute Logo" 
                  className="h-16 mr-3 transition-transform duration-300 group-hover:scale-105 will-change-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150x60?text=VIGNAN+LOGO";
                  }}
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-department-accent group-hover:w-full transition-all duration-300 will-change-auto"></div>
              </div>
              <div className="text-left">
                <h1 className="text-department-blue text-3xl font-bold tracking-tight will-change-auto">VIGNAN</h1>
                <p className="text-gray-600 text-sm will-change-auto">Institute of Technology and Science</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="mr-4 hidden md:block">
              <p className="font-heading text-xl text-department-purple will-change-auto">Department of</p>
              <p className="font-heading text-2xl font-bold text-department-dark will-change-auto">Information Technology</p>
            </div>
            <img 
              src="/logo-department.png" 
              alt="IT Department Logo" 
              className="h-20 transition-all duration-300 hover:scale-105 will-change-auto"
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
