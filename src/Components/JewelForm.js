import React,{useState} from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function JewelForm() {
    const[input, setInput]= useState({
        name:'',
        image:'',
        description:'',
        material:'',
        price:''
    })

    const handleInput = (e)=>{
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value
        });

    }

    function addJewelry(e){
        e.preventDefault();
        console.log("add jewelry")


    }


  return (
    <div>
        <div>
            <div className='form'>
            <FloatingLabel label="Name" className='mb-5'>
             <Form.Control type="text"
             name='name'
             onChange={handleInput}
             value={input.name}
             placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel label="Image Url" className='mb-5'>
             <Form.Control type="text"
             name='image'
             onChange={handleInput}
             value={input.image}
             placeholder="ImageUrl" />
            </FloatingLabel>
            <FloatingLabel  label="Description" className='mb-5'>
             <Form.Control type="text"
             name='description' 
             onChange={handleInput}
             value={input.description}
             placeholder="Category" />
            </FloatingLabel>
            <FloatingLabel  label="Material" className='mb-5'>
             <Form.Control type="text"
             name='material'
             onChange={handleInput} 
             value={input.material}
             placeholder="Material" />
            </FloatingLabel>
            <FloatingLabel  label="Price" className='mb-5'>
             <Form.Control type="text"
             name='price' 
             onChange={handleInput}
             value={input.price}
             placeholder="Price" />
            </FloatingLabel>
            <Button variant="secondary" onClick={addJewelry}>Add Jewelry</Button>
               

            </div>
            </div>
        
      
    </div>
  )
}

export default JewelForm;
