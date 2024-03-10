import React from 'react';
import Button from '@mui/material/Button';

const GenericButton = ({ onClick, label, color }) => {
    return (
        <Button
          onClick={onClick}
          aria-label={label}
          variant="contained"
          sx={{ backgroundColor: color, '&:hover': { backgroundColor: color, opacity: 0.9 } }}
        >
          {label}
        </Button>
    
      );
    };
  
  export default GenericButton;
