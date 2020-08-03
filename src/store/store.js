import {createStore} from 'redux';
import mainReducer from '../reducers/mainReducer';

const store = createStore(mainReducer,{
    color1:[0,0,0,1],
    color2:[179,144,69,1],
    percent1:'0',
    percent2:'100',
    type:'linear',
    deg:0,
    modal:false
});

export default store;