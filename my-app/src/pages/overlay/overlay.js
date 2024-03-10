import React from 'react';
import BigSticky from '../bigSticky/bigSticky';

const Overlay = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <BigSticky />
      <button onClick={onClose} style={{ position: 'fixed', top: 20, right: 20 }}>Close</button>
    </div>
  );
};

export default Overlay;
