import React from 'react';
import tlogo1 from '../assets/javascript.png';
import tlogo2 from '../assets/react.png';
import tlogo3 from '../assets/bootstrap.png';
import tlogo4 from '../assets/github.png';


import Typed from 'react-typed';


const Header = () => {
  return (
  
    <div className='container-header'>
          <div className='projects-link'>
          <h5>projects</h5>
          </div>
        <div className='main-info'>
                <h1>Hi, I'm Hizkiyas.</h1>
                <h2>Front End Developer</h2>
        </div>
         
        <Typed className='typed-text'
                strings={["Front-End Development", "Responsive web design", "UX Design"]}
                typeSpeed={70}
                backSpeed={30}
                loop
               />

<div className='contact-link'>
 <h5>contact me</h5>
  </div>
    </div>
  )
}
export default Header;
