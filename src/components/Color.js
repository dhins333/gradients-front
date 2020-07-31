import React from 'react';
import Thumbnail from './Thumbnail';
import RGB from './RGB';

const Color = (props) => {
    return(
        <div className='color'>
            <Thumbnail rgba={props.colorValue}/>
            <RGB rgba={props.colorValue}/>
        </div>
    )
}

export default Color;