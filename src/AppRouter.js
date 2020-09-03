import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ShowcasePage from './components/ShowcasePage';
import ErrorPage from './components/404Page';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path = '/' component = {MainPage} exact={true}></Route>
                <Route path = '/showcase' component = {ShowcasePage} exact={true}></Route>
                <Route path = '*' component = {ErrorPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;