// app/sections/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      

      {/* Footer Section */}
      <footer className="footer" id="footer">
        <div className="contain">
          <div className="col company-col">
            <div className="company-info">
              <h3 className="company-name">CoolSite</h3>
              <p className="company-tagline">
                Made with <span className="heart">❤</span> by Jux
              </p>
              <div className="social-icons">
                <a
                  href="https://codepen.io/Juxtopposed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="CodePen"
                >
                  <img
                    src="https://assets.codepen.io/9051928/codepen_1.png"
                    alt="CodePen"
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://twitter.com/juxtopposed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="X (Twitter)"
                >
                  <img 
                    src="https://assets.codepen.io/9051928/x.png" 
                    alt="X (Twitter)" 
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://youtube.com/@juxtopposed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <img
                    src="https://assets.codepen.io/9051928/youtube_1.png"
                    alt="YouTube"
                    className="social-icon"
                  />
                </a>
              </div>
              <p className="copyright">© {currentYear} All Rights Reserved</p>
            </div>
          </div>

          <div className="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Our mission</li>
              <li>Privacy Policy</li>
              <li>Terms of service</li>
            </ul>
          </div>

          <div className="col">
            <h1>Products</h1>
            <ul>
              <li>Services</li>
              <li>Products</li>
              <li>Join our team</li>
              <li>Partner with us</li>
            </ul>
          </div>

          <div className="col">
            <h1>Accounts</h1>
            <ul>
              <li>Sign In</li>
              <li>Create Account</li>
              <li>Account Settings</li>
              <li>Billing</li>
            </ul>
          </div>

          <div className="col">
            <h1>Resources</h1>
            <ul>
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>Blog</li>
              <li>Support Center</li>
            </ul>
          </div>

          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Help Center</li>
              <li>Open ticket</li>
              <li>Community</li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
        <div className="backdrop"></div>
      </footer>
    </div>
  );
};

export default Footer;