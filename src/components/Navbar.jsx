import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Use the actual logo image */}
            <img 
              src="/swet_logo.jpg" 
              alt="SWET Logo" 
              className="h-12 w-auto rounded-full object-cover"
            />
            <div className={`font-semibold text-sm md:text-base lg:text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className={scrolled ? "text-brand-600" : "text-white"}>Shwetansh</span> Welfare and Education Trust
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
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
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#about" 
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
            >
              About
            </a>
            <a 
              href="#benefits" 
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
            >
              Benefits
            </a>
            <a 
              href="#departments" 
              className={`font-medium hover:text-brand-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
            >
              Join Us
            </a>
            <a 
              href="#footer" 
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white rounded-lg mt-2 shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700">
                About
              </a>
              <a href="#benefits" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700">
                Benefits
              </a>
              <a href="#departments" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700">
                Join Us
              </a>
              <a href="#footer" className="block px-3 py-2 rounded-md text-base font-medium bg-brand-500 text-white">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
