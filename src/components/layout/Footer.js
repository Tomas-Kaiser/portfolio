import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Footer() {
   return (
      <footer className="container-fluid">
         <div id="footer-details" className="row">
            <div className="col-sm-4">
               <h5>About</h5>
               <p className="inline-block">
                  Full Stack Web Development. Skilled in everything from HTML to Heroku.
                  The capacity for structural and design thinking.
            </p>
            </div>
            <div className="col-sm-4">
               <h5>Download CV</h5>
               <p className="inline-block">
                  Need a printable version of my CV? Send me a message.
               </p>
            </div>
            <div className="col-sm-4 text-center">
               <h5>MySocial</h5>
               <ul className="list-inline social-links">
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