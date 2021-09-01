import React from 'react';
import classes from './UserInput.module.css';

const hugeNameStyle = {
    color: 'red'
}

const UserInput = (props) => (
    <input
        className={classes.UserInput}
        style={props.username.length > 20 ? hugeNameStyle : {}}
        type="text" onChange={props.changed} value={props.username} />
);

export default UserInput;