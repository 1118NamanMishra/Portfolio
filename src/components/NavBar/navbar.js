import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='dskmenu'>
        <a href='#intro' className='dsktopmenulistitm'>Home</a>
        <a href='#skill'  className='dsktopmenulistitm'>Skills</a>
        <a href='#pe'  className='dsktopmenulistitm'>Projects</a>
        <a href='#exp'  className='dsktopmenulistitm'>Experience</a>
      </div>
      <button className='dskbtn'>
        <a href="https://www.linkedin.com/in/naman-mishra-a67821226" target="_blank" className='dsktopcontactimg'>
        Contact me
          </a>
      </button>
    
    </nav>
  );
}
 
export default Navbar;
