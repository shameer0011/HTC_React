import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from '../container/login/loginPage';
import Home from '../container/home/home';
import AppBar from '../components/appBar/appBar';
import Department from '../container/department/dept'
const router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact={true}>
                        <AppBar />
                        <Home />
                    </Route>

                    <Route path="/login" exact={true}>
                        <LoginPage />
                    </Route>
                    {/* <Route path="/department" exact={true}>
                        <Department />
                    </Route> */}

                    {/* <Route path="/register" exact={true} component={Register} />
                    <Route path="/product/:id" exact={true}>
                        <Header />
                        <Singleproduct />
                    </Route>
                    <Route path="/checkout" exact={true}>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment" exact={true}>
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route> */}

                </Switch>
            </BrowserRouter>
        </>
    )
}
export default router;