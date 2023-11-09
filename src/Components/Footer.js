import React from 'react';
import { Card } from 'react-bootstrap';


function Footer() {
  return (
    <div className='footer-container'>
        <br></br>
        <Card className="text-center" style={{backgroundColor:"#280003"
    , borderRadius:0}}>
      <Card.Footer className="text-white"style={{fontSize: '16px'}}>@2023 Tabitha Luvuno. All rights reserved.</Card.Footer >
    </Card>
      
    </div>
  )
}

export default Footer
