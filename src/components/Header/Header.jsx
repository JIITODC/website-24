import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</Link>
              <a href="https://github.com/JIITODC/JODC-Workshops" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resources</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="https://www.instagram.com/jodc128/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <FaInstagram className="inline-block text-xl" />
              </a>
              <a href="https://github.com/JIITODC/website-24" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <FaGithub className="inline-block text-xl" />
              </a>
              <a href="https://discord.gg/xf8YDutB" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <FaDiscord className="inline-block text-xl" />
              </a>
              <Link to="/join" className="join-society ml-4">Join the society</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden fixed inset-y-0 left-0 w-64 bg-black bg-opacity-90 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}> {/* Updated mobile menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Close main menu</span>
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/events" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</Link>
          <a href="https://github.com/JIITODC/JODC-Workshops" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resources</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <a href="https://www.instagram.com/jodc128/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FaInstagram className="inline-block mr-2" /> Instagram
            </a>
          </div>
          <div className="flex items-center px-5">
            <a href="https://github.com/JIITODC/website-24" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FaGithub className="inline-block mr-2" /> GitHub
            </a>
          </div>
          <div className="flex items-center px-5">
            <a href="https://discord.gg/xf8YDutB" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FaDiscord className="inline-block mr-2" /> Discord
            </a>
          </div>
          <div className="mt-3 px-2">
            <Link to="/join" className="join-society block text-center">Join the society</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

