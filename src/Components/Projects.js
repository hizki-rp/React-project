import React from 'react'
import tsonic from '../assets/techysonic.PNG';
import postDesign from '../assets/postDesign.PNG';


const Projects = () => { 
  return (
    <div className='app__container projects' id='projects'>
      <h1 className='projects-heading'>Projects</h1>
    <div className='container-Projects'>
       <div className='items one'>
         <h3>TechySonic</h3>
         <a href='https://hizki-rp.github.io/TechySonic/'>
         <img className='items__img img' src={tsonic}></img>
         </a>
         <button className='items__btn'>
         <a href='https://hizki-rp.github.io/TechySonic/'>demo</a>
          </button>
       </div>
       <div className='items two'>
         <h3>PostDesign</h3>
         <a href='https://hizki-rp.github.io/postDesign/'>
         <img className='items__img img' src={postDesign}></img>
         </a>
         <button className='items__btn'>
          <a href='https://hizki-rp.github.io/postDesign/'>demo</a>
          </button>
       </div>
    </div>
    </div>
  
  )
}

export default Projects;
