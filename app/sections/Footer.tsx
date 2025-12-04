//app/sections/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gunmetal text-antiwhite py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Our Company</h3>
        <ul className="flex justify-center flex-wrap gap-6 mb-4">
          <li>
            <a href="#" className="hover:text-candyred transition-colors">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-candyred transition-colors">
              Meet Our Team
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-candyred transition-colors">
              Developer Blog
            </a>
          </li>
        </ul>
        <p className="text-sm">&copy; {currentYear} Digital Product Delivery Co., All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
