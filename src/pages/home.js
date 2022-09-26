import React from 'react';
import "../css/home.css";
import imageprofile from "../images/imageprofile.png";

const home = () => {
  return (

  
    
    <div>
     
        <div className='container '>
          <div className='row text-center hero-section'>
            <div className='col-sm hero-text'>Hi i am a Front end Developer</div>
            <div className='col-sm'><img className='image-profile' src={imageprofile}></img></div>
          </div>
        </div>
    

         {/* ==========cards============ */}

    <div className='container'>
    <div class="card-group mt-5 gap-5">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Web Design</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Photo Editing</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Web Application</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>



        </div>
        </div>
  )
}

export default home
