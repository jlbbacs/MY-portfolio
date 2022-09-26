import React from 'react';
import "../css/home.css";
import Typewriter from 'typewriter-effect/dist/core';

const home = () => {
  return (

  
    
    <div>
     
        <div className='container '>
          <div className='row text-center hero-section'>
            <div className='col-sm hero-text'>Hi i am a Front end Developer</div>
            <div className='col-sm'><h2>Image Here!</h2></div>
          </div>
        </div>
    

         {/* ==========cards============ */}

    <div className='container'>
    <div class="card-group mt-5 gap-5">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Web Design</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Photo Editing</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Web Application</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>



        </div>
        </div>
  )
}

export default home
