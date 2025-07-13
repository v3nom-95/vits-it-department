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
    { path: '/faculty', label: 'Faculty' },
    { path: '/mous', label: 'MOUs' },
    { path: '/research', label: 'Research' },
    { path: '/iii', label: 'III (Industry Institute Interaction)' },
    { path: '/clubs', label: 'Clubs' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/placements', label: 'Placements' },
    { path: '/events', label: 'Events' },
    { path: '/newsletters', label: 'Newsletters' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-department-purple to-department-blue text-white py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white focus:outline-none p-2"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative px-2 py-1 text-md font-medium ${isActive(link.path) ? 'text-white' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
                <span 
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`}
                />
              </Link>
            ))}
          </div>
          {/* Mobile Nav Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
          )}
          <div className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} bg-department-purple p-6 pt-20 flex flex-col gap-4 shadow-2xl`} style={{minHeight:'100vh'}}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block w-full text-lg font-semibold py-3 px-4 rounded transition-colors duration-200 ${isActive(link.path) ? 'bg-department-blue text-white' : 'text-white/90 hover:bg-department-blue/80 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
