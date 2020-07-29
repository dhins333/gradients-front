import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import {Provider} from 'react-redux';
import store from './store/store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.querySelector('#app');
ReactDOM.render(
<Provider store = {store}>
    <AppRouter/>
</Provider>
,app);