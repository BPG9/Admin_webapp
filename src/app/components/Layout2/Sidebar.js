import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';

import Menu from './LayoutComponents/Menu'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        overflowX: "hidden",
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: 500,
        marginTop: 40,
        position: "relative"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, .5),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nav: {
        flexGrow: 1,
        paddingBottom: 40,
    },
}));

export default function MiniDrawer(props) {
    const classes = useStyles();


    return (
        <Drawer
            variant={props.typeOfDrawer}
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.sideBarinsideOpen,
                [classes.drawerClose]: !props.sideBarinsideOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.sideBarinsideOpen,
                    [classes.drawerClose]: !props.sideBarinsideOpen,
                }),
            }}
            onClose={() => props.handleDrawerOpen(false)}
            open={props.sideBarinsideOpen}
        >
            <div className={classes.nav}>
                <Menu openComplete={() => {
                    props.handleDrawerOpen(true)
                }}
                    collapsed={props.sideBarinsideOpen}
                />
            </div>
            <div className="transition" style={props.sideBarinsideOpen ?
                {
                    position: "fixed", bottom: 0, height: 40, width: 239,
                } :
                {
                    position: "fixed", bottom: 0, height: 40, width: 72,
                }}>

                <Paper
                    variant="contained"
                    aria-label="props.sideBarinsideOpen drawer"
                    onClick={() => props.handleDrawerOpen(!props.sideBarinsideOpen)}
                    edge="start"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                    }}

                >
                    {
                        props.sideBarinsideOpen ?
                            <ChevronLeftIcon />
                            :
                            <ChevronRightIcon />
                    }
                </Paper >
            </div>
        </Drawer>
    );
}