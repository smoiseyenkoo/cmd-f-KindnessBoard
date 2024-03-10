import React from 'react';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // If you're using an icon

const BoardToMapButton = ({ onClick, label, color }) => {
  return (
    <Button
      onClick={onClick}
      aria-label={label}
      variant="contained"
      startIcon={<LocationOnIcon />}
      sx={{ backgroundColor: color, '&:hover': { backgroundColor: color, opacity: 0.9 } }}
    >
      {label}
    </Button>

  );
};

export default BoardToMapButton;