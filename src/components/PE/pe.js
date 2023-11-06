import React from 'react';
import './pe.css';
import calc from '../../assets/calc.png'
import portfolio from '../../assets/resume.webp'


const Pe = () => {
  return (
    <section id='pe'>
      <span className='skiltitle'>Projects</span>
< span className='skilld'>In my portfolio, you'll find a collection of innovative projects showcasing my ability to blend theoretical knowledge with practical application. Each project reflects my passion for technology, demonstrating hands-on expertise in problem-solving and creative engineering solutions.</span>
<div class="card-list">
  <div class="card">
    <div class="card-circle"></div>
        <img src={calc} alt="Placeholder"  className='cardimg'/>

    <div class="card-content">
      <h3><a href="https://1118namanmishra.github.io/calculator/" target="_blank">Calculator</a></h3>
      <p>"Experience my interactive classroom calculator project – a virtual classroom with a fully functional calculator, dynamic clock, and responsive design. This creation showcases my web development skills, combining functionality with a realistic learning environment. Explore and enjoy a unique online experience!"</p>
    </div>
  </div>
  <div class="card">
    <div class="card-circle"></div>
        <img src={portfolio} alt="Placeholder" className='cardimg'/>

    <div class="card-content">
      <h3><a href="https://1118namanmishra.github.io/portfolio/" target="_blank">Portfolio</a></h3>
      <p>"Explore my portfolio website, a professional showcase of my web development expertise. With a clean, user-friendly design, it features an array of diverse projects, highlights my journey in the field, and offers easy contact options. Discover how we can collaborate to transform your digital ideas into reality."</p>
    </div>
  </div>
  
</div>
    </section>

  )
}

export default Pe;