import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import Homepage from"./pages/home";
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
      <Route path="Homepage/" element={<Homepage />} />
      <Route path="Abouts/" element={<Abouts />} />
      <Route path="Contacts/" element={<Contact />} />
      <Route path="Works/" element={<Works />} />
       
      </Routes>
      
    </Router>



    

    );
};
export default App;





