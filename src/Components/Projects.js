import React from 'react'
import koko from '../assets/kokoro.PNG';


const Projects = () => {
  return (
    <div className='app__container'>
      <h1>My Projects</h1>
    <div className='container-Projects'>
       <div className='items one'>
         <h3>ShoppinTech</h3>
         <img className='items__img' src={koko}></img>
         <button className='items__btn'>
         <a href='https://hizki-rp.github.io/BeckyW/'>view demo</a>
          </button>
       </div>
       <div className='items two'>
         <h3>postDesign</h3>
         <img className='items__img' src={koko}></img>
         <button className='items__btn'>
          <a href='https://hizki-rp.github.io/BeckyW/'>view demo</a>
          </button>
       </div>
    </div>
    </div>
  
  )
}

export default Projects;
