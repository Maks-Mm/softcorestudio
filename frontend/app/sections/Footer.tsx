
// app/sections/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-blur-circle circle-1"></div>
      <div className="footer-blur-circle circle-2"></div>
      
      <div className="footer-content">
        <div className="footer-top-section">
          <div className="footer-brand">
            <h2 className="footer-big-text">LET'S<br/>CONNECT.</h2>
            <p className="footer-description">
              Building digital experiences that matter. Based in the heart of design.
            </p>
          </div>
          
          <div className="footer-grid">
            <div className="footer-links-group">
              <span className="group-title">Navigation</span>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Terms</li>
              </ul>
            </div>
            <div className="footer-links-group">
              <span className="group-title">Platform</span>
              <ul>
                <li>Products</li>
                <li>Services</li>
                <li>Billing</li>
              </ul>
            </div>
            <div className="footer-links-group">
              <span className="group-title">Social</span>
              <div className="footer-social-row">
                <a href="#" className="glass-icon">TW</a>
                <a href="#" className="glass-icon">YT</a>
                <a href="#" className="glass-icon">CP</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {currentYear} CoolSite — Made with <span className="heart">❤</span> by Jux</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <span className="separator">/</span>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;