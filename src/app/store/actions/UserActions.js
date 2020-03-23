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
        // axios.defaults.withCredentials = true;
        request.axiosGraphQL.post('',
            { query: request.refresh(localStorage.getItem("token")) })
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
    // axios.defaults.withCredentials = true;
    // axios.defaults.crossorigin = true;
    console.log("hier is Login,", id, pass, request.login(id, pass))
    return dispatch => {
        dispatch(AuthStart());
        /*    request.axiosGraphQL.post('/web', request.login(id, pass), {
               headers: {
                   'Content-Type': 'application/graphql'
               }
           })
               .then(res => {
                   //TODO
                   localStorage.setItem('token', res.headers.token);
                   localStorage.setItem('Email', id);
                   console.log("login shod")
                   dispatch(AuthSuccess(res.headers.token, id));
               })
               .catch(err => {
                   console.log("err", err)
                   //TODO
                   dispatch(AuthError(err))
               })
       } */


        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }

        var graphql = JSON.stringify({
            "query": `mutation {auth(username:"` + id + `", password:"` + pass + `") {accessToken  refreshToken}}`
        })
        axios.post("http://247-244.gugw.tu-darmstadt.de/web", graphql, config)
    }
}

export const AuthLogout = (id, pass) => {
    return dispatch => {
        localStorage.removeItem("token")
    }
}
