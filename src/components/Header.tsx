
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-vignan.png" 
                alt="Vignan Institute Logo" 
                className="h-16 mr-3"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150x60?text=VIGNAN+LOGO";
                }}
              />
              <div className="text-left">
                <h1 className="text-department-blue text-3xl font-bold">VIGNAN</h1>
                <p className="text-gray-600 text-sm">Institute of Technology and Science</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <img 
              src="/logo-department.png" 
              alt="IT Department Logo" 
              className="h-20"
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
