import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VoteIcon, MenuIcon, XIcon } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl">
          <VoteIcon className="h-8 w-8" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">WAHL-O-RAMA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-200">
            Startseite
          </Link>
          <Link to="/governments" className="text-white hover:text-blue-300 transition-colors duration-200">
            Regierungen
          </Link>
          <Link to="/login" className="text-white hover:text-blue-300 transition-colors duration-200">
            Login
          </Link>
          
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Startseite
            </Link>
            <Link 
              to="/governments" 
              className="text-white hover:text-blue-300 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Regierungen
            </Link>
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;