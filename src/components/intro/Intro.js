import React from 'react'
import bg from '../../assets/image.png';
// import { Link } from 'react-scroll';
// import btnimg from '../../assets/hireme.png'
import './intro.css'

const Intro = () => {
  return (
<section  id='intro'>
    <div className='introcontent'> 
    <span className='hello'>Hello,</span>
    <span className='introtxt'>I'm <span className='introname'>Naman,</span><br/>Website developer</span>
   <p className='introp'>As a dedicated B.Tech student, I am passionate about harnessing<br/>technology to solve real-world challenges and continuously expanding<br/> my knowledge in the ever-evolving field of technology.</p>
    {/* <Link href='namanmish1234@gmail.com'><button className='btn'><image src={btnimg} alt="" className='btnimg'/>Hire Me</button></Link> */}
    </div>
    <img src={bg} alt='profile' className='bg'/>
    {/* <a href='namanmish1234@gmail.com'><button className='btn'><image src={btnimg} alt="" className='btnimg'/>Hire Me</button></a> */}
</section> 

)
}

export default Intro;