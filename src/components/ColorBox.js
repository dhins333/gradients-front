import React from 'react';
import { useSelector } from 'react-redux';

const ColorBox = () => {
    const currentGradient = useSelector((state) => {
        return(state.currentGradient);
    })

    const style = {background:currentGradient};

    return(
        <div className = 'color-box' style={style} >

        </div>
    )
}

export default ColorBox;