import React from 'react'
import '../App.css';
import imgH from '../assets/profile/imgH.jpg';
const About = () => {
  return (
    <div className='container'>
        <div className='row about-row'>
        <div className='col-sm-6 col-xm-12'>
       
        <div className='profile'>
            <img src={imgH} width={200} height={199}></img>
        </div>
         
        </div>
        <div className='col-sm-6 col-xm-12 '>
        <h1 className='about-header'>About Me</h1>
        <p>
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            
        </p>
        <p>
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            This is a text about me that should express details
            about my work!
            
        </p>
      
        </div>
        </div>
    </div>
  )
}

export default About
