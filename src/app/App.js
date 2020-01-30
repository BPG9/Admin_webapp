import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { connect } from "react-redux";
import * as actions from "./store/actions/UserActions";
import BaseRouter from './routes';
import BaseLayout from './Layout';
import AwesomeComponent from './components/Loader'

import Login from "./containers/Login";

class App extends Component {
    state = {
        loading: true
    }
    componentWillMount() {
        const authToken = localStorage.getItem('authtoken');
        authToken && authToken != "" ?
            this.props.AuthCheck() :
            this.setState({ loading: false })
    }
    componentWillReceiveProps(prevprops) {
        if ((prevprops.login !== this.props.login && prevprops.login) || prevprops.loginProcess !== this.props.loginProcess) {
            this.setState({ loading: false })
        }
    }
    render() {
        return (
            <Router >
                <BaseLayout userLogin={this.props.login}>
                    {
                        this.state.loading ?
                            <AwesomeComponent h="calc(100vh - 64px)" /> :
                            !this.props.login && localStorage.getItem('authtoken') === this.props.token ?
                                <BaseRouter /> :
                                <Login />
                    }
                </BaseLayout>
            </Router>
        );
    }
}



const mapStateToProps = state => {
    return {
        token: state.user.token,
        login: state.user.login,
        loginProcess: state.user.loginProcess,
        loginError: state.user.loginError,
        id: state.user.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        AuthCheck: () =>
            dispatch(actions.AuthCheck()),
    };
};

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )((App))
);

