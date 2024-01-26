import React from "react";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Git from '../Images/Git.png';
import LinkedIn from '../Images/LinkedIn.png';
// "offset-md-6"
const AboutMe = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
<Row>
        <Col  className="aboutMe md-6" id="AboutMe">
          <h3 className="d-flex justify-content-center mb-5 font">
            About me
          </h3>

          <p className="text-center">
            Hello, my name is Angelica Ayala. I am junior web developer sensible
            to front-end and knowledgeable in the back end. I love structure and
            order, I also stand for quality. I am excited to continue refining
            my skills in web programming with your company.
          </p>
        </Col>
 <Row className="d-flex justify-content-center">
      
      
       <Image
            src={LinkedIn}
            rounded
            style={{ width: "100px", height: "auto" }}
            alt="LinkedIn"
          />
      <Image
       src={Git}
            rounded
            style={{ width: "100px", height: "auto" }}
            alt="GitHub"

          /> 
      
      </Row>
      </Row>

      </div>
      
    </div>
  );
};

export default AboutMe;
