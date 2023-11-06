import React from 'react'
import './skill.css';
import UIdesign from '../../assets/c-logo.png';
import Webdev from '../../assets/fullstack.png';
import Appd from '../../assets/python.png';
const Skill = () => {
  return (
    <section  id='skill' >
<span className='skiltitle'>Skills</span>
< span className='skilld'>Proficient in diverse programming languages and adept at problem-solving, I bring a blend of technical expertise and innovative thinking to every project. With a strong foundation in engineering principles, I excel in designing creative solutions and collaborating effectively in team environments.</span>
      <div className='skillbars'>
        <div className='skillbar'>
            <img src={UIdesign} alt='UI design' className='skillbarimage' />
            <div className='skillbartxt'>
              <h2>C++/DSA</h2>
              <p>
In the domain of C++ programming, I demonstrate expertise in the language's core principles and functionality. Proficient in both object-oriented and low-level programming, I develop efficient and reliable software solutions. Staying current with C++ standards and best practices, I merge creativity with coding precision to bring concepts to life, always striving for excellence and user satisfaction.
</p>  
            </div>
        </div>
        <div className='skillbar'>
            <img src={Webdev} alt='Webdev' className='skillbarimage' />
            <div className='skillbartxt'>
              <h2>FullStack Developer</h2>
              <p>In  the realm of web web development, I excel in HTML, CSS, JavaScript, and backend technologies like python and Django. I create responsive, visually appealing websites and robust web applications. Staying updated with the latest trends, I merge creative design and efficient functionality to turn concepts into engaging online experiences, prioritizing excellence and user satisfaction.</p>  
            </div>
        </div>
        <div className='skillbar'>
            <img src={Appd} alt='Appd' className='skillbarimage' />
            <div className='skillbartxt'>
              <h2>Python Developer</h2>
              <p>In the realm of Python programming, I showcase proficiency in the language's fundamental concepts and capabilities. Skilled in both object-oriented and high-level scripting, I craft efficient and dependable software solutions. My commitment to staying updated with Python's latest standards and best practices allows me to seamlessly combine creativity with coding precision, transforming ideas into practical applications. Excellence and user satisfaction are at the forefront of my Python development approach.</p>  
            </div>
        </div>
      </div>
    </section>
    )
}

export default Skill