import React from 'react'
import './exp.css';
import UIdesign from '../../assets/cn.png';
import Webdev from '../../assets/is.png'
// import Appd from '../../assets/app-design.png';
const Exp = () => {
  return (
    <section  id='exp' >
<span className='skiltitle'>Experience</span>
< span className='skilld'>My portfolio showcases a rich tapestry of experiences, from internships to hands-on projects, highlighting my journey of continuous learning and growth as a B.Tech student. These experiences have honed my technical skills, teamwork, and adaptability, positioning me as a valuable asset in the field of engineering.</span>
      <div className='skillbars'>
        <div className='skillbar'>
            <img src={UIdesign} alt='UI design' className='skillbarimage' />
            <div className='skillbartxt'>
              <h2>Teaching Assistant(Coding Ninjas)</h2>
              <p>As a Teaching Assistant at Coding Ninjas, I guided students, particularly in DSA and competitive coding courses. I addressed their queries, offering detailed explanations, and successfully completed my internship, earning a recognition
<a id="chromeLink" href="https://drive.google.com/file/d/1ZgIrm3qFwclaQ_F5HuBMoiqZd2Nom-UM/view?usp=drive_link" target="_blank">certificate</a></p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={Webdev} alt='Webdev' className='skillbarimage' />
            <div className='skillbartxt'>
              <h2>Student Ambassedor(Internshala)</h2>
              <p>As a college brand ambassador for<a href="https://drive.google.com/file/d/1HlulWJ7JpXGSsG7J37tUFqtU8Ja3bzVf/view?usp=drive_link" className='internshala'> Internshala .</a>, I connected students to valuable internships through workshops and events, fostering professional growth and expanding my network.</p>  
            </div>
        </div>
        {/* <div className='skillbar'>
            <img src={Appd} alt='Appd' className='skillbarimage' />
            <div className='skillbartxt'>
              <h2>Python developer</h2>
              <p> dummy textdummy textdummy textdummy textdummy text</p>  
            </div>
        </div> */}
      </div>
    </section>
    )
}

export default Exp