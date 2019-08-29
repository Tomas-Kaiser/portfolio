import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
   return (
      <footer className="container-fluid">
         <div id="footer-details" className="row justify-content-between">
            <div className="col-sm-4">
               <h5>About Me</h5>
               <p className="inline-block">
                  I am a Full Stack Web Developer. If you want me hire or work on a project, do not hesitate to contact me
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