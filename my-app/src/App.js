import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import HomeToBoardButton from './components/Button.js'; // Make sure to adjust the import path

function App() {
  const handleClick = () => {
    console.log('CustomButton clicked!');
    // You can perform any desired action here
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To The Community Board
        </p>
        <HomeToBoardButton onClick={handleClick} label="Click Me To Find Community Boards Near You" />
      </header>
    </div>
  );
}

export default App;
