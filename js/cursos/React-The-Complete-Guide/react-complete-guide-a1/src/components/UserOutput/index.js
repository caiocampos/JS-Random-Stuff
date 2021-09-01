import React from 'react';
import classes from './UserOutput.module.css';

const secondParagraphStyle = {
    fontWeight: 'normal'
}

const defaultParagraph = 'Grand Ole Opry, the longest-running radio broadcast in the United States';

const UserOutput = (props) => (
    <div className={classes.UserOutput}>
        <p>Username: {props.username}</p>
        <p style={secondParagraphStyle}>
            {props.children || defaultParagraph}
        </p>
    </div>
);

export default UserOutput;