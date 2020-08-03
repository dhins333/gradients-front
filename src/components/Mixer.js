import React from 'react';
import Color from '../components/Color';
import { useSelector } from 'react-redux';


const Mixer = () => {

    const {color1,color2,percent1,percent2} = useSelector((state) => {
        return({color1:state.color1,color2:state.color2,percent1:state.percent1,percent2:state.percent2});
    })

    return(
        <div className = 'mixer'>
            <Color colorValue = {color1} pos = {1} percent = {percent1}  />
            <Color colorValue = {color2} pos = {2} percent = {percent2}/>
        </div>
    )
}

export default Mixer;