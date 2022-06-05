import { Container } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Appbar from '../../components/appbar/appbar';
import Home from '../../components/home/home';
import Auth from '../../components/Authentication/Auth';
import PostDetails from '../../components/postDetail/postDetails';
const Routers = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (

        <BrowserRouter>
            <Container width="lg">
                <Appbar />
                <Switch>
                    <Route>
                        // <Route exact path="/" component={Home} />
                        // <Route exact path="/auth" component={Auth} />

                        <Route path="/" exact component={() => <Redirect to="/posts" />} />
                        <Route path="/posts" exact component={Home} />
                        <Route path="/posts/search" exact component={Home} />
                        <Route path="/posts/:id" exact component={PostDetails} />
                        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default Routers

