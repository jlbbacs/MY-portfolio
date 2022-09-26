import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import Home from"./pages/home";
import Abouts from"./pages/about";
import Contact from"./pages/contact";
import Works from"./pages/works";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const App = () => {
    return ( 
     
      <Router>
      <Nav/>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/works" element={<Works />} />
       
      </Routes>
      
    </Router>



    

    );
};
export default App;





