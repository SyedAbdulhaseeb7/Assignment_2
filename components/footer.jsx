
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importing from react-icons

const Footer = () => {
  return (
    <footer className="custom-footer">
      {/* Background Image with Blur */}
      <img
        src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2934980/header.jpg?t=1723388299" // Replace with your custom background image URL
        alt="Footer Background"
        className="footer-bg"
      />

      {/* Content Section */}
      <div className="footer-content">
        <h2>Stay Connected</h2>
        <p>Follow us on our social media channels</p>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="copyright">© 2024 Syed Haseeb. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
