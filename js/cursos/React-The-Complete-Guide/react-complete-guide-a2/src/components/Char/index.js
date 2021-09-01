import React from 'react';

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
};

const Char = (props) => (
    <div style={style} onClick={props.clicked}>
        {props.character}
    </div>
);

export default Char;