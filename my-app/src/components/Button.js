// Button.js
import React from 'react';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import cloud from './cloud.png'

const HomeToBoardButton = ({ onClick, label }) => {
  return (
    <IconButton onClick={onClick} aria-label={label}>
      <img src={cloud} alt={label} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </IconButton>
  );
};

export default HomeToBoardButton;
