import React, { Component } from 'react';
import data from '../../static/data/data'

class AboutMe extends Component {
   state = {
      data
   }

   render() {
      console.log(data)
      return (
         <section className="container mt-3">
            <article className="about-me">
               <h2>About Me</h2>
               <p>I am an experienced full-stack software developer, holding a diploma in software development, credit-rated by Edinburgh Napier University. I have experience with front-end (HTML5, CSS3, JS) and back-end (Python, SQL, noSQL) technologies, so as 5 years of work experience in B2B and B2C markets.</p>
            </article>
          </section>
      )
   }
}

export default AboutMe;