import React from 'react'

const Skills = () => {
  return (
   <div className='skill-app' id='skills'>
    <div className='skills' >
      <div className='skills__title'>
        <h1>My Skills</h1>
      </div>
      <div className='skills__content'>
         <ul className='skills__list'>
            <span className='label'>html</span>
            <li className='bar'><span className='html'></span></li>
            <span className='label'>css</span>
            <li className='bar'><span className='css'></span></li>
            <span className='label'>javascript</span>
            <li className='bar'><span className='javascript'></span></li>
            <span className='label'>react</span>
            <li className='bar'><span className='react'></span></li>
            <span className='label'>bootstrap</span>
            <li className='bar'><span className='bootstrap'></span></li>
            <span className='label'>sass</span>
            <li className='bar'><span className='sass'></span></li>
         </ul>
         <ul className='skills__list'>
         <span className='label'>grid</span>
            <li className='bar'><span className='grid'></span></li>
            <span className='label'>flexbox</span>
            <li className='bar'><span className='flexbox'></span></li>
            
         </ul>
      </div>
    </div>
  </div>  
  )
}

export default Skills;