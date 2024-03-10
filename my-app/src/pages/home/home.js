import React from 'react';
import HomeToBoardButton from '../../components/Button';


function Home() {
    const handleClick = () => {
        console.log('CustomButton clicked!');
        // You can perform any desired action here
      };
    return(

        
        <header className="App-header">

            <p>
            Welcome To The Community Board
            </p>
            <HomeToBoardButton onClick={handleClick} label="Click Me To Find Community Boards Near You" color="#efbbf0" />
        </header>
    );
}

export default Home;