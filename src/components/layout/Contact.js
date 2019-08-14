import React from 'react';

function Contact() {
   return (
      <section className="container contact">
         <h2>Contact me</h2>

         <form>
            <div class="form-group">
               <label for="exampleFormControlInput1">Your name</label>
               <input type="text" class="form-control" id="nameInput" placeholder="Tomas" />
            </div>

            <div class="form-group">
               <label for="exampleFormControlInput1">Email address</label>
               <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
            </div>

            <div class="form-group">
               <label for="exampleFormControlTextarea1">Write me a message</label>
               <textarea class="form-control" id="textAre" rows="3" >Hi Tomas, </textarea>
            </div>
         </form>
      </section>
   )
}

export default Contact;