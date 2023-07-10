import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-page">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Get in Touch</h2>
          <p className="footer-text">Feel free to get in touch with us. Feel no barriers in communicating your doubts over the contact provided right here.</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              <p className="footer-item-text">KIIT UNIVERSITY, BHUBANESHWAR, 751024</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-phone-alt footer-icon"></i>
              <p className="footer-item-text">(+91) 9933113346</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-envelope footer-icon"></i>
              <p className="footer-item-text"><a style={{textDecoration:"none", color:"white"}} href="mailto:aryanap2001@gmail.com"> Send An Email</a></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
