import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.querySelector('#app');
ReactDOM.render(<AppRouter/>,app);