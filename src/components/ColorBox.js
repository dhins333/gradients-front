import React from 'react';
import { useSelector } from 'react-redux';

const ColorBox = () => {
    const {color1,color2,percent1,percent2} = useSelector((state) => {
        return({color1:state.color1,
        color2:state.color2,
        percent1:state.percent1,
        percent2:state.percent2
    });
    })

    const style = {background:`linear-gradient(0deg, rgba(${color1[0]},${color1[1]},${color1[2]},${color1[3]}) ${percent1}%, rgba(${color2[0]},${color2[1]},${color2[2]},${color2[3]}) ${percent2}%)`};

    return(
        <div className = 'color-box' style={style} >

        </div>
    )
}

export default ColorBox;