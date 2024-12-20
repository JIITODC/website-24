import React from "react";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black bg-opacity-80 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-sm">
            © {currentYear} JIIT Open-Source Developer Circle. All rights reserved.
          </h4>
        </div>

        <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/jodc128/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className='text-2xl' />
            </a>
            <a 
              href="https://github.com/JIITODC/website-24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className='text-2xl' />
            </a>
            <a 
              href="https://discord.gg/xf8YDutB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Discord"
            >
              <FaDiscord className='text-2xl' />
            </a>
          </div>
          <Link 
            to='/join' 
            className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300'
          >
            Join the society
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

