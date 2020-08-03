import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Misc = () => {

    const {type,deg} = useSelector((state) => {
        return {type:state.type,deg:state.deg}
    })
    const dispatch = useDispatch();

    const linearButtonHandler = (e) => {
        if(type !== 'linear'){
            dispatch({type:'change_type'})
        }
    } 

    const radialButtonHandler = (e) => {
        if(type !=='radial'){   
            dispatch({type:'change_type'})
        }
    }

    const onDegChange = (e) => {
        dispatch({type:'change_deg',deg:e.target.value});
    }

    return(
        <div className='misc'>
            <div className='typebuttons'>
                <div className={type === 'linear' ? 'typebuttons-linear active' : 'typebuttons-linear'} onClick = {linearButtonHandler}>Linear</div>
                <div className={type === 'radial' ? 'typebuttons-radial active' : 'typebuttons-radial'} onClick = {radialButtonHandler}>Radial</div>
            </div>
            <div className='degree-slider-container'>
                <input type='range' min = '0' max = '359' className={type !== 'linear' ? 'degree-slider disabled' : 'degree-slider'} disabled={type !== 'linear'} value = {deg} onChange = {onDegChange}></input>
            </div>
        </div>
    )

}

export default Misc;