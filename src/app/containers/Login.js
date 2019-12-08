import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import * as actions from "../store/actions/UserActions";
import AwesomeComponent from '../components/Loader'
import AllgemeinField from '../components/Field/AllgemeinField'

class Login extends React.Component {

  render() {
    return (
      <div style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)"
      }}>
        {
          this.props.loginProcess ?
            <AwesomeComponent />
            :

            <AllgemeinField>
              <div style={{
                maxWidth: 400,
                minWidth: "200px",
                width: "50vw",
                minWidth: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <Avatar style={{
                }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
          </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(b) => this.setState({ email: b.target.value })}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(b) => this.setState({ pass: b.target.value })}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "24px 0px 16px",
                    height: 64
                  }}
                  onClick={() => this.props.Authlogin(this.state.email, this.state.pass)}
                >
                  Sign In
            </Button>

              </div>
            </AllgemeinField>
        }
      </div>
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
    Authlogin: (id, pass) =>
      dispatch(actions.AuthLogin(id, pass)),
  };
};
export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)