import './App.css';
import React,{useState,useEffect} from 'react';
import JewelCard from './Components/JewelCard';
import JewelForm from './Components/JewelForm';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  const[jewelry, setJewelry] = useState([])
  const[cartItem, setCartItem]= useState([]);

    function addToCart(jewel){
      // Check if the item is already in the cart
      const existingItem = cartItem.find((item) => item.item.id === jewel.id )

      if(existingItem){
        existingItem.quantity += 1;
        setCartItem([...cartItem])
      }
      else{
        const newItem ={
      item: jewel,
      quantity: 1,
      name: jewel.name,
      image: jewel.image,
      price: jewel.price,
          };
        setCartItem([...cartItem, newItem])
      }
       
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
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/jewelForm" element={<JewelForm handleAddJewel={handleAddJewel}/>}/>
      <Route path="/jewelCard" element={<JewelCard jewelry={jewelry} addToCart={addToCart}/>}/>
      <Route path="/cart" element={<Cart cartItem={cartItem}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
