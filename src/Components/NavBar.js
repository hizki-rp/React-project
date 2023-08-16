import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import logo from './log.png';
import navIcon1 from './log.png';
import navIcon2 from './log.png';
import navIcon3 from './log.png';

 const NavBar = () => {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, seScrolled] = useState(false);

      useEffect(() => {
         const onScroll = () => {
          if (window.scrollY > 50){
            seScrolled(true);
          }
          else{
            seScrolled(false);
          }
         }

         window.addEventListener("scroll", onScroll);
         return () => window.removeEventListener("scroll", onScroll);
      }, [])

      const onUpdateActiveLink = (value) => {
          setActiveLink(value);
      }
        
      
  return(
    
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
     
           <Container>
              <Navbar.Brand href="#home">
                 <img src={logo} alt="logo"/>
                 </Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"> </span>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                       <Nav.Link href="#home" className={activeLink === 'home' ? 'active navba-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                       <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navba-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                       <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navba-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                     </Nav>
                     <span className="navbar-text">
                       <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""/></a>
                        <a href="#"><img src={navIcon2} alt=""/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>
                       </div>
                       <button className="vvd" onClick={() => console.log('connect')}></button>
                     </span>
                  </Navbar.Collapse>
           </Container>
    </Navbar>

    
  )
}
export default NavBar;
   
  
