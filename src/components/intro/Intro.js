import React from 'react';
import bg from '../../assets/image.png';
import './intro.css';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introcontent'>
        <span className='hello'>Hello,</span>
        <span className='introtxt'>I'm <span className='introname'>Naman,</span><br/>Website Developer</span>
        <p className='introp'>As a dedicated B.Tech student, I am passionate about harnessing technology to solve real-world<br/> challenges and continuously expanding my knowledge in the ever-evolving field of technology.</p>
      </div>
      <img src={bg} alt='profile' className='bg' />
    </section>
  );
}

export default Intro;
