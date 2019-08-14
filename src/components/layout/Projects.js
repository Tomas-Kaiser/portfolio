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
            technologies: ["HTML5", "CSS3", "Python - Django", "SQLite", "JavaScript", "AWS S3"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-4-Full-Stack-App-Ecommerce",
            link: "https://django-ecommerce-milestone.herokuapp.com/",
         },
         {
            name: "Cook Book",
            img: "Flask_project",
            technologies: ["HTML5", "CSS3", "Python - Flask", "noSQL - MongoDB", "JavaScript"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-3-Data-Centric-Dev-Python-Flask",
            link: "https://cookbook-flask-mongo.herokuapp.com/",
         },
         {
            name: "Visiting Capital Cities in Europe",
            img: "js_project",
            technologies: ["HTML5", "CSS3", "JS - jQuery", "REST API"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-2-Interactive-Frontend-Development",
            link: "https://tomas-kaiser.github.io/Code-Institute-Milestone-2-Interactive-Frontend-Development/",
         },
         {
            name: "Dublin Guide",
            img: "Bootstrap_project",
            technologies: ["HTML5", "CSS3", "Bootstrap"],
            github: "https://github.com/Tomas-Kaiser/Code-Institute-Milestone-1-User-Centric-Frontend",
            link: "https://tomas-kaiser.github.io/Code-Institute-Milestone-1-User-Centric-Frontend/",
         }
      ];

      return (
         <section className="container">
            <h2>Projects</h2>
            <div className="row">
               {
                  projects.map((project) => (
                     <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="card" style={cardStyle}>
                           <img src={require(`../../static/images/${project.img}.png`)} className="card-img-top" alt={project.img} />
                           <div className="card-body d-flex flex-column">
                              <h5 className="card-title text-center">{project.name}</h5>
                              <ul>
                                 {project.technologies.map((tech) => (
                                    <li className="card-text">{tech}</li>
                                 ))}
                              </ul>
                              <div className="text-center card-footer mt-auto">
                                 <a href={project.github} style={iconStyle} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                 </a>
                                 <a href={project.link} style={iconStyle} target="_blank" rel="noopener noreferrer">
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
   margin: '5px 5px 15px 5px',
};

const iconStyle = {
   fontSize: '25px',
   margin:  '10px',
};

export default Projects;
