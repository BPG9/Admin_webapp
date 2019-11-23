
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage";

function BaseRouter({ location }) {
    return (
        <Switch location={location}>
            <Route exact path="/" component={Homepage} />
        </Switch>
    );
}

export default BaseRouter;
