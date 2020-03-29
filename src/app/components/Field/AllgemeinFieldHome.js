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
        <Paper
            style={props.title && props.title != "" ? { padding: "10px 32px 32px", height: "100%" } : { padding: 32, height: "100%" }}
        >
            {props.title && props.title != "" && <h2>{props.title}</h2>}
            <div style={props.title && props.title ? {
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                height: "calc(100% - 65px)"
            } :
                {
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: "100%"
                }

            }>
                <div style={{ width: "100%" }}>


                    {props.children}
                </div>
            </div>
        </Paper>
    );
}

