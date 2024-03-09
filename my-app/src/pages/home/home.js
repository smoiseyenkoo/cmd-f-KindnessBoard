import React from 'react';

function Home() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Welcome To The Community Board
            </p>
            <HomeToBoardButton onClick={handleClick} label="Click Me To Find Community Boards Near You" />
        </header>
    );
}