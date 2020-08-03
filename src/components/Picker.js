import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

const Picker = (props) => {

    const dispatch = useDispatch();
    const [redValue,setRedValue] = useState(props.colorValue[0]);
    const [greenValue,setGreenValue] = useState(props.colorValue[1]);
    const [blueValue,setBlueValue] = useState(props.colorValue[2]);
    const [percent,setPercent] = useState(props.percent);
    const [alpha,setAlpha] = useState(props.colorValue[3]);

    const onRedChange = (e) => {
        setRedValue(e.target.value);
        if(props.pos === 1){
            dispatch({type:'red_change1',red:e.target.value});
        }
        else{
            dispatch({type:'red_change2',red:e.target.value});
        }
        
    }

    const onGreenChange = (e) => {
        setGreenValue(e.target.value);
        if(props.pos === 1){
            dispatch({type:'green_change1',green:e.target.value});
        }
        else{
            dispatch({type:'green_change2',green:e.target.value});
        }
    }

    const onBlueChange = (e) => {
        setBlueValue(e.target.value);
        if(props.pos === 1){
            dispatch({type:'blue_change1',blue:e.target.value});
        }
        else{
            dispatch({type:'blue_change2',blue:e.target.value});
        }
    }

    const onPercentChange = (e) => {
        setPercent(e.target.value);
        if(props.pos === 1){
            dispatch({type:'percent_change1',percent:e.target.value});
        }
        else{
            dispatch({type:'percent_change2',percent:e.target.value});
        }
    }

    const onAlphaChange = (e) => {
        if(e.target.value < 0){
            setAlpha(0);
            alphaDispatch(0);
        }
        else if(e.target.value > 1){
            setAlpha(1);
            alphaDispatch(1)
        }
        else{
            setAlpha(e.target.value);
            alphaDispatch(e.target.value);
        }
    }

    const alphaDispatch = (value) => {
        if(props.pos === 1){
            dispatch({type:'alpha_change1',alpha:value});
        }
        else{
            dispatch({type:'alpha_change2',alpha:value});
        }
    }

    return(
        <div className = 'picker' style={props.style}>
            <div className = 'picker-rgb'>
                <input type='range' min='0' max='255' value={redValue} onChange = {onRedChange} className='slider red' ></input>
                <input type='range' min='0' max='255' value={greenValue} onChange = {onGreenChange} className='slider green' ></input>
                <input type='range' min='0' max='255' value={blueValue} onChange = {onBlueChange} className='slider blue' ></input>
            </div>
            <div className = 'picker-misc'>
                <p>Percent {percent}</p>
                <input type='range' min='0' max='100' value={percent} onChange = {onPercentChange} className='slider percent' ></input>
                <p>Alpha:</p>
                <input type='number' value={alpha} onChange = {onAlphaChange} className= 'picker-misc-alpha'></input>
            </div>
        </div>
    )

}

export default Picker;