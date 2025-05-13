
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen will-change-auto">
      <Header />
      <NavBar />
      <main className="flex-grow bg-gray-50 will-change-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
