import React from 'react';
import Color from '../components/Color';
import { useSelector } from 'react-redux';


const Mixer = () => {

    const colorData = useSelector((state) => {
        return({color1:state.color1,color2:state.color2});
    })

    return(
        <div className = 'mixer'>
            <Color colorValue = {colorData.color1} pos = {1} />
            <Color colorValue = {colorData.color2} pos = {2} />
        </div>
    )
}

export default Mixer;