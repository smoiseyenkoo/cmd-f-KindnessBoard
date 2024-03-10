import React from 'react';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BoardToMapButton = ({ onClick, label }) => {
    return (
        <div className="button-container">
        <Button onClick={onClick} aria-label={label} variant="contained" startIcon={<LocationOnIcon />}>
          {label}
        </Button>
      </div>
    );
  };
  
  export default BoardToMapButton;
