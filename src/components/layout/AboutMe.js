import React, { Component } from 'react';

class AboutMe extends Component {
   render() {
     return(
      <section className="container mt-3">
         <artical className="about-me">
         <h2>About Me</h2>
         <p>I am an experienced full-stack software developer, holding a diploma in software development, credit-rated by Edinburgh Napier University. I have experience with front-end (HTML5, CSS3, JS) and back-end (Python, SQL, noSQL) technologies, so as 5 years of work experience in B2B and B2C markets.</p>
         </artical>
         <artical className="technologies">
            <h3 className="text-center">Technologies I work with</h3>
         </artical>
      </section>
     )
   }
 }

export default AboutMe;