import React from 'react';

const Thumbnail = (props) => {
    const style = {
        background:`rgba(${props.rgba[0]},${props.rgba[1]},${props.rgba[2]},${props.rgba[3]})`
    }
    
    return(
        <div className='thumbnail' style={style}>

        </div>
    )
}

export default Thumbnail;