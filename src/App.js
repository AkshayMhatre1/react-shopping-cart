//feature-1
import React,{useState} from "react";
import './App.css';
import jdata from "./data.json";
import Products from "./components/Products";

const App = () => {

  const [data,setData] =useState({products:jdata.products,
  size:"",
  sort:""});

  return (
    <div className="grid-container">
      <header>        
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
          <Products data={data.products}/>  
          </div>
          <div className="sidebar">
          Cart Item
          </div>
        </div>        
      </main>
      <footer>
        All Rights Reserved...
      </footer>
    </div>
  );
}

export default App;
