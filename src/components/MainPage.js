import React from 'react';
import ColorBox from './ColorBox';
import Mixer from './Mixer';
import Misc from './Misc';
import CSS from './CSS';

const MainPage = () => {
    return(
        <div className='mainpage' >
            <ColorBox/>
            <Mixer/>
            <Misc/>
            <CSS />
        </div>
    )
}

export default MainPage;