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
  const[jewelry, setJewelry] = useState([]);
  const[cartItem, setCartItem]= useState([]);
  const [search, setSearch]= useState("")

  const calculateSubtotal = (item) => item.price * item.quantity;
  const total = cartItem.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  function handlePurchase(e){
    e.preventDefault();
    alert(`Thank you for your purchase! Total amount: $${total.toFixed(2)}`);
    setCartItem([])
  }

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
    fetch(`http://localhost:3000/jewelry?q=${search}`)
    .then((res) => res.json())
    .then((data) => setJewelry(data))
  },[search]);

  function handleAddJewel(newJewelry){
    setJewelry([...jewelry, newJewelry])
  }

  function handleDelete(item){
    const jewel = cartItem.filter(jewell => jewell.id !== item)
    setCartItem(jewel)

  }

  function handleSearch(e){
    setSearch(e.target.value)
  }


  return (
    <div className="App">
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/jewelForm" element={<JewelForm handleAddJewel={handleAddJewel}/>}/>
      <Route path="/jewelCard" element={<JewelCard jewelry={jewelry} addToCart={addToCart} handleSearch={handleSearch}/>}/>
      <Route path="/cart" element={<Cart cartItem={cartItem} handleDelete={handleDelete} handlePurchase={handlePurchase} total={total}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
