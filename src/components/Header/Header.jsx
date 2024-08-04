import React from 'react'
import './Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {Link} from 'react-router-dom';



function Header() {
  return (
    <div className='header'>
      <div className='header1'>
        <Link to='/' className='links1'><h3 className='links1'>Home</h3></Link>
        <Link to='/events'  className='links1'><h3 className='links1'>Events</h3></Link>
        <Link to='/resources'  className='links1'><h3 className='links1'>Resources</h3></Link>
      </div>

      <div className='header2'>
       <a href="https://www.instagram.com/jodc128/"><FaInstagram className='icons links2'  /></a> 
       <a href="https://github.com/JIITODC/website-24"><FaGithub className='icons links2'  /></a> 
       <a href="https://discord.gg/xf8YDutB"><FaDiscord className='icons links2'  /></a> 
       <Link to='/join' className='links2'><h3 className='links2'>Join the society</h3></Link>
      </div>
    </div>
  );
}

export default Header
