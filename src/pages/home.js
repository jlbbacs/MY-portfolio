import React from 'react';
import "../css/home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import imageprofile from "../images/imageprofile.png";

const home = () => {

  useEffect(() => {
    AOS.init({duration: 1000 });
  }, []);


  
  return (

  
    
    <div>
     
        <div className='container '>
          <div className='row text-center hero-section'>
            <div className="col-sm hero-text" id='hero'><h4 className='hello' data-aos="fade-right">Hello my name is </h4><span><h1 className='myname' data-aos="fade-left"> JOSEPH LESTER BACSARSA</h1> </span>
            <h4 className='developer' data-aos="fade-up">And  i'm a Front-end Developer</h4>
             </div>

            <div className='col-sm'><img className='image-profile' src={imageprofile}></img ></div>
          </div>
        </div>
    

      

    
        </div>
  )
}

export default home
