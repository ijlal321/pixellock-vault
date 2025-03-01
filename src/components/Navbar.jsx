
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
              <span className="text-white text-sm font-bold">px</span>
            </div>
            <span className={`font-medium text-lg transition-colors duration-300 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>PixelLock</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink scrolled={scrolled} href="/#features">Features</NavLink>
            <NavLink scrolled={scrolled} href="/#how-it-works">How It Works</NavLink>
            <NavLink scrolled={scrolled} href="/#why-better">Why Better</NavLink>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className={`text-sm font-medium px-4 py-2 rounded-md transition-all ${
              scrolled 
                ? 'text-slate-900 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}>
              Login
            </button>
            <button className="text-sm font-medium bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-800 text-white px-5 py-2 rounded-md shadow-md transition-all hover:shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, scrolled }) => (
  <a 
    href={href} 
    className={`text-sm font-medium transition-colors hover:opacity-80 ${
      scrolled ? 'text-slate-800' : 'text-white'
    }`}
  >
    {children}
  </a>
);

export default Navbar;
