import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/contact.css"
import React from 'react';

export const contact = () => {
  const form = useRef();
  const paulene = useRef();
  const nicca = useRef();
  const kevin = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_w09xyou', 'template_4cbm2zi', form.current, 'kPjnHYK4WJes-ymmd')
      .then((result) => {
          paulene.current.value = ""
          kevin.current.value = ""
          nicca.current.value = ""
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

<div className='container'>
      <h1 className='contact-me mt-5'>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="input" >Name</label>
      <input type="text"  name="user_name" ref={paulene} class="form-control" id="inputName" placeholder="Name" />
    </div>
    <div class="form-group col-md-6">
      <label for="input">Email Address</label>
      <input type="email" name="user_email" ref={nicca} class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="exampleFormControlTextarea1">Message </label>
    <textarea class="form-control"  ref={kevin} name="message" id="textarea" placeholder="Message"> </textarea>
  </div>
  <button type="submit" class="btn btn-outline-primary mt-5">Submit</button>
  </form>
  

  </div>


   

  );
};
export default contact