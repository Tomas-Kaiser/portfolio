import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
      }
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

      if(!this.validateMail()) {
         return
      }

      let templateParams = {
         "from_name": this.state.name,
         "from_email": this.state.email,
         "message": this.state.message,
      }

      emailjs.send('tomas_kaiser06_gmail_com', 'portfolio', templateParams, 'user_Hcoo4IL6plrIsER227vg0')
      .then(function(response) {
 
         toast.success(`Hi ${templateParams.from_name}, your message has been sent successfully`, {
            position: toast.POSITION.TOP_CENTER
         })
         console.log("SUCCESS", response.status, response.txt)
      }, function(err){
         toast.error(err, 'Error:,', {displayDuration:3000})
         console.log(err)
      })

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
         <section className="container contact">
            <h2>Contact me</h2>
            <ToastContainer />
            <form onSubmit={this.sendMessage}>
               <div className="form-group">
                  <label htmlFor="nameInput">Your name</label>
                     { errorMsg.name }
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
                  { errorMsg.email }
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
                  { errorMsg.message }
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
               <input
                  type="submit"
                  value="Submit"
                  className="btn"
                  style={{ flex: '1' }}
               />
            </form>
         </section>
      )
   }
}
export default Contact;