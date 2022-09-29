import React from 'react';
import "../css/contact.css";

const contact = () => {
  return (
   <div className='container'>
      <h1 className='contact-me mt-5'>Contact Me</h1>
      <form className='form'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="input">Name</label>
      <input type="email" class="form-control" id="inputName" placeholder="Name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email Address</label>
      <input type="password" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="exampleFormControlTextarea1">Message </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"> </textarea>
  </div>
  <button type="button" class="btn btn-outline-primary mt-5">Submit</button>
  </form>
  
  </div>



  )
}

export default contact