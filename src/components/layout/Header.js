import React from 'react';
import avatar from '../../static/images/avatar.jpg'

function Header() {
   return (
      <header className="container-fluid callout">
         <div className="row">
            <div className="col-12">
               <div className="img-avatar">
                  <img src={avatar} alt="avatar"></img>
               </div>
            </div>
            <div className="col-12">
               <div className="jumbotron">
                  <h1 className="text-center">Tomas Kaiser</h1>
                  <p className="text-center">Full stack software developer</p>
                  <button className="btn btn-success">Hire me</button>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;