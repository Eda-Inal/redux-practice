import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Link } from "react-router-dom";


function App() {
  return (
    <div >
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
