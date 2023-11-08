import React from 'react';
import { Card } from 'react-bootstrap';

function JewelCard({jewelry}) {
  return (
    <div>
        {jewelry.map(jewel => (
        <Card style={{ width: '18rem' }} key={jewel.id}>
      <Card.Img variant="top" src={jewel.image} />
      <Card.Body>
        <Card.Title>{jewel.name}</Card.Title>
        <Card.Text>{jewel.description}</Card.Text>
        <Card.Text>{jewel.material}</Card.Text>
        <Card.Text>{jewel.price}</Card.Text>
      </Card.Body>
    </Card>
    ))}
    

      
    </div>
  )
}

export default JewelCard
