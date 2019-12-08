import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  Root,
  Header,
  HeaderOffset,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  SidebarTrigger,
  sidebarStyles,
  headerStyles,
} from "./components/layout/index";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Menu from './components/menu/Menu'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import windowSize from 'react-window-size'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class App extends React.Component {
  state = {
    opened: true,
    collapsed: true,
    heightOfHeader: 64
  }
  render() {
    var w = this.state.opened ? this.state.collapsed ? 64 : 256 :
      window.innerWidth > 500 ? 0 : this.state.collapsed ? 64 : 256
    return (
      <ThemeProvider theme={createMuiTheme()}>
        <Root config={config}>
          <CssBaseline />
          <Header style={{ height: this.state.heightOfHeader }} height={this.state.heightOfHeader}>
            <Toolbar style={{ height: this.state.heightOfHeader }} height={this.state.heightOfHeader}>
              <IconButton
                onClick={e => {
                  this.setState({ opened: !this.state.opened })
                }}
              >
                {this.state.opened ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
              Header
            </Toolbar>
          </Header>
          <HeaderOffset />

          <Content w={w} style={{ minHeight: "calc(100vh - " + this.state.heightOfHeader + "px)", position: "relative", }} h={this.props.windowHeight}>
            {this.props.children}

          </Content>
          <Sidebar opened={this.state.opened} collapsed={w} changed={() => this.setState({ opened: !this.state.opened })}>
            <div style={{ position: "relative" }}>

              <div /* className={sidebarStyles.container} */ style={{ height: "100%", paddingBottom: 50 }}>
                <Menu collapsed={this.state.collapsed} changed={(a) => this.setState({ collapsed: a })} />
              </div>
              {this.state.opened && <Button
                onClick={e => {
                  this.setState({ collapsed: !this.state.collapsed })
                }} style={{
                  position: "fixed", bottom: 0, width: w,
                  transition: "width 300ms ease 0s",
                  backgroundColor: "rgb(240,240,240)"
                }}
              >

                {this.state.collapsed ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
              </Button>}
            </div>
          </Sidebar>
        </Root>
      </ThemeProvider >
    )
  }
}


const config = {
  "autoCollapseDisabled": false,
  "collapsedBreakpoint": "sm",
  "heightAdjustmentDisabled": false,
  "xs": {
    "sidebar": {
      "variant": "temporary",
      "width": 240,
      "collapsible": false,
      "collapsedWidth": 64
    },
    "header": {
      "position": "fixed",
      "clipped": false,
      "offsetHeight": 56,
      "persistentPushed": false,
      "persistentScreenFit": false
    },
    "content": {
      "persistentPushed": false,
      "persistentScreenFit": false
    },
    "footer": {
      "persistentPushed": false,
      "persistentScreenFit": false
    }
  },
  "sm": {
    "sidebar": {
      "variant": "persistent",
      "width": 256,
      "collapsible": true,
      "collapsedWidth": 64
    },
    "header": {
      "position": "fixed",
      "clipped": true,
      "offsetHeight": 64,
      "persistentPushed": false,
      "persistentScreenFit": false
    },
    "content": {
      "persistentPushed": false,
      "persistentScreenFit": false
    },
    "footer": {
      "persistentPushed": true,
      "persistentScreenFit": true
    }
  },
  "md": {
    "sidebar": {
      "variant": "persistent",
      "width": 256,
      "collapsible": true,
      "collapsedWidth": 64
    },
    "header": {
      "position": "fixed",
      "clipped": true,
      "offsetHeight": 64,
      "persistentPushed": true,
      "persistentScreenFit": true
    },
    "content": {
      "persistentPushed": true,
      "persistentScreenFit": true
    },
    "footer": {
      "persistentPushed": true,
      "persistentScreenFit": true
    }
  }
};
export default windowSize(App)
