import React from 'react';
import boardimg from './Board.png'
// import '../';
function Board() {
    return (
        <div style={{
            display: 'flex', // Use flexbox to center content
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            height: '100vh', // Full height of the viewport
            backgroundColor: '#c26b2d',
            backgroundImage: `url(${boardimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
            backgroundSize: 'contain', // Change to 'cover' if you want it to fully cover the div
        }}>
            <p>this is the board page</p>
        </div>
    );
}

export default Board;