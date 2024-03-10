import React, { useEffect } from 'react';
import boardimg from './Board.png'
import BoardToMapButton from '../../components/IconButton.js';
import StickyButton from '../../components/StickyButton.js';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import BigSticky from '../bigSticky/bigSticky.js';

import { useNavigate } from 'react-router-dom';
import GenericButton from '../../components/GenericButton.js';

function Board() {

    const [stickies, setStickies] = useState([]);

    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState("");

    const [currentId, setCurrentId] = useState();


    useEffect(() => {
        console.log(message);
        setStickies(stickies.map((sticky) => {
            if (sticky.id === currentId) { return { id: sticky.id, x: sticky.x, y: sticky.y, text: message } }
            else { return sticky }
        }))
    }, [message]);

    const handleOpen = (id) => {
        setOpen(true);
        setCurrentId(id);
        setMessage(stickies[id].text);
        console.log("called handle open")
    }
    const handleClose = () => {
        setOpen(false);
    }




    const addSticky = () => {
        const maxX = 800;
        const maxY = 500;
        const newSticky = {
            id: stickies.length,
            x: Math.random() * maxX + 190,
            y: Math.random() * maxY + 150,
            text: "..."
        };

        setStickies(stickies => [...stickies, newSticky]);
        console.log(stickies)
    };

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/map');
    };

    const handleHome = () => {
        navigate('/');
    };

    const boardStyle = {
        backgroundColor: '#c2dbec',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cpath d='M50 30 Q25 0, 0 30 Q0 60, 50 100 Q100 60, 100 30 Q75 0, 50 30z' fill='%23ff69b4'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
        color: 'white',
      };

    return (

        <div style={boardStyle}>

            <h1 className='community-board'>
                leave a nice message on the board :)
            </h1>



            <div style={{ position: 'absolute', top: 0, left: 0, margin: '10px' }}>
                <BoardToMapButton onClick={handleClick} label="click to find more boards near you" color="#efbbf0" />
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                <GenericButton onClick={addSticky} label="click to add a new sticky" color="#fac8f2" />
            </div>
            <div style={{ position: 'absolute', top: 50, right: 0, margin: '10px' }}>
                <GenericButton onClick={handleHome} label="home" color="#fac8f2" />
            </div>

            {stickies.map((sticky) => (
                <StickyButton onClick={() => handleOpen(sticky.id)}
                    style={{ left: sticky.x + 'px', top: sticky.y + 'px' }}
                />

            ))}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <BigSticky handleClose={handleClose} setMessage={setMessage} message={message} />

                </div>
            </Modal>



            <img src={boardimg} alt="Board" style={{
                maxWidth: '80%',
                maxHeight: '80vh',
                objectFit: 'contain',
            }} />
            <div style={{
                position: 'absolute', 
                color: 'white',
                fontSize: '24px',
            }}>
            </div>
        </div>
    );
}

export default Board;