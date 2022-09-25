import React from 'react'
import mylogo from "../images/logo.svg";
import "../css/nav.css";


const nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
<div className="container" id='nav-container'>
    <a className="navbar-brand" href="#"><img className='my-logo' src={mylogo} alt="logo ..." fluid /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Abouts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Works</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default nav
