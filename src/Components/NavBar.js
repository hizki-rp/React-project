import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  ">
  <div class="container-fluid m-3">
  <a class="navbar-brand logo " href="#">HZ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff;"}}/>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto m-3 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">Tech-stack</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">contact</a>
        </li>
       
        
      
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar;