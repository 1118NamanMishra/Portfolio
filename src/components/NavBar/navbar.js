import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='dskmenu'>
        <a href='#intro' className='dsktopmenulistitm'>Home</a>
        <a href='#skill'  className='dsktopmenulistitm'>Skills</a>
        <a href='#pe'  className='dsktopmenulistitm'>Projects</a>
        <a href='#exp'  className='dsktopmenulistitm'>Experience</a>
      </div>
      
    
    </nav>
  );
}
 
export default Navbar;
