// Button.js
import React from 'react';
import Button from '@mui/material/Button';
import cloud from './cloud.png'

const HomeToBoardButton = ({ onClick, label, color }) => {
  return (
    <Button variant="contained" style={{ backgroundColor: color }} onClick={onClick}>
      {label}
      <img src={cloud}/>
    </Button>
  );
};

export default HomeToBoardButton;
