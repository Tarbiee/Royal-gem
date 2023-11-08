import React from 'react'

function Cart({cartItem}) {
  return (
    <div>
        <h1>Cart</h1>
      {cartItem.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
          {/* Render other item details here */}
        </div>
      ))}
      
    </div>
  )
}

export default Cart
