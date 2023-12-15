import React from 'react'
import tsonic from '../assets/techysonic.PNG';
import postDesign from '../assets/postDesign.PNG';


const Projects = () => { 
  return (
    <div className='app__container projects' id='projects'>
      <h1>My Projects</h1>
    <div className='container-Projects'>
       <div className='items one'>
         <h3>TechySonic</h3>
         <img className='items__img img' src={tsonic}></img>
         <button className='items__btn'>
         <a href='https://hizki-rp.github.io/TechySonic/'>view demo</a>
          </button>
       </div>
       <div className='items two'>
         <h3>PostDesign</h3>
         <img className='items__img' src={postDesign}></img>
         <button className='items__btn'>
          <a href='https://hizki-rp.github.io/postDesign/'>view demo</a>
          </button>
       </div>
    </div>
    </div>
  
  )
}

export default Projects;
