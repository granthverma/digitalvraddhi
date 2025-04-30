import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-3 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand - Left side */}
        <Link to="/" className="text-xl sm:text-2xl font-bold text-indigo-600 z-10">
          Digital Vraddhi
        </Link>
        
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-3 py-1">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-3 py-1">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-3 py-1">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-3 py-1">Contact</Link>
          <Link to="/socialmediatrends" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-3 py-1">Trending🔥</Link>
        </div>
        
        {/* Phone Number - Right corner */}
        <div className="hidden md:flex items-center space-x-2 ml-auto">
          <FaPhone className="text-indigo-600 text-sm" />
          <a href="tel:+1234567890" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-sm whitespace-nowrap">
            +1 (234) 567-890
          </a>
        </div>
        
        {/* Mobile menu button - Right side */}
        <div className="md:hidden flex items-center space-x-4">
          <a href="tel:+1234567890" className="text-gray-700 hover:text-indigo-600 p-1">
            <FaPhone className="text-lg" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none p-1"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-20 px-4 py-2">
          <Link 
            to="/" 
            className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/socialmediatrends" 
            className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Trending🔥
          </Link>

          <Link to="/business-assistant" className="...">Business Assistant</Link>


        </div>
      )}
    </nav>
  );
}

export default Navbar;