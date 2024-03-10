import Home from './pages/home/home.js';
import Map from './pages/map/map-deprecated.js';
import Board from './pages/board/board.js';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BigSticky from './pages/bigSticky/bigSticky.js';
import Overlay from './pages/overlay/overlay.js';



function App() {

  const [showOverlay, setShowOverlay] = useState(false);


  return (

    
    <BrowserRouter>
     {/* {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Board onShowOverlay={() => setShowOverlay(true)} />} /> */}
        <Route path="/board" element={<Board />} />
        <Route path="/map" element={<Map />} />
        <Route path="/bigSticky" element={<BigSticky />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

