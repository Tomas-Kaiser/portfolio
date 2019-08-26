import React from 'react';

function Experience() {
   return (
      <section id="experience-education" className="container container-exp">
         <h2>Work Experience and Education</h2>
         <div className="timeline">
            <ul>
               <li>
                  <div className="content">
                     <h3>Code Institute</h3>
                     <p>
                        Diploma in full stack software development, credit-rated by <b>Edinburgh Napier University</b>
                     </p>
                  </div>
                  <div className="time">
                     <h4>October 2018</h4>
                  </div>
               </li>
               <li>
                  <div className="content">
                     <h3>UDACITY, USA</h3>
                     <p>
                        Certificate Front End Web Developer
                     </p>
                  </div>
                  <div className="time">
                     <h4>December 2017</h4>
                  </div>
               </li>
               <li>
                  <div className="content">
                     <h3>Forcepoint</h3>
                     <p>
                        I currently work as a Hardware Analyst
                     </p>
                  </div>
                  <div className="time">
                     <h4>November 2017</h4>
                  </div>
               </li>
               <li>
                  <div className="content">
                     <h3>Toytoa Tsusho</h3>
                     <p>
                        I worked as a customer service specialist
                     </p>
                  </div>
                  <div className="time">
                     <h4>August 2016</h4>
                  </div>
               </li>
               <li>
                  <div className="content">
                     <h3>GEFCO Forwarding</h3>
                     <p>
                        I worked as an Indoor Sales Specialist
                     </p>
                  </div>
                  <div className="time">
                     <h4>November 2014</h4>
                  </div>
               </li>
               <li>
                  <div className="content">
                     <h3>University of Pardubice</h3>
                     <p>
                        MSc. Technology and Supply Chain Management
                     </p>
                  </div>
                  <div className="time">
                     <h4>September 2014</h4>
                  </div>
               </li>
               <li>
                  <div className="content">
                     <h3>University of Pardubice</h3>
                     <p>
                        BSc. Technology
                     </p>
                  </div>
                  <div className="time">
                     <h4>September 2012</h4>
                  </div>
               </li>
               <div style={{ clear: "both" }}></div>
            </ul>
         </div>
      </section>
   )
}

export default Experience;