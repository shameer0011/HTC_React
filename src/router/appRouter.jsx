import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DenseAppBar from '../pages/container/appbar/appbar';
import InspectionList from '../pages/inspectionList/inspectionList';
import WaferDetails from '../pages/waferDetails/index';
import TestDetail from '../pages/waferDetails/testDetails';
import WaferDetail from '../pages/waferDetails/waferDetail';
import WaferList from '../pages/waferDetails/waferList';
const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={InspectionList} exact={true} />
                    <Route path="/waferdetails" component={WaferDetails} exact={true} />
                    <Route path="/waferlist" component={WaferList} exact={true} />
                    <Route path="/waferdetail" component={WaferDetail} exact={true} />
                    <Route path="/testdetail" component={TestDetail} exact={true} />

                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default AppRouter;