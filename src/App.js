import './App.css';
import React,{useState,useEffect} from 'react';
import JewelCard from './Components/JewelCard';
import JewelForm from './Components/JewelForm';

function App() {
  const[jewelry, setJewelry] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/jewelry")
    .then((res) => res.json())
    .then((data) => setJewelry(data))
  },[])


  return (
    <div className="App">
      <br></br>
      <JewelForm/>
      
      <br></br>
      <JewelCard jewelry={jewelry}/>

      
    </div>
  );
}

export default App;
