import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ShowcasePage from './components/ShowcasePage';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path = '/' component = {MainPage} exact={true}></Route>
                <Route path = '/showcase' component = {ShowcasePage} exact={true}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;