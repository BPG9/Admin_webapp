/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 *  Redux Änderung im Store
 */

import * as actionTypes from "../actionTypes";

const initialState = {
  refreshToken: null,
  accessToken: null,
  login: false,
  loginProcess: false,
  loginError: null,
  name: null,
  vorname: null,
  soll: null
};

const authStart = (state, action) => {
  return Object.assign({}, state, { loginProcess: true });
};
const authSuss = (state, action) => {
  return Object.assign({}, state, { loginProcess: false, login: true, accessToken: action.accessToken, refreshToken: action.refreshToken });
};
const authSuss2 = (state, action) => {
  return Object.assign({}, state, { loginProcess: false, login: true, refreshToken: action.refreshToken });
};
const authErr = (state, action) => {
  return Object.assign({}, state, { loginProcess: false, login: false, token: null, loginError: action.e });
};
const authLogout = (state, action) => {
  return Object.assign({}, state, { loginProcess: false, login: false, token: null });
};
const authRenew = (state, action) => {
  return Object.assign({}, state, { loginProcess: false, login: false, token: null });
};
const SOLL_CHANGE = (state, action) => {
  return Object.assign({}, state, { soll: action.s });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCC:
      return authSuss(state, action);
    case actionTypes.AUTH_SUCC2:
      return authSuss2(state, action);
    case actionTypes.AUTH_ERR:
      return authErr(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_RENEW:
      return authRenew(state, action);
    default:
      return state;
  }
};

export default reducer;
