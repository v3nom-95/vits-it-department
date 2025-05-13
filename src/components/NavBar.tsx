
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-department-purple text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 flex flex-wrap items-center justify-center md:justify-end gap-8 py-2">
          <Link to="/" className="hover:underline text-lg">Home</Link>
          <Link to="/clubs" className="hover:underline text-lg">Clubs</Link>
          <Link to="/faculty" className="hover:underline text-lg">Faculty</Link>
          <Link to="/contact" className="hover:underline text-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
