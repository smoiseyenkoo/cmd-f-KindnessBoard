import React from 'react';
import YellowSticky from './yellowSticky.png';


const Stickies = ({ style }) => {
    return (
      <div style={{ ...style, position: 'absolute' }}>
        <img src={YellowSticky} alt="Sticky Note" style={{ width: '100px', height: '100px' }} />
       
      </div>
    );
  };

  export default Stickies;

