import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

// Import CSS styles for component
import './Footer.css';

// Import Icon Components
import { GiTechnoHeart } from 'react-icons/gi';

function Footer() {
  return (
    <Navbar className='footer' fixed='bottom'>
      <span id='footer'>Made with <GiTechnoHeart className='icon' /> Heather Sorrells &copy;2020 Copyright</span>
    </Navbar>
  );
}

export default Footer;
