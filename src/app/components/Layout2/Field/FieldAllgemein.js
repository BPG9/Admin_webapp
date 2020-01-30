import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function PaperSheet(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {!props.none &&

                <Typography variant="h6" component="p" >
                    {props.Text}
                </Typography>
            }
            {!props.none &&

                <Divider style={{ margin: "10px 0" }} />
            }
            {props.children}
        </Paper>
    );
}