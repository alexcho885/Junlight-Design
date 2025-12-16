import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '作品集', path: '/portfolio' },
    { name: '服務報價', path: '/pricing' },
    { name: '關於我們', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 cursor-pointer h-16 w-48 relative flex items-center">
           <img 
            src="images/logo.png" 
            alt="Jun Light Design" 
            className="h-full w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://picsum.photos/150/60?random=logo";
            }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-base font-medium transition-colors hover:text-brand-orange ${
                location.pathname === link.path ? 'text-brand-teal font-bold' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border border-transparent rounded-full shadow-md hover:shadow-lg"
          >
            {/* Multi-color gradient matching the logo */}
            <span className="absolute inset-0 w-full h-full bg-gradient-brand group-hover:scale-105 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2 font-serif tracking-wide">
              <i className="fa-brands fa-line text-lg"></i>
              聯絡諮詢
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;