import React from 'react';
import Radium from 'radium';

const Chart = (props) => {

    let style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '1px solid black',
        ':hover': {
            border: '1px solid gray'
        },
        '@media (max-width: 500px)': {
            display: 'block'
        }
    };

    return (
        <div style={style} onClick={props.delete}>
            {props.letter}
        </div>
    );
}

export default Radium(Chart);