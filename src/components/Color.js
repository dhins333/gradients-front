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

    return(
        <>
        <div className='color'>
            <Thumbnail rgba={props.colorValue}/>
            <RGB rgba={props.colorValue}/>
            <i className='expand fas fa-caret-square-down' onClick = {onExpandClick}></i>
        </div>
        {expandState === true ?<Spring
            from={{ transform: 'translate3d(0,-10px,0)',opacity:'0' }}
            to={{ transform: 'translate3d(0,0px,0)',opacity:'1' }}>
            {props => <div style={props}><Picker rgba = {props.colorValue} /></div>}
        </Spring> : undefined}
        </>
    )
}

export default Color;