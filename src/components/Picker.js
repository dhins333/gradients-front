import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

const Picker = (props) => {
    
    const [redValue,setRedValue] = useState(0);
    const [greenValue,setGreenValue] = useState(0);
    const [blueValue,setBlueValue] = useState(0);
    const [percent,setPercent] = useState(0);
    const [alpha,setAlpha] = useState(1);

    const onRedChange = (e) => {
        setRedValue(e.target.value);
    }

    const onGreenChange = (e) => {
        setGreenValue(e.target.value);
    }

    const onBlueChange = (e) => {
        setBlueValue(e.target.value);
    }

    const onPercentChange = (e) => {
        setPercent(e.target.value);
    }

    const onAlphaChange = (e) => {
        if(e.target.value < 0){
            setAlpha(0);
        }
        else if(e.target.value > 1){
            setAlpha(1);
        }
        else{
            setAlpha(e.target.value);
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