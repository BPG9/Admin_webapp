import axios from 'axios';
import * as actionTypes from '../actionTypes';
import * as config from '../../../config'
import * as request from '../../../Requests'



export const AuthStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const AuthRenew = (token) => {
    return {
        type: actionTypes.AUTH_RENEW,
        token: token
    }
}
export const Logout = (id, pass) => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const AuthError = (e) => {
    return {
        type: actionTypes.AUTH_ERR,
        error: e
    }
}
export const AuthSuccess = (e, a) => {
    return {
        type: actionTypes.AUTH_SUCC,
        token: e,
        id: a,


    }
}

export const AuthCheck = () => {
    return (dispatch) => {
        dispatch(AuthStart());
        request.axiosGraphQL.post('', { query: request.refresh(localStorage.getItem("token")) })
            .then(res => {
                //TODO
                localStorage.setItem('token', res.headers.token);
                dispatch(AuthSuccess(res.headers.token));
            })
            .catch(err => {
                //TODO
                dispatch(AuthError(err))
            })
    }
}
export const AuthLogin = (id, pass) => {
    return dispatch => {
        dispatch(AuthStart());
        request.axiosGraphQL.post('', { query: request.login(id, pass) })
            .then(res => {
                //TODO
                localStorage.setItem('token', res.headers.token);
                localStorage.setItem('Email', id);
                console.log("login shod")
                dispatch(AuthSuccess(res.headers.token, id));
            })
            .catch(err => {
                //TODO
                dispatch(AuthError(err))
            })
    }
}

export const AuthLogout = (id, pass) => {
    return dispatch => {
        localStorage.removeItem("token")
    }
}

