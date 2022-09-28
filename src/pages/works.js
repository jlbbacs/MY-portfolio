import React from 'react';
import Kodekid from "../images/kodekid1.png"
import Nolimit from "../images/Nolimit1.png"
import Charmingpets from "../images/charmingpets1.png"
import "../css/works.css";





const works = () => {
  return (

    <div className='container'>
      <div className="row">
      <div class="card-group  ">
  <div class="card  shadow">
    <img class="card-img-top" src={Kodekid} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title text-center">KODE KID</h5>
      <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card shadow">
    <img class="card-img-top" src={Nolimit} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title text-center">NO LIMIT</h5>
      <p class="card-text text-center">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card shadow">
    <img class="card-img-top" src={Charmingpets} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title text-center">CHARMING PETS</h5>
      <p class="card-text text-center">Charming Pets is a pet training class and adoption website. Humanity also needs to show compassion towards animals and this website aims to promote animal welfare and influence people to respect and take care of animals and pets as a member of a family.</p>
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
