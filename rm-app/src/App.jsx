import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> // BrowserRouter bileşeni eklendi
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes> // Routes bileşeninin yeri doğru
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
