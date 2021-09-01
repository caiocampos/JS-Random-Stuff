import React from 'react';

function getMessage(inputLength) {
    return inputLength <= 5 ? 'Text too short' : 'Text long enough';
}

const Validation = (props) => (
    <div>{getMessage(props.inputLength)}</div>
);

export default Validation;