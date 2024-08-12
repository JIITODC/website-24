import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="copyright">
        <h4>© {currentYear} JIIT Open-Source Developer Circle. All rights reserved.</h4>
      </div>

      <div className='header2'>
       <a href="https://www.instagram.com/jodc128/"><FaInstagram className='icons links2'/></a> 
       <a href="https://github.com/JIITODC/website-24"><FaGithub className='icons links2'  /></a> 
       <a href="https://discord.gg/xf8YDutB"><FaDiscord className='icons links2'  /></a> 
       <Link to='/join' className='links1'><h3 className="links_footer">Join the society</h3></Link>
      </div>
    </div>
  );
};

export default Footer;
