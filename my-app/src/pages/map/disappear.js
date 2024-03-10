import React from 'react';
import styled, { keyframes } from 'styled-components'

const DisappearingWindow = styled.div`
    background: red,
    height: '500px',
`

function Disappear() {
    return (
        <DisappearingWindow>
            <p>Hello</p>
        </DisappearingWindow>
    );

}

export default Disappear;