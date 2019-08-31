import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Contact extends Component {
   state = {
      name: "",
      email: "",
      message: "",
      errors: {
         name: "",
         email: "",
         message: ""
      },
      msgSent: "Message was sent"
   }

   onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

   validateMail = () => {
      let errors = {}
      let formIsValid = true

      if (!this.state.name || this.state.name.length < 3) {
         errors.name = 'Minimum 3 symbols'
         formIsValid = false
      }

      if (!this.state.email || this.state.email.length < 3) {
         errors.email = 'Minimum 3 symbols'
         formIsValid = false
      }

      if (!this.state.message || this.state.message.length < 10) {
         errors.message = 'Minimum 10 symbols'
         formIsValid = false
      }

      let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

      if (!pattern.test(this.state.email)) {
         errors.email = 'This is not a valid email'
         formIsValid = false
      }

      this.setState({
         errors: errors
      })

      return formIsValid
   }


   sendMessage = (e) => {
      e.preventDefault();

      if (!this.validateMail()) {
         return
      }

      let alert = document.querySelector(".alert");
      console.log(alert)

      alert.classList.remove("hidden-alert")
      alert.classList.add("show-alert");

      if (alert) {
         setTimeout(function () {
            alert.classList.add("hidden-alert")
            alert.classList.remove("show-alert");
         }, 3000);
      }

      let templateParams = {
         "from_name": this.state.name,
         "from_email": this.state.email,
         "message": this.state.message,
      }

      emailjs.send('tomas_kaiser06_gmail_com', 'portfolio', templateParams, 'user_Hcoo4IL6plrIsER227vg0')

      this.setState({
         name: "",
         email: "",
         message: "",
      })
   }

   render() {
      let warningText = {
         color: 'red',
      }

      let errorMsg = {
         name: "",
         email: "",
         message: "",
      }

      if (this.state.errors.name) {
         errorMsg.name = <div style={warningText}>{this.state.errors.name}</div>
      }

      if (this.state.errors.email) {
         errorMsg.email = <div style={warningText}>{this.state.errors.email}</div>
      }

      if (this.state.errors.message) {
         errorMsg.message = <div style={warningText}>{this.state.errors.message}</div>
      }

      return (
         <section id="contact" className="container container-contact fade">
            <h2>Contact me</h2>
            <form onSubmit={this.sendMessage}>
               <div className="form-group">
                  <label htmlFor="nameInput">Your name</label>
                  {errorMsg.name}
                  <input
                     type="text"
                     name="name"
                     className="form-control"
                     id="nameInput"
                     placeholder="Your name"
                     onChange={this.onChangeInput}
                     value={this.state.name}
                     error={this.state.errors.name}
                     required
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="emailInput">Email address</label>
                  {errorMsg.email}
                  <input
                     type="email"
                     name="email"
                     className="form-control"
                     id="emailInput"
                     placeholder="name@example.com"
                     onChange={this.onChangeInput}
                     value={this.state.email}
                     error={this.state.errors.email}
                     required
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="textAre">Write me a message</label>
                  {errorMsg.message}
                  <textarea
                     className="form-control"
                     name="message"
                     id="textAre"
                     rows="3"
                     onChange={this.onChangeInput}
                     value={this.state.message}
                     error={this.state.errors.message}
                     required
                  >
                     Hi Tomas,
                  </textarea>
               </div>
               <div className="text-center">
                  <input
                     type="submit"
                     value="Submit"
                     className="btn btn-success"
                     style={{ flex: '1' }}
                  />
                  <div className="alert alert-success alert-dismissible mt-3 hidden-alert" role="alert">
                     <button type="button" className="close" data-dismiss="alert">&times;</button>
                     <strong>Success!</strong> {this.state.msgSent}
                  </div>
               </div>
            </form>
         </section>
      )
   }
}
export default Contact;