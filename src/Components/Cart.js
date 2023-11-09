import React from 'react';
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function Cart({cartItem}) {
    const calculateSubtotal = (item) => item.price * item.quantity;

    const total = cartItem.reduce((acc, item) => acc + calculateSubtotal(item), 0);
  return (
    <Container style={{padding: 'irem'}}>
    <div>
      <br></br>
      <br></br>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Sub-Price</th>
          
        </tr>
      </thead>
      <tbody>
      {cartItem.map((item,index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td> <img src={item.image} alt={item.name} style={{width:'100px', maxHeight:'70px'}}/></td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{item.price*item.quantity}</td>
        </tr>
        ))}
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Price</td>
            <td>{total}</td>
        </tr>
        
        
      </tbody>
    </Table>

        
      
    </div>
    </Container>
  )
}

export default Cart;


