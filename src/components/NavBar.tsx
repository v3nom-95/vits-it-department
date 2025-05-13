
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/clubs', label: 'Clubs' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-department-purple to-department-blue text-white py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
          
          <div className={`flex-1 items-center justify-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-department-purple p-4 shadow-lg animate-fade-in' : 'hidden md:flex'}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative px-2 py-1 text-lg font-medium ${isActive(link.path) ? 'text-white' : 'text-white/80 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <span 
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`}
                />
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="bg-white text-department-purple px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">Student Portal</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
