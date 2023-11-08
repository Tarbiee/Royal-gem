import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  
  useEffect(() => {
    fetch("http://localhost:3000/jewelry")
    .then((res) => res.json())
    .then((data) => console.log(data))
  },[])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
