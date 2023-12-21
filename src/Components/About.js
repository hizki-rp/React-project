import React from 'react'
import undrawTeam from '../assets/undraw_team_spirit.svg';
import '../App.css';

const About = () => {
  return (
   <div className='about-app' id='about'>
      <div className='about-design'>
           <img className='contact-team__logo' src={undrawTeam} alt='contact image' />
      </div>
      <div className='container-about' >


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

  )
}

export default About;
