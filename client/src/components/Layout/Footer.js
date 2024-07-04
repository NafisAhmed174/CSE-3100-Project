import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center mt3"> 
      <Link to = "/about">About</Link>
      | 
      <Link to = "/contact">Contact</Link>
      | 
      <Link to = "/policy">Privacy and Policy</Link>
      </p>
      <h4 className="text-center">&copy; 2024 MobileShop BD Ltd. | All Rights Reserved</h4>
    </div>
  );
};

export default Footer;
