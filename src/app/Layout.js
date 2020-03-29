/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 *  All Layout. 
 * NAV
 * LEFT MENU
 * Footer
 * MAIN 
 * Die Funktionen/Classen sind in ./components/Layout2 defieniert
 */


import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import windowSize from 'react-window-size'

import Header from './components/Layout2/Header'
import Main from './components/Layout2/Main'
import Footer from './components/Layout2/Footer'
import { CssBaseline } from '@material-ui/core';
import Sidebar from './components/Layout2/Sidebar';
import ReactResizeDetector from 'react-resize-detector';

const theme =
  createMuiTheme({
    palette: {
      type: 'dark',
    },
  }
  );
class App extends React.Component {
  state = {
    sideBarSize: 64,
    sideBarOpen: window.innerWidth < 600 ? false : true,
    sideBarinsideOpen: false,
    type: true,
    width: window.innerWidth,
    height: window.innerHeight,
  }
  handleDrawerOpen = (a) => {
    console.log("handleDrawerOpen", a)
    this.setState(this.state.width < 600 ? { sideBarinsideOpen: a, sideBarOpen: a } : { sideBarinsideOpen: a })
  }
  sidbarChange = (a) => {
    console.log("sidbarChange", a)

    this.setState(this.state.width < 600 ? { sideBarOpen: a, sideBarinsideOpen: a } : { sideBarOpen: a })
  }
  onResize = (a, b) => {
    this.setState({ width: a, height: b })
    if (a < 600 && !this.state.sideBarinsideOpen)
      this.setState({ sideBarinsideOpen: true })

  }
  render() {
    console.log("state has been changed ", this.state)
    const size = this.state.width < 600 ? 0 : this.state.width < 1200 ? 2 : 3
    const typeOfDrawer = size == 0 ? "temporary" : "permanent"
    return (
      <ThemeProvider theme={
        createMuiTheme({
          palette: {
            type: this.state.type ? 'light' : 'dark',
          },
        })
      }>
        <CssBaseline />
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />

        <Header sidbarChange={() => this.sidbarChange(!this.state.sideBarOpen)} onChange={() => {
          this.setState({ type: !this.state.type });
        }}>
        </Header>
        <div style={{ display: "flex" }}>
          {this.state.sideBarOpen &&
            <Sidebar
              sideBarinsideOpen={(a) => this.state.sideBarinsideOpen(a)}
              handleDrawerOpen={(a) => this.handleDrawerOpen(a)}
              sideBarinsideOpen={this.state.sideBarinsideOpen}
              typeOfDrawer={typeOfDrawer}
            >


            </Sidebar>
          }
          <Main sideBarinsideOpen={this.state.sideBarinsideOpen}>


            {this.props.children}
          </Main>
        </div>
        <Footer />
      </ThemeProvider >
    )
  }
}

export default windowSize(App)
