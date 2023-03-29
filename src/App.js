import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';
function App() {
  
  useEffect(()=>{
    try{
      fetch("http://localhost:1337/api/reviews")
     .then(res=>res.json())
     .then(res=>console.log(res))
    }
    catch(e){
      console.log(e)
    }
  },[])
  return (
    <div className="App">
           <Layout/>
          
    </div>
  );
}
export default App;
