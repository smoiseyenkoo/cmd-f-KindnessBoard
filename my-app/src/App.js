import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Home from './pages/home/home.js';
import Map from './pages/map/map.js';
import Board from './pages/board/board.js';
import './App.css';
import React, { useEffect, useState } from 'react'


function App() {

  return (
    <Home />
  );
}

export default App;
