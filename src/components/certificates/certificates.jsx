import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './certificate.css'
import c from '../../assets/c++.png';
import ce from '../../assets/c++e.png';
import cp from '../../assets/cp.png';
import cpe from '../../assets/cpe.png';
import ds from '../../assets/ds.png';
import dse from '../../assets/dse.png';
import cc from '../../assets/cc.png';
import psb from '../../assets/psb.png';
import psi from '../../assets/psi.png';
import sql from '../../assets/sql.png';
import cpart from '../../assets/cpart.png';
import exp from '../../assets/exp.png';


// import calc from '../../assets/calc.png'

function MyCarousel() {
    return (
      <div className='carousel'>
        {/* <h2>React Carousel</h2> */}
        <Carousel showThumbs={true} showStatus={false}>
          {/* <div className='imgs'>
            <img src={exp} className="zoom-on-hover"  alt="Image 1" />
            <p className="legend">Certificate of Experience(Internship)</p>
          </div> */}
          <div className='imgs'>
            <img src={cpe} className="zoom-on-hover"  alt="Image 2" />
            <p className="legend">Excellenece in Competitive Programming</p>
          </div>
          <div className='imgs'>
            <img src={dse} className="zoom-on-hover"  alt="Image 3" />
            <p className="legend">Excellenece in Data Structure</p>
          </div>
          <div className='imgs'>
            <img src={ce} className="zoom-on-hover"  alt="Image 4" />
            <p className="legend">Excellenece in c++</p>
          </div>
          <div className='imgs'>
            <img src={sql} className="zoom-on-hover"  alt="Image 5" />
            <p className="legend">SQL(Basic)</p>
          </div>
          <div className='imgs'>
            <img src={cc} className="zoom-on-hover"  alt="Image 6" />
            <p className="legend">Cloud Computing</p>
          </div>
          <div className='imgs'>
            <img src={psi} className="zoom-on-hover"  alt="Image 7" />
            <p className="legend">Problem Solving(Intermediate)</p>
          </div>
          <div className='imgs'>
            <img src={psb} className="zoom-on-hover"  alt="Image 8" />
            <p className="legend">Problem Solving(Basic)</p>
          </div>
          {/* <div className='imgs'>
            <img src={cpart} className="zoom-on-hover"  alt="Image 9" />
            <p className="legend">Participation</p>
          </div> */}
          <div className='imgs'>
            <img src={c} className="zoom-on-hover"  alt="Image 10" />
            <p className="legend">C++ Completion</p>
          </div>
          <div className='imgs'>
            <img src={ds} className="zoom-on-hover"  alt="Image 11" />
            <p className="legend">Data Structures Completion</p>
          </div>
          <div className='imgs'>
            <img src={cp} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">Competitive Programming Completion</p>
          </div>
         
        </Carousel>
      </div>
    );
  }
  
  export default MyCarousel;
  