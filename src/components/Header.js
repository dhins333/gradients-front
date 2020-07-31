import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const colors = useSelector((state) => {
        return({color1:state.color1,color2:state.color2})
    })

    const style = { 
        background: `-webkit-linear-gradient(${colors.color1}, ${colors.color2})`,
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