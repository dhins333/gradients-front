import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ColorBox = () => {
    const color = useSelector((state) => {
        return(state.focus_color);
    })

    useEffect(() => {
        console.log(color);
    })

    return(
        <div className = 'color-box'>

        </div>
    )
}

export default ColorBox;