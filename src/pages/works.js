import React from 'react';
import Kodekid from "../images/kodekid1.png"
import Nolimit from "../images/Nolimit1.png"
import Charmingpets from "../images/charmingpets1.png"
import "../css/works.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





const works = () => {

  

  return (

    <div className='container'>
      <h1 className='proj'>Projects</h1>
      <div className="row">
      <div class="card-group  ">
  <div class="card  shadow" >
    <img class="card-img-top" src={Kodekid} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title ">KODE KID</h5>
      <p class="card-text ">Ultimate guid for kids who want to learn basic HTML and CSS.</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>BOOTSTRAP</li>
      </ul>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card shadow" >
    <img class="card-img-top" src={Nolimit} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title ">NO LIMIT</h5>
      <p class="card-text ">Fitness website and guide </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>BOOTSTRAP</li>
        <li>JAVASCRIPT</li>
        <li>API</li>
      </ul>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card shadow" >
    <img class="card-img-top" src={Charmingpets} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title ">CHARMING PETS</h5>
      <p class="card-text ">Charming Pets is a pet training class and adoption website.</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>BOOTSTRAP</li>
        <li>JAVASCRIPT</li>
        <li>LARAVEL</li>
        <li>MY SQL</li>
        
      </ul>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
      </div>

    </div>


  )
}

export default works
