import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Drawers from "../../components/drawers/drawers";


const DrawerContent = (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/graph"
                    render={() => <Drawers {...props} />}
                />
            </Switch>
        </BrowserRouter>
    )
}


export default DrawerContent;