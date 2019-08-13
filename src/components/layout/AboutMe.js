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
            <article className="technologies">
               <h3 className="text-center">Technologies I work with</h3>

               <hr />

               <div className="row justify-content-center">
                  {
                     this.state.data.languages.map((lang) => (
                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-1 text-center" key={lang.id}>
                           <img src={require(`../../static/images/${lang.img}`)} alt={lang.title} className="img-lang mb-4" />
                           <h6 className="mb-0">{lang.title}</h6>
                           <p className="exp">{lang.exp}</p>
                        </div>
                     ))
                  }
               </div>

               <hr />

               <div className="row justify-content-center">
                  {
                     this.state.data.databases.map((db) => (
                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-1 text-center" key={db.id}>
                           <img src={require(`../../static/images/${db.img}`)} alt={db.title} className="img-lang mb-4" />
                           <h6 className="mb-0">{db.title}</h6>
                           <p className="exp">{db.exp}</p>
                        </div>
                     ))
                  }
               </div>

               <hr />

               <div className="row justify-content-center">
                  {
                     this.state.data.dataVisualization.map((dv) => (
                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center" key={dv.id}>
                           <img src={require(`../../static/images/${dv.img}`)} alt={dv.title} className="img-lang mb-4" />
                           <h6 className="mb-0">{dv.title}</h6>
                           <p className="exp">{dv.exp}</p>
                        </div>
                     ))
                  }
               </div>

               <hr />

               <div className="row justify-content-center">
                  {
                     this.state.data.frameworks.map((fl) => (
                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center" key={fl.id}>
                           <img src={require(`../../static/images/${fl.img}`)} alt={fl.title} className="img-lang mb-4" />
                           <h6 className="mb-0">{fl.title}</h6>
                           <p className="exp">{fl.exp}</p>
                        </div>
                     ))
                  }
               </div>

               <hr />

               <div className="row justify-content-center">
                  {
                     this.state.data.others.map((o) => (
                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center" key={o.id}>
                           <img src={require(`../../static/images/${o.img}`)} alt={o.title} className="img-lang mb-4" />
                           <h6 className="mb-0">{o.title}</h6>
                           <p className="exp">{o.exp}</p>
                        </div>
                     ))
                  }
               </div>

            </article>
         </section>
      )
   }
}

export default AboutMe;