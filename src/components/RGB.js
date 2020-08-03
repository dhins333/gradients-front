import React from 'react';

const RGB = (props) => {
    return(
        <div className='rgb'>
            <p className='rgb-text'>{`rgba(${props.rgba[0]},${props.rgba[1]},${props.rgba[2]},${props.rgba[3]})`}</p>
        </div>
    )
}

export default RGB;