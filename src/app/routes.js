
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rundgang from "./containers/Rundgang";
import Exponaten from "./containers/Exponaten";
import Setting from "./containers/Setting";
import Admin from "./containers/Admin";
import Statistik from './containers/Statistik';

function BaseRouter({ location }) {
    return (
        <Switch location={location}>
            <Route exact path="/" component={Rundgang} />
            <Route path="/rundgang" component={Rundgang} />
            <Route path="/exponaten" component={Exponaten} />
            <Route path="/statistik" component={Statistik} />
            <Route path="/admin" component={Admin} />
            <Route path="/setting" component={Setting} />
        </Switch>
    );
}

export default BaseRouter;
