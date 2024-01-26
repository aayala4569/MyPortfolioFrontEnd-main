import React, {useState, useEffect} from 'react';
import NavBar from "./Components/NavBar";
import { Container, Row, Col, Image} from "react-bootstrap";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import ContactMe from "./Components/ContactMe";
import './App.css';
import MyFace from './Images/MyImage.png';



function App() {
  


  return (
   
<Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <NavBar />
        </Col>
      </Row>

      <div>
       
        <Row>
          <Col xs={12} md={8} className="d-flex justify-content-start ">
             <h2 className="overlay-text rounded-3" >Creative Developer</h2>
          </Col>
        </Row>
       
        <Row className="d-flex justify-content-end">
          <div className="image-container MyImage">
             <Image src={MyFace} rounded/>
           

          </div>
        </Row>
       
      </div>


      <Row>
        <Col>
          <AboutMe/>
          <Skills/>
          <Portfolio/>
          <ContactMe/>
        </Col>
      </Row>
    </Container>

  
        
   
  
  );
}

export default App;
