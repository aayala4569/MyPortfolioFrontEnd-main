import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import CSS from '../Images/CSS.png';
import Java from '../Images/Java.png';
import HTML from '../Images/HTML.png';
import LogoR from '../Images/LogoR.png';
import BootStrap from '../Images/BootStrap.png';
import Unity from '../Images/Unity.png';


const Skills = () => {
  return (
    <div className="skills">
        <Row>
            <Col className="d-flex justify-content-center space">
            <h3 className="font" id="Skills">Skills</h3>
            </Col>
            </Row>


            <Row>
            <Col className="d-flex justify-content-center">
              <div className="floating-icons-container">
            <Image src={CSS} alt='css' rounded/>
            <Image src={Java} alt='javaScript' rounded/>
            <Image src={HTML} alt='html' rounded/>
           
             </div>
            </Col>
            <Col className="d-flex justify-content-center">
            <div className="floating-icons-container">
              <Image src={LogoR} alt='logo' rounded/>
             <Image src={BootStrap} alt='bootStrap' rounded/>
             <Image src={Unity} alt='unity' rounded/>
            </div>
             
            </Col>
            </Row>  
    </div>
  )
}

export default Skills
