import React from 'react';
import tlogo1 from '../assets/javascript.png';
import tlogo2 from '../assets/react.png';
import tlogo3 from '../assets/bootstrap.png';
import tlogo4 from '../assets/github.png';
import bg from '../assets/dfree.jpeg';



const Header = () => {
  return (
  
  
    <div className='container container-header'>
    
        <div className='row'>
            <div className='col'>
                <h1>Tech Stacks</h1>
                <div className="tech-logos">
                 <img src={tlogo1}></img>
                 <img src={tlogo2}></img>
                 <img src={tlogo3}></img>
                 <img src={tlogo4}></img>
                </div>
                <div>
                  
                </div>
            </div>
            <div className='col'>
                <h1>Front-End Developer</h1>
            </div>
        </div>
    </div>
  )
}

export default Header;