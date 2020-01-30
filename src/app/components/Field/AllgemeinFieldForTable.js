/**
 * Param: 
 *  nopadding : bool => if has a padding or not 
 * OR 
 *  title : String => this is just a title 
 * OR
 *   => 
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

export default function PaperSheet(props) {
    const classes = useStyles();

    return (
        <div
            style={{ padding: 32 }}
        >
            {props.children}
        </div>
    );
}

