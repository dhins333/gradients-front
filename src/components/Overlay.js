import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Spring} from 'react-spring/renderprops';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/css/css');

const Overlay = () => {

    const {color1,color2,percent1,percent2,type,deg} = useSelector((state) => {
        return({color1:state.color1,
        color2:state.color2,
        percent1:state.percent1,
        percent2:state.percent2,
        type:state.type,
        deg:state.deg
    });
    })

    const dispatch = useDispatch();

    const value = `background:${type}-gradient(${type === 'linear' ? deg+'deg' :'circle'}, rgba(${color1[0]},${color1[1]},${color1[2]},${color1[3]}) ${percent1}%, rgba(${color2[0]},${color2[1]},${color2[2]},${color2[3]}) ${percent2}%)`;

    const options = {
        mode: 'css',
        theme: 'material',
        lineNumbers: true
      }

    const overlayClick = (e) => {
        dispatch({type:'toggle_modal'});
    } 

    return(
    <Spring
            from={{ transform: 'translate3d(0,-100vh,0)' }}
            to={{ transform: 'translate3d(0,0vh,0)' }}>
            {props => <div className = 'overlay' style = {props} >
            <div className = 'close-container'><i className='fas fa-window-close fa-2x close' onClick = {overlayClick}></i></div>
            <div>
                <CodeMirror
                value={value}
                options={options}
                />
            </div>
        </div>}
    </Spring>
    )
}

export default Overlay;