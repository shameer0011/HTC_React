import { Container } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Authentication from '../containers/authentication/authentication';
import Home from '../containers/home/home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/appBar/appBar';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import GraphDetails from '../containers/graph page/index';
const Routers = () => {

    const history = useHistory();

    const login = () => {
        window.location.href = '/auth';
    }
    const logout = () => {
        localStorage.removeItem('profile');
        window.location.href = '/';
    }

    return (
        <BrowserRouter>
            <ToastContainer />
            <Header login={login} logout={logout} />
            <Switch>
                <Route>
                    <Route exact={true} path='/' component={() => <Redirect to='/home' />} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/auth" component={Authentication} />
                    <Route exact path="/posts" component={Home} />
                    <Route exact path="/post/search" component={Home} />
                    <Route exact path="/graph" component={GraphDetails} />
                    {/* 
                 
                        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routers

