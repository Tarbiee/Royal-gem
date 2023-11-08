import React,{useState} from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap';


function JewelForm() {
    const[input, setInput]= useState({
        name:'',
        image:'',
        description:'',
        material:'',
        price:''
    })
  return (
    <div>
        <div>
            <div className='form'>
            <FloatingLabel label="Name" className='mb-5'>
             <Form.Control type="text"
             name='name'
             onChange={handleInput}
             placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel label="Image Url" className='mb-5'>
             <Form.Control type="text"
             name='image'
             onChange={handleInput}
             placeholder="ImageUrl" />
            </FloatingLabel>
            <FloatingLabel  label="Description" className='mb-5'>
             <Form.Control type="text"
             name='description' 
             onChange={handleInput}
             placeholder="Category" />
            </FloatingLabel>
            <FloatingLabel  label="Material" className='mb-5'>
             <Form.Control type="text"
             name='material'
             onChange={handleInput} 
             placeholder="Material" />
            </FloatingLabel>
            <FloatingLabel  label="Price" className='mb-5'>
             <Form.Control type="text"
             name='price' 
             onChange={handleInput}
             placeholder="Price" />
            </FloatingLabel>
            <Button variant="secondary">Add Jewelry</Button>
               

            </div>
            </div>
        
      
    </div>
  )
}

export default JewelForm;
