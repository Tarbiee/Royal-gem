import React,{useRef, useEffect} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'


function JewelCard({ jewelry , addToCart}) {

  const navigate = useNavigate();
  const newJewelRef = useRef(null);

  useEffect(() => {
    if (newJewelRef.current) {
      newJewelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [jewelry]);

  const handleAddToCart = (jewel) => {
    addToCart(jewel);
    navigate('/cart'); // Redirect to the cart page after adding to the cart
  };



    
    
  return (
    <Container style={{padding: 'irem'}}>
      <br></br>
      <br></br>
        <Row >
      {jewelry.map((jewel) => (
        <Col key={jewel.id} xs={6} sm={6} md={3} lg={3}>
          <Card 
           ref={(ref) => {
            if (jewel.id === jewelry[jewelry.length - 1].id) {
              newJewelRef.current = ref;
            }
          }}
          style={{ marginBottom: '1rem', height: '23rem' }}>
            <Card.Img variant="top" src={jewel.image} style={{height: '9rem'}}/>
            <Card.Body>
              <Card.Title>{jewel.name}</Card.Title>
              <Card.Text>{jewel.description}</Card.Text>
              <Card.Text>{jewel.material}</Card.Text>
              <Card.Text>{jewel.price}</Card.Text>
             </Card.Body>
            <span title='Add-to-cart' onClick={() => handleAddToCart(jewel)} >
              <FontAwesomeIcon icon={faCartShopping} style={{marginBottom: '1rem'}}/>
              </span>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
    
    
}

export default JewelCard;
