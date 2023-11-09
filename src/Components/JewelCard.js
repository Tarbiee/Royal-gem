import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function JewelCard({ jewelry , addToCart}) {

    
    
  return (
    <Container style={{padding: 'irem'}}>
      <br></br>
      <br></br>
        <Row >
      {jewelry.map((jewel) => (
        <Col key={jewel.id} xs={6} sm={6} md={3} lg={3}>
          <Card style={{ marginBottom: '1rem', height: '23rem' }}>
            <Card.Img variant="top" src={jewel.image} style={{height: '9rem'}}/>
            <Card.Body>
              <Card.Title>{jewel.name}</Card.Title>
              <Card.Text>{jewel.description}</Card.Text>
              <Card.Text>{jewel.material}</Card.Text>
              <Card.Text>{jewel.price}</Card.Text>
             </Card.Body>
            <span title='Add-to-cart' onClick={() => addToCart(jewel)} >
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
