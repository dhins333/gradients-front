import {createStore, applyMiddleware} from 'redux';
import mainReducer from '../reducers/mainReducer';
import thunk from 'redux-thunk';

const store = createStore(mainReducer,{
    color1:[253,116,108,1],
    color2:[255,144,104,1],
    percent1:'0',
    percent2:'100',
    type:'linear',
    deg:87,
    modal:false,
    showcase:[]
},applyMiddleware(thunk));

export default store;