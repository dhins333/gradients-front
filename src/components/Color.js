import React, { useState }  from 'react';
import {Spring} from 'react-spring/renderprops';
import Thumbnail from './Thumbnail';
import RGB from './RGB';
import Picker from './Picker';

const Color = (props) => {

    const [expandState,setExpandState] = useState(false);

    const onExpandClick = (e) => {
        setExpandState(!expandState);
    } 

    const colorValue = props.colorValue;
    const pos = props.pos;
    const percent = props.percent;

    return(
        <>
        <div className='color'>
            <Thumbnail rgba={props.colorValue}/>
            <RGB rgba={props.colorValue}/>
            <i className='expand fas fa-caret-square-down' onClick = {onExpandClick}></i>
        </div>
        {expandState === true ?<Spring
            from={{ opacity:'0' }}
            to={{ opacity:'1' }}>
            {props => <div style={props}><Picker colorValue = {colorValue} pos = {pos} percent = {percent}/></div>}
        </Spring> : undefined}
        </>
    )
}

export default Color;