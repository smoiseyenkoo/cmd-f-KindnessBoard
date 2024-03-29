import Home from './pages/home/home.js';
import Map from './pages/map/map.js';
import Board from './pages/board/board.js';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BigSticky from './pages/bigSticky/bigSticky.js';
import Overlay from './pages/overlay/overlay.js';

import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';


function App() {

  return (
    <LoadScript
          googleMapsApiKey="AIzaSyByWfjubELtGoOn1nMQ6e26d95180yn3-w">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/board" element={<Board />} />
              <Route path="/map" element={<Map />} />
              <Route path="/bigSticky" element={<BigSticky />} />
            </Routes>
          </BrowserRouter>
    </LoadScript>
  );
}

export default App;

