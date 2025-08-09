import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main Navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            itemProp="url"
            aria-label="SWET Homepage"
          >
            <div className="w-14 h-14 overflow-visible flex items-center justify-center">
              <img 
                src="/swet.png" 
                alt="SWET - Shwetansh Welfare and Educational Trust Logo" 
                className="h-12 w-12 rounded-full object-cover"
                width="48"
                height="48"
                itemProp="image"
              />
            </div>
            <div className={`font-semibold text-sm md:text-base lg:text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className={scrolled ? "text-brand-600" : "text-white"} itemProp="name">Shwetansh</span> Welfare and Educational Trust <span className="text-xs font-normal">(SWET)</span>
            </div>
          </Link>
          
          {/* Mobile menu button - with proper accessibility */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu with structured data markup */}
          <div className="hidden md:flex items-center space-x-6" itemScope itemType="http://schema.org/SiteNavigationElement">
            <Link 
              to="/"
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              itemProp="url"
            >
              <span itemProp="name">Home</span>
            </Link>
            <a 
              href="/#about" 
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              itemProp="url"
            >
              <span itemProp="name">About SWET</span>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`font-medium hover:text-brand-500 transition-colors flex items-center ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-controls="services-dropdown"
              >
                <span itemProp="name">Our Services</span>
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <motion.div 
                  id="services-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="services-menu"
                >
                  <Link 
                    to="/webinars" 
                    className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    onClick={() => setServicesDropdownOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Webinars</span>
                  </Link>
                  <Link 
                    to="/seminars" 
                    className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    onClick={() => setServicesDropdownOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Seminars</span>
                  </Link>
                  <Link 
                    to="/olympiads" 
                    className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    onClick={() => setServicesDropdownOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Olympiads</span>
                  </Link>
                  <Link 
                    to="/training" 
                    className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    onClick={() => setServicesDropdownOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Training</span>
                  </Link>
                </motion.div>
              )}
            </div>
            
            <Link 
              to="/join-us" 
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              itemProp="url"
            >
              <span itemProp="name">Join SWET</span>
            </Link>
            
            <Link
              to="/our-team"
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              itemProp="url"
            >
              <span itemProp="name">Our Team</span>
            </Link>
          
            <a 
              href="/#footer" 
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
              itemProp="url"
              aria-label="Contact SWET"
            >
              <span itemProp="name">Contact Us</span>
            </a>
          </div>
        </div>
        
        {/* Mobile menu with accessibility improvements */}
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white rounded-lg mt-2 shadow-lg"
            role="menu"
            aria-labelledby="mobile-menu-button"
          >
            <div className="px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                itemProp="url"
              >
                <span itemProp="name">Home</span>
              </Link>
              <a 
                href="/#about" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                itemProp="url"
              >
                <span itemProp="name">About SWET</span>
              </a>
              
              {/* Mobile Services Dropdown */}
              <div className="block px-3 py-2 rounded-md" role="group" aria-labelledby="mobile-services-heading">
                <p id="mobile-services-heading" className="text-base font-medium text-gray-700 mb-2">Our Services</p>
                <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                  <Link 
                    to="/webinars" 
                    className="block py-1 text-sm text-gray-700 hover:text-brand-600"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Webinars</span>
                  </Link>
                  <Link 
                    to="/seminars" 
                    className="block py-1 text-sm text-gray-700 hover:text-brand-600"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Seminars</span>
                  </Link>
                  <Link 
                    to="/olympiads" 
                    className="block py-1 text-sm text-gray-700 hover:text-brand-600"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Olympiads</span>
                  </Link>
                  <Link 
                    to="/training" 
                    className="block py-1 text-sm text-gray-700 hover:text-brand-600"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">SWET Training</span>
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/join-us" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                itemProp="url"
              >
                <span itemProp="name">Join SWET</span>
              </Link>
            
              <Link
                to="/our-team"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                itemProp="url"
              >
                <span itemProp="name">Our Team</span>
              </Link>
              
              <a 
                href="/#footer" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-brand-500 text-white"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                itemProp="url"
              >
                <span itemProp="name">Contact Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;