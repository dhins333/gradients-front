import {createStore} from 'redux';
import mainReducer from '../reducers/mainReducer';

const colorData1 = {
    rgba:'rgba(0,0,0,1)',
    percent:'0%'
};

const colorData2 = {
    rgba:'rgba(179,144,69,1)',
    percent:'100%'
};

const store = createStore(mainReducer,{
    color1:colorData1.rgba,
    color2:colorData2.rgba,
    currentGradient:`linear-gradient(0deg, ${colorData1.rgba} ${colorData1.percent}, ${colorData2.rgba} ${colorData2.percent})`
});

export default store;