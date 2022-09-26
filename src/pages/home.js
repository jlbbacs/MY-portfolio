import React from 'react';
import "../css/home.css";

const home = () => {
  return (
    <div>
     
        <div className='container'>
          <div className='row text-center border'>
            <div className='col-sm'><h2>Hi i am a Front-end Developer</h2></div>
            <div className='col-sm'><h2>test</h2></div>
          </div>

        {/* ==========cards============ */}


  

    </div>
    <div className='container'>
    <div class="card-group mt-5 gap-5">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
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
