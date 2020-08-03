import React from 'react';
import ColorBox from './ColorBox';
import Mixer from './Mixer';
import Misc from './Misc';
import CSS from './CSS';
import Overlay from './Overlay';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const modal = useSelector((state) => {
        return state.modal;
    })

    if(modal === true){
        window.scrollTo(0,0);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';
    }
    else{
        const body = document.querySelector('body');
        body.style.overflowY = 'visible';
    }

    return(
        <div className='mainpage' >
            <ColorBox/>
            <Mixer/>
            <Misc/>
            <CSS />
            {modal === true ? <Overlay/> : undefined}
        </div>
    )
}

export default MainPage;