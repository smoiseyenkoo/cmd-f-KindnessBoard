import React from 'react';
import HomeToBoardButton from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/board'); // Navigate to the Board component
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