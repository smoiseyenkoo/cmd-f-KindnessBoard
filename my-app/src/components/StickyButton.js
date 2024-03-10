import React from 'react';
import IconButton from '@mui/material/IconButton';
import YellowSticky from './yellowSticky.png'

const StickyButton = ({ onClick, label, style }) => {
    return (

        <div style={{ ...style, position: 'absolute' }}>
          <IconButton onClick={onClick} aria-label={label}>
            <img src={YellowSticky} alt={label} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          </IconButton>
        </div>
    );
};

export default StickyButton;
