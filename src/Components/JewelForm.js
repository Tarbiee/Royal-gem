import React,{useState} from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap';


function JewelForm() {
  return (
    <div>
        <div>
            <div className='form'>
            <FloatingLabel label="Name" className='mb-5'>
             <Form.Control type="text"
             name='name'
             placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel label="Image Url" className='mb-5'>
             <Form.Control type="text"
             name='image'
             placeholder="ImageUrl" />
            </FloatingLabel>
            <FloatingLabel  label="Description" className='mb-5'>
             <Form.Control type="text"
             name='description' 
             placeholder="Category" />
            </FloatingLabel>
            <FloatingLabel  label="Material" className='mb-5'>
             <Form.Control type="text"
             name='material' 
             placeholder="Material" />
            </FloatingLabel>
            <FloatingLabel  label="Price" className='mb-5'>
             <Form.Control type="text"
             name='price' 
             placeholder="Price" />
            </FloatingLabel>
            <Button variant="secondary">Add Jewelry</Button>
               

            </div>
            </div>
        
      
    </div>
  )
}

export default JewelForm;
