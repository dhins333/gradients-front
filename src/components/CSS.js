import React from 'react';
import { useDispatch } from 'react-redux';

const CSS = () => {

    const dispatch = useDispatch();

    const cssClick = (e) => {
        dispatch({type:'toggle_modal'});
    }

    return(
        <div className='css' onClick = {cssClick}>Get CSS</div>
    )
}

export default CSS;