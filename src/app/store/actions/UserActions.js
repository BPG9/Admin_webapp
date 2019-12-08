import axios from 'axios';
import * as actionTypes from '../actionTypes';
import * as config from '../../../config'
export const AUTH_START = "AUTH_START"
export const AUTH_SUCC = "AUTH_SUCC"
export const AUTH_ERR = "AUTH_ERR"
export const AUTH_LOGOUT = "AUTH_LOGOUT"


export const sollChange = (a) => {
    return (dispatch) => {
        let data = {
            soll_wt: a
        };
        axios.post(config.BACKEND + "/ntt/user/add/sollwt", JSON.stringify(data), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "authtoken": localStorage.getItem("authtoken")
            }
        })
            .then(res => {
                // localStorage.setItem('authToken', authToken);
                dispatch(sollChanged(a));
                // dispatch(AuthSuccess(authToken));
            })
            .catch(err => {
                dispatch(AuthError(err))
            })
    }
}
export const sollChanged = (a) => {
    return {
        type: actionTypes.SOLL_CHANGE,
        s: a
    }
}
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
export const AuthSuccess = (e, a, name, v, s) => {
    return {
        type: actionTypes.AUTH_SUCC,
        token: e,
        id: a,
        name: name,
        vorname: v,
        s: s

    }
}

export const AuthCheck = () => {
    return (dispatch) => {
        dispatch(AuthLogin("s@s.s", "s"));
    }
}
export const AuthLogin = (id, pass) => {
    return dispatch => {
        dispatch(AuthStart());
        let data = {
            email: id,
            password: pass,
        };
        axios.post(config.BACKEND + "/ntt/user/login", JSON.stringify(data), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // localStorage.setItem('authToken', authToken);
                localStorage.setItem('authtoken', res.headers.authtoken);
                localStorage.setItem('Email', id);
                console.log("login shod")
                dispatch(AuthSuccess(res.headers.authtoken, id, res.data.nachname, res.data.vorname, res.data.soll_wt));
                // dispatch(AuthSuccess(authToken));
            })
            .catch(err => {
                dispatch(AuthError(err))
            })
    }
    //TODO AGE TOKEN BEYNE 30-60 min bud darkhaste dobare bede vase TOKEN JADID
    //AGAR TOKEN GÜLTIG NABUD LOGOUT KONE
}
export const AuthLogout = (id, pass) => {
    return dispatch => {
    }
}

