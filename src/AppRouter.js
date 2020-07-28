import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path = '/' component = {MainPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;