import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Footer() {
   return (
      <footer class="container-fluid">
         <div id="footer-details" class="row">
            <div class="col-sm-4">
               <h5>About</h5>
               <p class="inline-block">
                  Full Stack Web Development. Skilled in everything from HTML to Heroku.
                  The capacity for structural and design thinking.
            </p>
            </div>
            <div class="col-sm-4">
               <h5>Download CV</h5>
               <p class="inline-block">
                  Need a printable verstion of my CV? Download it here.
               <a href="assets/cv/CV.pdf" target="_blank" class="cv-pdf"><span><FontAwesomeIcon icon={faDownload} /></span></a>
               </p>
            </div>
            <div class="col-sm-4 text-center">
               <h5>MySocial</h5>
               <ul class="list-inline social-links">
                  <li>
                     <a href="https://github.com/Tomas-Kaiser" target="_blank"><span><FontAwesomeIcon icon={faGithub} /></span></a>
                     <a href="https://www.linkedin.com/in/tomas-kaiser-06/" target="_blank"><span><FontAwesomeIcon icon={faLinkedin} /></span></a>
                     
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer;