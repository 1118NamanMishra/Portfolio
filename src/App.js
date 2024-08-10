import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/intro/Intro';
import Skill from './components/skills/skill';
import MediaCard from './components/PE/pe';
import ContactForm from './components/contact/contact';
import Footer from './components/Footer/footer';
import Exp from './components/Experience/exp';
import MyCarousel from './components/certificates/certificates';


function App() {
  return (
    <>
    <div className="App">
       <Navbar/> 
       <Intro/>
       <Skill/>
       <MediaCard/>
       <MyCarousel/>
        <Exp/>
      <ContactForm/>
       <Footer/>

      

    </div>
    </>
  );
}

export default App;
