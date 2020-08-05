import React from 'react';
import { useSelector } from 'react-redux';

const Background = (props) => {

    const showcase = useSelector((state) => {
        return state.showcase;
    })



    
    let color1 = showcase[props.position].color1;
    let color2 = showcase[props.position].color2;
    let percent1 = showcase[props.position].percent1;
    let percent2 = showcase[props.position].percent2;
    let type = showcase[props.position].type;
    let deg = showcase[props.position].deg;
    let style = {background:`${type}-gradient(${type === 'linear' ? deg+'deg' :'circle'}, rgba(${color1[0]},${color1[1]},${color1[2]},${color1[3]}) ${percent1}%, rgba(${color2[0]},${color2[1]},${color2[2]},${color2[3]}) ${percent2}%)`};

    return(
        <div className='background' style = {style}>
            <div className='background-prev' style={props.position === 0 ? {visibility:'hidden'} : {}} onClick = {props.prevClick}>{'<'}</div>
            <div className='background-next' style={props.position === showcase.length-1 ? {visibility:'hidden'} : {}} onClick = {props.nextClick}>{'>'}</div>
        </div>
    )
}

export default Background;

