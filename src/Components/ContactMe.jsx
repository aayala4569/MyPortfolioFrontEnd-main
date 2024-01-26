import React, { useState, useRef } from 'react';
import { Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";



//service_soh3zff
//template_3b18d4h
//utIHoZSY7A541Q5v8

const ContactMe = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const formREF = useRef()


const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send("service_soh3zff", "template_3b18d4h",{
    from_name: formData.name, 
    to_name: "Angelica", 
    from_email: formData.email, 
    to_email: "angelicaayala100@gmail.com", 
    message: formData.message}, 
    "utIHoZSY7A541Q5v8")


  .then(() => alert('Thank you! I will be in contact soon.'),
  setFormData({
    name: "",
    email: "",
    message: "",
  }),
  (error) => {
    setLoading(false);
    console.log(error, 'We have an error')
    alert("Something went wrong. Please try again.")
  })
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Row className='contact'>
        <Col md={12} lg={10}>
          <h3 className=" font my-5" id="ContactMe">Contact Me</h3>
          <Form onSubmit={handleSubmit} ref={formREF} className='contact-form'>
            
            
            
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                
                style={{ width: '200%', fontSize: '20px', padding: '15px', marginBottom: '10px' }}
                required
              />
            </Form.Group>



            <Form.Group controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                style={{ width: '200%', fontSize: '20px', padding: '10px', marginBottom: '10px' }}
                required
              />
            </Form.Group>



            <Form.Group controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={6}
                placeholder='Enter your message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                style={{ width: '200%', fontSize: '20px', padding: '10px', marginBottom: '100px'}}
                
                required
              />
            </Form.Group>

            <Button variant='primary' type='submit'>{loading ? "Sending......" : "Send"}
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactMe;


















