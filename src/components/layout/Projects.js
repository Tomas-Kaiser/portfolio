import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class Projects extends Component {
   render() {
      const projects = [
         {
            name: "eCommerce",
            img: "Django_project",
            technologies: ["HTML5, CSS3", "Python - Django", "JavaScript", "SQLite", "Stripe, AWS S3", "Bootstrap"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-4-Full-Stack-App-Ecommerce",
            link: "https://django-ecommerce-milestone.herokuapp.com/",
         },
         {
            name: "Cook Book",
            img: "Flask_project",
            technologies: ["HTML5, CSS3", "Python - Flask", "noSQL - MongoDB", "JavaScript", "Materialize"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-3-Data-Centric-Dev-Python-Flask",
            link: "https://cookbook-flask-mongo.herokuapp.com/",
         },
         {
            name: "Visiting Capital Cities in Europe",
            img: "js_project",
            technologies: ["HTML5, CSS3 (Sass)", "JS - jQuery", "AJAX", "REST API (Foursquer API)"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-2-Interactive-Frontend-Development",
            link: "https://tomas-kaiser.github.io/Code-Institute-Milestone-2-Interactive-Frontend-Development/",
         },
         {
            name: "Dublin Guide",
            img: "Bootstrap_project",
            technologies: ["HTML5", "CSS3", "Bootstrap"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-1-User-Centric-Frontend",
            link: "https://tomas-kaiser.github.io/Code-Institute-Milestone-1-User-Centric-Frontend/",
         },
         {
            name: "Neighborhood MAP",
            img: "ReactJS_Neigberhood_project",
            technologies: ["HTML5", "CSS3", "ReactJS", "Unsplash REST API"],
            github: "https://github.com/Tomas-Kaiser/Neigborhood-MAP-reactJS-FEND-UDACITY",
            link: "https://neigbrohood-map-react.herokuapp.com/",
         }
      ];

      return (
         <section id="projects" className="container container-projects fade">
            <h2>Projects</h2>
            <div className="row">
               {
                  projects.map((project, index) => (
                     <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch" key={index}>
                        <div className="card" style={cardStyle}>
                           <a href={project.link} target="_blank" rel="noopener noreferrer">
                           <img src={require(`../../static/images/${project.img}.png`)} className="card-img-top" alt={project.img} />
                           </a>   
                           <div className="card-body d-flex flex-column">
                              <h5 className="card-title text-center">{project.name}</h5>
                              <hr />
                              <ul>
                                 {project.technologies.map((tech, index) => (
                                    <li className="card-text" key={index}>{tech}</li>
                                 ))}
                              </ul>
                              <div className="text-center card-footer mt-auto">
                                 <a href={project.github} style={iconStyle} target="_blank" rel="noopener noreferrer"
                                 data-toggle="tooltip" data-placement="top" title="Repo on GitHub"
                                 >
                                    <FontAwesomeIcon icon={faGithub} />
                                 </a>
                                 <a href={project.link} style={iconStyle} target="_blank" rel="noopener noreferrer"
                                 data-toggle="tooltip" data-placement="top" title="Live version"
                                 >
                                    <FontAwesomeIcon icon={faGlobe} />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>
      )
   }
}

const cardStyle = {
   width: '18rem',
   margin: '10px auto',
};

const iconStyle = {
   fontSize: '25px',
   margin:  '10px',
   color: 'rgb(50, 135, 70)',
};

export default Projects;
