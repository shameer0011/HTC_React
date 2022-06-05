import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Addedit from '../pages/addEditUser';
import UserInfo from '../pages/userInfo';
// import Contact from '../pages/contact';
import Header from '../components/header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <ToastContainer />
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/editUser" exact={true} component={Addedit} />
                    <Route path="/editUser/:id" exact={true} component={Addedit} />
                    <Route path="/userinfo/:id" component={UserInfo} />
                    {/* <Route path="/contact" component={Contact} /> */}

                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default AppRouter;