import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Drawers from "../container/drawer/drawer";


const DrawerContent = (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/waferdetails/"
                    render={() => <Drawers {...props} />}
                />
            </Switch>
        </BrowserRouter>
    )
}


export default DrawerContent;