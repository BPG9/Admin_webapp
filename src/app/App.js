import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { connect } from "react-redux";
import * as actions from "./store/actions/actions";
import BaseRouter from './routes';
import BaseLayout from './Layout';


class App extends Component {

    render() {


        return (
            <Router >
                <BaseLayout>
                    <BaseRouter />
                </BaseLayout>
            </Router>
        );
    }
}



const mapStateToProps = state => {
    return {
        Cookie_Frage: state.cookies,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )((App))
);

