import React from 'react';
import avatar from '../../static/images/avatar.jpg'

function Header() {
   return (
      <header id="home" className="container-fluid callout d-md-flex justify-content-md-center align-items-md-center">
         <div className="row">
            <div className="col-12">
               <div className="img-avatar">
                  <img src={avatar} alt="avatar"></img>
               </div>
            </div>
            <div className="col-12">
               <div className="jumbotron">
                  <h1 className="text-center">Tomas Kaiser</h1>
                  <p className="text-center text-white text-uppercase">Full Stack Software Developer</p>
                  <div className="text-center">
                     <a href="#contact" className="btn btn-success my-auto">Hire me</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;