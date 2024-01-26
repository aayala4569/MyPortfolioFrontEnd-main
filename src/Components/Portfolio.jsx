import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Button } from 'react-bootstrap';
import clock from '../Images/clock.png';
import Game from '../Images/Game.png';
import Weather from '../Images/Weather.png'



const Portfolio = () => {
  const numCards = 6; // Adjust the number of cards as needed
  const circleRadius = 150; // Adjust the radius of the circle as needed
  const angleIncrement = (2 * Math.PI) / numCards;

  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const getCardPosition = (index) => {
    const zIndex = index === selectedCard ? 1 : 0;
        const isSelected = index === selectedCard;
        const angle = index * angleIncrement + (isSelected ? -rotationAngle : rotationAngle);
 const x = circleRadius * Math.cos(angle);
    const y = circleRadius * Math.sin(angle);
  
    return { transform: `translate(${x}px, ${y}px)`, zIndex: zIndex };

  };
 
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedCard === null) {
      setRotationAngle((prevAngle) => prevAngle + 0.05); // Adjust the rotation speed as needed
  }}, 50); // Adjust the interval as needed

 

    return () => clearInterval(intervalId);
  }, [selectedCard]); // Run this effect only once on component mount

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

 
  return (
    <div className='projects'>
        <Row>
            <Col className='portfolio'>
            <h3 className="font" id="Projects">Projects</h3>
            </Col>
        </Row>
       
     <Row>
      <div className="CardBody" style={{ display: 'flex', justifyContent: 'center'}}>
            <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={() => setSelectedCard(index)}>
              <Card.Img variant="top" src={clock} />
              <Card.Body>
                <Card.Title>
                  <p>
                  Unity Clock
                  </p>
                </Card.Title>
                <Card.Text>
                  <p>
                  Clock designed in Unity with day and night mode.
                  </p>
                </Card.Text>
                <Button variant="primary" onClick={() => window.open('https://play.unity.com/p/clockproject/edit')}>Open Clock</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={() => setSelectedCard(index)}>
              <Card.Img variant="top" src={Game} alt='Games' />
              <Card.Body>
                <Card.Title><p>
                  Video Game
                  </p></Card.Title>
                <Card.Text><p>Find your favorite video game.</p></Card.Text>
                <Button variant="primary" onClick={() => window.open('https://jolly-island-0035bc31e.3.azurestaticapps.net')}>Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={() => setSelectedCard(index)}>
              <Card.Img variant="top" src={Weather} alt='weather' />
              <Card.Body>
                <Card.Title><p>
                  Weather App
                  </p></Card.Title>
                <Card.Text><p>Check today's weather.</p></Card.Text>
                <Button variant="primary" onClick={() => window.open('https://lemon-mud-0b40a301e.4.azurestaticapps.net/')}>Go somewhere</Button>
              </Card.Body>
            </Card>
           
          </div>
     </Row>
          
      
    </div>
  );}


export default Portfolio
