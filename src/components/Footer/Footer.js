import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css";
import { GiTechnoHeart } from "react-icons/gi";

const Footer = () => {
  return (
    <Navbar className="footer" fixed='bottom'>
      <span id="footer">Made with <GiTechnoHeart className="icon" /> Heather Sorrells &copy;2020 Copyright</span>
    </Navbar>
  );
}

export default Footer;
