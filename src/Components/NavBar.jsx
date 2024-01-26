import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Row} from 'react-bootstrap';
// import {Link} from 'react-router-dom';





const NavBar = () => {
  // let navigate = useNavigate();
  return (
    <>
<Container>
     <Row id="NavBar" >
      <h3 className="d-flex justify-content-start MyName fixed-top mt-4" >Angelica Ayala</h3>

    </Row>
    </Container>
   
 
<Row >
    <Navbar expand="xxl" className="bg-body-tertiary m-5 NavMargin navbar-transparent" >

    <Container >
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="fixed-top d-flex justify-content-end mt-4 mx-5">
          {/* <Nav.Item as='li'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link as={Link} to='/About'>About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link as={Link} to='/Skills'>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link as={Link} to='/Portfolio'>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link as={Link} to='/Contact'>Contact Me</Nav.Link>
          </Nav.Item> */}
          
          <Nav.Link href="#NavBar">Home</Nav.Link>
          <Nav.Link href="#AboutMe">About Me</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
    </Row>





    </>
  );
};

export default NavBar;

