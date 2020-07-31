import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

const Picker = () => {

    const dispatch = useDispatch();
    const [sliderValue,setSliderValue] = useState('0');

    const onSliderChange = (e) => {
        setSliderValue(e.target.value);
        dispatch({type:'changecolor1'})
    }

    return(
        <div className = 'picker'>
            <input type='range' min='0' max='764' value={sliderValue} onChange={onSliderChange}></input>
        </div>
    )
}

export default Picker;