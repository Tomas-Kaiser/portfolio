import React from 'react';

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         <button className="navbar-toggler ml-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-3">
               <li className="nav-item">
                  <a className="nav-link current" href="#home">Home<span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#about-me">About Me</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#technologies">Technologies</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#experience-education">Experience &amp; Education</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar;