import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaVoicemail, FaEnvelope } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          {/* <a href="#">
            <FaFacebook />
          </a> */}
          <a href="mailto:namanmish1234@gmail.com" target="_blank">
  <FaEnvelope />
</a>
          <a href="https://www.linkedin.com/in/naman-mishra-a67821226" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-text">
          <p>"Welcome to my portfolio website. I'm a skilled web developer and former brand ambassador passionate about creating exceptional digital experiences. For inquiries or collaboration opportunities, you can reach me at [namanmish1234@gmail.com] or connect via  <a href="https://www.linkedin.com/in/naman-mishra-a67821226" target="_blank">
            <FaLinkedin />
          </a>. Let's bring your digital projects to life."</p>
         
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Sewarth Corp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
