import React from 'react';
import GenericButton from '../../components/GenericButton.js';
import YellowSticky from '../../components/yellowSticky.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const BigSticky = () => {
    return (
        <div style={{
            position: 'fixed', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000, 
          }}>

        {/* <div style={{ position: 'absolute', top: 0, left: 0, margin: '10px' }}>
        <BoardToMapButton onClick={handleClick} label="click to find more boards near you" color="#efbbf0" />
        </div> */}

        <img src={YellowSticky} alt="Sticky Note" style={{ width: '50%', height: 'auto' }} />
        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black' }}>
          :)
        </p>
      </div>
    );
  };

export default BigSticky;
