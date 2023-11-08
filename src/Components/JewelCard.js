import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function JewelCard({ jewelry }) {
    
  return (
    <Container style={{padding: 'irem'}}> 
        <Row >
      {jewelry.map((jewel) => (
        <Col key={jewel.id} xs={6} sm={6} md={3} lg={3}>
          <Card style={{ marginBottom: '1rem', height: '23rem' }}>
            <Card.Img variant="top" src={jewel.image} style={{height: '10rem'}}/>
            <Card.Body>
              <Card.Title>{jewel.name}</Card.Title>
              <Card.Text>{jewel.description}</Card.Text>
              <Card.Text>{jewel.material}</Card.Text>
              <Card.Text>{jewel.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
    
    
}

export default JewelCard;
