// Button.js
import React from 'react';
import Button from '@mui/material/Button';

const HomeToBoardButton = ({ onClick, label }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default HomeToBoardButton;
