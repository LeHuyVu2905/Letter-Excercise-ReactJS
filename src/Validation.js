import React from 'react';

const Validation = (props) => {

    return (
        <div>
            <p>{
                props.text > 5 ? 'Text long enougn!' : 'Text too short!'
            }</p>
        </div>
    );
}

export default Validation;