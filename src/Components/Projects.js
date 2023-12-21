import React from 'react'
import tsonic from '../assets/techysonic.PNG';
import postDesign from '../assets/postDesign.PNG';


const Projects = () => { 
  return (
    <div className='app__container projects' id='projects'>
      <h1 className='projects-heading'>Projects</h1>
    <div className='container-Projects'>
       <div className='items one'>
         <a className='project-link' href='https://hizki-rp.github.io/TechySonic/'>
         <img className='items__img img' src={tsonic}></img>
         <h3>TechySonic</h3>
         <p className='project-details'>Discover your next choice while exploring options included with best price!</p>
         </a>
         <button className='items__btn'>
         <a href='https://hizki-rp.github.io/TechySonic/'>demo</a>
          </button>
       </div>
       <div className='items two'>   
         <a className='project-link' href='https://hizki-rp.github.io/postDesign/'>
         <img className='items__img img' src={postDesign}></img>
         <h3 className='proj-title'>PostDesign</h3>
         <p className='project-details'>Build your social media posts easily! </p>
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
