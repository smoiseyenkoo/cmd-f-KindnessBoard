import React from 'react';
import boardimg from './Board.png'
import BoardToMapButton from '../../components/RectButton';


import { useNavigate } from 'react-router-dom';


// import '../';
function Board() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/map'); // Navigate to the Map component
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
            <BoardToMapButton onClick={handleClick} label="find more boards near you" color="#f0adcf" />

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
                This is the board page
            </div>
        </div>
    );
}

export default Board;