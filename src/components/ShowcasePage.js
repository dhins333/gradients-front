import React,{ useState, useEffect } from 'react';
import Details from './Details';
import Background from './Background';
import { useSelector, useDispatch } from 'react-redux';
import {fillShowcase} from '../actions/actions';

const ShowcasePage = () => {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';
    },[])
    const showcase = useSelector((state) => {
        return state.showcase;
    });
    const dispatch = useDispatch();
    const [position,setPosition] = useState(0);

    const nextClick = (e) => {
        setPosition(position+1);
    }

    const prevClick = (e) => {
        setPosition(position-1);
    }

    if(showcase.length === 0){
        dispatch(fillShowcase());
    }else{
        return(
            <div className = 'showcasepage'>
                <Details position = {position}/>
                <Background position = {position} nextClick = {nextClick} prevClick = {prevClick}/>
            </div>
        )
    }
    
    return(
        <div>
            {undefined}
        </div>
    )
}

export default ShowcasePage;