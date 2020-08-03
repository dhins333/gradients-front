import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const {color1,color2} = useSelector((state) => {
        return({color1:state.color1,color2:state.color2})
    })

    const style = { 
        background: `-webkit-linear-gradient(rgba(${color1[0]},${color1[1]},${color1[2]},${color1[3]}), rgba(${color2[0]},${color2[1]},${color2[2]},${color2[3]}))`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    return(
        <div className = 'header'>
            <h2 className = 'header-h2' style={style}>Gradients</h2>
        </div>
    )
}

export default Header;