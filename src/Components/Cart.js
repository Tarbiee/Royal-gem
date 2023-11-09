import React,{useState} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';


function Cart({cartItem, handleDelete, total,handlePurchase}) {
     
  return (
    <Container style={{padding: 'irem'}}>
    <div>
      <br></br>
      <br></br>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Sub-Price</th>
          <td>Action</td>
          
          
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
            <td onClick={() => handleDelete(item.id)}>
            <FontAwesomeIcon icon={faTrashCan}/>
            </td>
          
        </tr>
        ))}
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Price</td>
            <td>{total}</td>
            <td colSpan="2">
                <Button variant="success" style={{backgroundColor:"#280003"}}className="float-end" onClick={handlePurchase}>
                  Purchase
                </Button>
              </td>
        </tr>
       
        
        
      </tbody>
    </Table>

        
      
    </div>
    </Container>
  )
}

export default Cart;


