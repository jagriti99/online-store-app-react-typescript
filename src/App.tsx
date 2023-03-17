import React from 'react';
import StoreNavbar from './app/components/StoreNavbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Cart} from "./app/components/Cart";
import {List} from "./app/components/List";


import './App.css';

function App() {
  return (
    <div className="App">
     <StoreNavbar/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
