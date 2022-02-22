import { Container } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appbar from '../../components/appbar/appbar';
import Home from '../../components/home/home';
import Auth from '../../components/Authentication/Auth';

const Routers = () => {

    return (

        <BrowserRouter>
            <Container width="lg">
                <Appbar />
                <Switch>
                    <Route>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/auth" component={Auth} />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default Routers

