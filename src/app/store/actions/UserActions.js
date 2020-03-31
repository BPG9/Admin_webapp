/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 * 
 * Alle Funktiuonen die in Redux aufgerufen werden konnen.a
 */
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
export const Logout = () => {
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
export const AuthSuccess = (at, rt, a) => {
    return {
        type: actionTypes.AUTH_SUCC,
        refreshToken: rt,
        accessToken: at,


    }
}
export const AuthSuccessR = (rt) => {
    return {
        type: actionTypes.AUTH_SUCC2,
        refreshToken: rt,

    }
}

export const AuthCheck = () => {
    return (dispatch) => {
        dispatch(AuthStart());
        // axios.defaults.withCredentials = true;
        var refreshToken = localStorage.getItem("rtoken")
        if (!refreshToken.startsWith("ey")) dispatch(AuthError("err"))
        console.log("refreshToken is ", refreshToken)
        request.axiosGraphQL.post('', request.refresh(refreshToken))
            .then(res => {
                console.log("done")
                if (!res.data.data.refresh.newToken.startsWith("ey")) dispatch(AuthError("err"))
                console.log(res)
                localStorage.setItem('atoken', res.data.data.refresh.newToken);
                dispatch(AuthSuccessR(res.data.data.refresh.newToken));
            })
            .catch(err => {
                console.log("done")
                //TODO
                dispatch(AuthError("err"))
            })

    }
}


export const AuthLogin = (id, pass) => {
    // axios.defaults.withCredentials = true;
    // axios.defaults.crossorigin = true;
    console.log("hier is Login,", id, pass, request.login(id, pass))
    return dispatch => {
        dispatch(AuthStart());
        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }

        axios.post("http://247-244.gugw.tu-darmstadt.de/web", request.login(id, pass), config)
            .then(x => {
                if (x.data.data.auth.refreshToken != "null" || x.data.data.auth.accessToken != "null") {
                    alert("Error gibt es keine benutzer oder Pass ist falsch")
                }
                else {

                    localStorage.setItem("rtoken", x.data.data.auth.refreshToken)
                    localStorage.setItem("atoken", x.data.data.auth.accessToken)
                    dispatch(AuthSuccess(x.data.data.auth.accessToken, x.data.data.auth.refreshToken));
                }
            })
            .catch(x => console.log("eerror", x))
    }
}

export const AuthLogout = (id, pass) => {
    return dispatch => {
        localStorage.clear()
        dispatch(Logout())
    }
}
