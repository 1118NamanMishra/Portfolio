import React from 'react';
import {  FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
           <a href="https://github.com/1118NamanMishra" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/naman-mishra-a67821226" target="_blank"><FaLinkedin /></a>
        </div>
       
        <div className="footer-text">
          <p>"Welcome to my portfolio website. I'm a skilled web developer and former brand ambassador passionate about creating exceptional digital experiences. For inquiries or collaboration opportunities, you can reach me at [namanmish1234@gmail.com] or connect via  <a href="https://www.linkedin.com/in/naman-mishra-a67821226" target="_blank">
            <FaLinkedin />
          </a>. Let's bring your digital projects to life."</p>
         
        </div>
        <div className="copyright">
        &copy; {new Date().getFullYear()} Sewarth Corp. All Rights Reserved.
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;