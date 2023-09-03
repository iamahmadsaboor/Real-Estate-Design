import React from "react";
import Logo from "../Assets/Logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="firstfooter">
          <h5>Popular Searches</h5>
          <p>Apartment for Rent</p>
          <p>Apartment Low to Hide</p>
          <p>Offices for Buy</p>
          <p>Offices for Rent</p>
        </div>
        <div className="secondfooter">
          <h5>About Us</h5>
          <p>Our Story</p>
          <p>Team Members</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className="thirdfooter">
          <h5>Quick Links</h5>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Contact Support</p>
          <p>FAQs</p>
        </div>
        <div className="fourthfooter">
          <h5>Support</h5>
          <p>Help Center</p>
          <p>Team Support</p>
          <p>Management</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="bottomlogo" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
