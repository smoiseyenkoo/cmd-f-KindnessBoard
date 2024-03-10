import React from 'react';
import boardimg from './Board.png'
import BoardToMapButton from '../../components/IconButton.js';
import Stickies from '../../components/Stickies.js'; // Adjust the import path as necessary
import { useState } from 'react';


import { useNavigate } from 'react-router-dom';
import GenericButton from '../../components/GenericButton.js';

// import '../';
function Board() {

    const [stickies, setStickies] = useState([]);

    const addSticky = () => {
        // Assuming the board size is 800x600 for example
        const maxX = 800 - 100; // Assuming sticky notes are 100px wide
        const maxY = 600 - 100; // Assuming sticky notes are 100px tall
        const newSticky = {
          id: stickies.length,
          x: Math.random() * maxX,
          y: Math.random() * maxY,
        };
        setStickies([...stickies, newSticky]);
      };

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/map'); // Navigate to the map component
      };

    return (

    <div style={{
            display: 'flex',
            flexDirection: 'column', // Stack children vertically
            justifyContent: 'center', // Center children vertically
            alignItems: 'center', // Center children horizontally
            height: '100vh',
            backgroundColor: '#c26b2d',
            position: 'relative', // Needed for absolute positioning of children
        }}>
            <BoardToMapButton onClick={handleClick} label="click to find more boards near you" color="#efbbf0" />
            <GenericButton onClick={addSticky} label="click to add a new sticky" color="#fac8f2" />

            {stickies.map((sticky) => (
                <Stickies key={sticky.id} /> // Assuming each sticky is identical for simplicity
         ))}

            

            <img src={boardimg} alt="Board" style={{
                maxWidth: '80%', // Limits the image size, adjust as needed
                maxHeight: '80vh', // Limits the image height, keeping it from touching the top
                objectFit: 'contain', // Keeps the image aspect ratio
            }} />
            <div style={{
                position: 'absolute', // Overlay the text
                color: 'white', // Ensures text is visible
                fontSize: '24px', // Adjust as needed
            }}>
                <Stickies /> {/* This renders the sticky note on the board */}
                This is the board page
            </div>
        </div>
    );
}

export default Board;