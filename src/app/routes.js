/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 * All Routes
 * 
 */


import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rundgang from "./containers/Rundgang";
import Exponaten from "./containers/Exponaten";
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
        </Switch>
    );
}

export default BaseRouter;
