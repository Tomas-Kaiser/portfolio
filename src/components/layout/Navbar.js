import React from 'react';

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
               <li className="nav-item">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">About Me</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Projects</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar;