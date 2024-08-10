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
import taship from '../../assets/TAship.png';
import aws from '../../assets/aws.png';
import pe1 from '../../assets/pe1.png';
import pe2 from '../../assets/pe2.png';
import itn from '../../assets/CCNA ITN.png';
import ensa from '../../assets/CCNA ENSA.png';
import srwe from '../../assets/CCNA SRWE.png';



function MyCarousel() {
    return (
      <div className='carousel'>

        <Carousel showThumbs={true} showStatus={false}>
         
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
          <div className='imgs'>
            <img src={taship} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">TAship Completion</p>
          </div>
          <div className='imgs'>
            <img src={aws} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">AWS</p>
          </div>
          <div className='imgs'>
            <img src={pe1} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">Python Essential 1</p>
          </div>
          <div className='imgs'>
            <img src={pe2} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">Python Essential 2</p>
          </div>
          <div className='imgs'>
            <img src={itn} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">CCNA: ITN</p>
          </div>
          <div className='imgs'>
            <img src={ensa} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">CCNA : ENSA</p>
          </div>
          <div className='imgs'>
            <img src={srwe} className="zoom-on-hover"  alt="Image 12" />
            <p className="legend">CCNA : SRWE</p>
          </div>
         
         
        </Carousel>
      </div>
    );
  }
  
  export default MyCarousel;
  