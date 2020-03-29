import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 1.5),
        borderRadius: 30
    },
}));

export default function PaperSheet(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {props.children}
        </Paper>
    );
}