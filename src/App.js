import './App.css';
import React,{useState,useEffect} from 'react';
import JewelCard from './Components/JewelCard';
import JewelForm from './Components/JewelForm';
import Cart from './Components/Cart';

function App() {
  const[jewelry, setJewelry] = useState([])
  const[cartItem, setCartItem]= useState([]);

    function addToCart(jewel){
        setCartItem([...cartItem, jewel])
    }
  
  useEffect(() => {
    fetch("http://localhost:3000/jewelry")
    .then((res) => res.json())
    .then((data) => setJewelry(data))
  },[])

  function handleAddJewel(newJewelry){
    setJewelry([...jewelry, newJewelry])
  }






  return (
    <div className="App">
      <br></br>
      <JewelForm handleAddJewel={handleAddJewel}/>
      
      <br></br>
      <JewelCard jewelry={jewelry} addToCart={addToCart}/>

      <br></br>
      <Cart cartItem={cartItem}/>

      
    </div>
  );
}

export default App;
