import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Home from './pages/home/home.js'
import './App.css';

import HomeToBoardButton from './components/Button.js'; // Make sure to adjust the import path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
