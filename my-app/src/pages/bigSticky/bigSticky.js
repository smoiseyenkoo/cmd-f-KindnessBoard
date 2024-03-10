import React from 'react';
import GenericButton from '../../components/GenericButton.js';
import YellowSticky from '../../components/yellowSticky.png'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const BigSticky = ({ handleClose, setMessage, message }) => {
    const onChangeHandler = event => {setMessage(event.target.value)};
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>


            <div style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                <GenericButton onClick={handleClose} label="X" color="#fac8f2" />
            </div>

            <img src={YellowSticky} alt="Sticky Note" style={{ width: '50%', height: 'auto' }} />
            <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black' }}>

                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    onChange={onChangeHandler}
                    value={message}


                />
            </p>
        </div>
    );
};

export default BigSticky;
