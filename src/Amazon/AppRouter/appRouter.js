import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import Header from "../components/header/header.jsx";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/authActions";
import Singleproduct from "../pages/single_product/single_product";
import Checkout from "../pages/checkout/checkout";
import Payment from "../pages/payment/payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51KLu2JSIFGMSzwxpAGoULMwknn1Naa9bVQLpwLGPTEY2FEOmxSPwVrgMUBuZxFTTukeBoUKC8ImMxp493cHx3VCs008N86Q4Gg")
const AppRouter = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(setUser(authUser))
            } else {
                dispatch(setUser(null))
            }
        })
    }, [dispatch])
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact={true}>
                    <Header />
                    <Home />
                </Route>

                <Route path="/login" exact={true}>
                    <Login />
                </Route>

                <Route path="/register" exact={true} component={Register} />
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
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
