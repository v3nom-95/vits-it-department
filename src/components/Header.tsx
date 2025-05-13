
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md transform-gpu will-change-auto">
      <div className="container mx-auto px-4 transform-gpu will-change-auto">
        <div className="flex flex-col md:flex-row justify-between items-center transform-gpu will-change-auto">
          <div className="flex items-center mb-4 md:mb-0 transform-gpu will-change-auto">
            <Link to="/" className="flex items-center group transform-gpu will-change-auto">
              <div className="relative transform-gpu will-change-auto">
                <img 
                  src="/logo-vignan.png" 
                  alt="Vignan Institute Logo" 
                  className="h-16 mr-3 transition-transform duration-300 group-hover:scale-105 transform-gpu will-change-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150x60?text=VIGNAN+LOGO";
                  }}
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-department-accent group-hover:w-full transition-all duration-300 transform-gpu will-change-auto"></div>
              </div>
              <div className="text-left transform-gpu will-change-auto">
                <h1 className="text-department-blue text-3xl font-bold tracking-tight transform-gpu will-change-auto">VIGNAN</h1>
                <p className="text-gray-600 text-sm transform-gpu will-change-auto">Institute of Technology and Science</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center transform-gpu will-change-auto">
            <div className="mr-4 hidden md:block transform-gpu will-change-auto">
              <p className="font-heading text-xl text-department-purple transform-gpu will-change-auto">Department of</p>
              <p className="font-heading text-2xl font-bold text-department-dark transform-gpu will-change-auto">Information Technology</p>
            </div>
            <img 
              src="/logo-department.png" 
              alt="IT Department Logo" 
              className="h-20 transition-all duration-300 hover:scale-105 transform-gpu will-change-auto"
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
