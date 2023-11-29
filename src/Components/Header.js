import React from 'react';
import tlogo1 from '../assets/javascript.png';
import tlogo2 from '../assets/react.png';
import tlogo3 from '../assets/bootstrap.png';
import tlogo4 from '../assets/github.png';
import bg from '../assets/dfree.jpeg';

import Typed from 'react-typed';


const Header = () => {
  return (
  
  
    <div className='container container-header'>
    
        <div className='main-info'>
                <h1>Web Developer</h1>
                <Typed className='typed-text'
                strings={["Front-End Development", "Responsive web design", "UX Design"]}
                typeSpeed={70}
                backSpeed={30}
                loop
               />
                <div className="tech-logos">
                 <img src={tlogo1}></img>
                 <img src={tlogo2}></img>
                 <img src={tlogo3}></img>
                 <img src={tlogo4}></img>
                </div>

                <a href="#" className='btn-main'>Contact Me</a>
                <div>
                  
                </div>
          
              
      
        </div>
    </div>
  )
}

export default Header;