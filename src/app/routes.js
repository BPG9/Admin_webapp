
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Setting from "./containers/Setting";
import Admin from "./containers/Admin";

function BaseRouter({ location }) {
    return (
        <Switch location={location}>
            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage} />
            <Route path="/admin" component={Admin} />
            <Route path="/setting" component={Setting} />
        </Switch>
    );
}

export default BaseRouter;
