// Button.js
import React from 'react';
import Button from '@mui/material/Button';

const HomeToBoardButton = ({ onClick, label, color }) => {
  return (
    <Button variant="contained" style={{ backgroundColor: color }} onClick={onClick}>
      {label}
    </Button>
  );
};

export default HomeToBoardButton;
