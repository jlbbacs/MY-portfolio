import React from 'react'
import mylogo from "../images/logo.svg";
import "../css/nav.css";
import { Link } from 'react-router-dom';
const nav = () => {
  return (
  
   
   <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
    <div className="container" id='nav-container'>
    <a className="navbar-brand" href="#">  <Link to="/"><img className='my-logo' src={mylogo} alt="logo ..." fluid /></Link></a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Abouts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/works">Works</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default nav
