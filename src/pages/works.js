import React from 'react';
import Kodekid from "../images/kodekid1.png"
import Nolimit from "../images/Nolimit1.png"
import Charmingpets from "../images/charmingpets1.png"
import "../css/works.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from "react";
import { Tabtitle } from '../components/GeneralFunctions';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';




const works = () => {
  Tabtitle('Projects | JLB');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({duration: 1000 });
  }, []);
  

  return (

    <div className='container'>
      <h1 className='proj '>Projects</h1>
      
     <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Kodekid}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>KODE KID</MDBCardTitle>
            <MDBCardText>
            Ultimate guide for kids who want to learn basic HTML and CSS.
            
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
          <button type="button" class="btn btn-outline-primary">Repo</button>
          <button type="button" class="btn btn-outline-primary ">Demo</button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Nolimit}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>NO LIMIT</MDBCardTitle>
            <MDBCardText>
            Fitness website and guide for healty enthusiast
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
          <button type="button" class="btn btn-outline-primary">Repo</button>
          <button type="button" class="btn btn-outline-primary ">Demo</button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Charmingpets}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>CHARMING PETS</MDBCardTitle>
            <MDBCardText>
            Charming Pets is a pet training class and adoption website
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
          <button type="button" class="btn btn-outline-primary">Repo</button>
          <button type="button" class="btn btn-outline-primary ">Demo</button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
    
    
    
    
    
    </div>

  )
}

export default works
