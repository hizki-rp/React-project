import React from 'react'
import '../App.css';
import imgH from '../assets/profile/imgH.jpg';
const About = () => {
  return (
    <div className='container-about'>
        <div className='row about-row'>
        <div className='col-sm-6 col-xm-12'>
       
        <div className='profile'>
            <img src={imgH} width={200} height={199}></img>
        </div>
         
        </div>
        <div className='col-sm-6 col-xm-12 a-text-container'>
        <h1 className='about-header'>About Me</h1>
        <p>
          I am a Web developer with a background in Software Engineering,
          and love to build websites that catch the users eyes and create 
          an amazing experience. Inspired by current trends and deep dive into
          learning new technologies. As a programmer i like to solve problems on hackerrank
          and Enjoy the actuall process. I also like to help people by volunteering
          using my skills to contribute to the community.
            
        </p>
        <p>
          When Im not coding i like to do art either by drawing portraits or by
          creating a 3D model using the blender software. I try to get a refresher by going
          on a stroll and doing sports such as Gymnastics.
            
        </p>
      
        </div>
        </div>
    </div>
  )
}

export default About;
