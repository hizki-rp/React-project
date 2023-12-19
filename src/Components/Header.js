import React from 'react';

import Typed from 'react-typed';


const Header = () => {
  return (
  
    <div className='container-header'>
          <div className='projects-link'>
          <h5><a className='projects-link__anchor' href='#projects'>projects</a></h5>
          </div>
        <div className='main-info'>
                <h1>Hi, I'm Hizkiyas.</h1>
                <h2>Front End Developer</h2>
        </div>
         
        <Typed className='typed-text'
                strings={["Responsive web design", "UX Design",]}
                typeSpeed={70}
                backSpeed={30}
                loop
               />

<div className='contact-link'>
 <h5><a className='contact-link__anchor' href='#contact'>contact me</a></h5>
  </div>
    </div>
  )
}
export default Header;
