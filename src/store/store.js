import {createStore} from 'redux';
import mainReducer from '../reducers/mainReducer';

const store = createStore(mainReducer,{focus_color:'black'});

export default store;