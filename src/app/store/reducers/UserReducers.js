import * as actionTypes from "../actionTypes";

const initialState = {
  token: null,
  login: false,
  loginProcess: false,
  loginError: null,
  id: null,
  name: null,
  vorname: null,
  soll: null
};

const authStart = (state, action) => {
  return Object.assign({}, state, { loginProcess: true });
};
const authSuss = (state, action) => {
  return Object.assign({}, state, { loginProcess: false, login: true, token: action.token, id: action.id, soll: action.s, name: action.name, vorname: action.vorname });
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
