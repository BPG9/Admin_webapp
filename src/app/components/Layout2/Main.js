import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Chip from '@material-ui/core/Chip';
import BroadCrumbs from './LayoutComponents/BroadCrumbs';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
        minHeight: "40px !important"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: "100vh"
    },
    lists: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
    },
}));
const LinkRouter = props => <Link {...props} component={RouterLink} >{props.children}</Link>;

export default function MiniDrawer(props) {
    const classes = useStyles();

    return (
        <main className={classes.content} style={{ width: 400 }}>
            <div className={classes.toolbar} />

            <BroadCrumbs />
            {props.children}
        </main>
    );
}