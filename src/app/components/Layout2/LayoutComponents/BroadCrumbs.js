import React from 'react';
import { makeStyles, useTheme, emphasize } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ChipField from '../Field/ChipField';

const breadcrumbNameMap = {
    '/rundgang': 'Rundgang',
    '/statistik': 'Statistik',
    '/setting': 'Setting',
    '/admin': 'Admin',
};
const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },
    root2: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}));
const LinkRouter = props => <Link {...props} component={RouterLink} >{props.children}</Link>;

export default function MiniDrawer(props) {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Route>
                {({ location }) => {
                    const pathnames = location.pathname.split('/').filter(x => x);

                    return (
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" style={{ margin: 0 }} />} aria-label="breadcrumb" style={{ marginBottom: 15 }}>
                            {pathnames.map((value, index) => {
                                const last = index === pathnames.length - 1;
                                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                                console.log(value, last, to)
                                return last ? (
                                    <ChipField>

                                        <Typography color="textPrimary" key={to}>
                                            {console.log("ina", to)}
                                            {
                                                breadcrumbNameMap[to] ? breadcrumbNameMap[to] :
                                                    value}
                                        </Typography>
                                    </ChipField>
                                ) : (
                                        <ChipField>
                                            <LinkRouter color="inherit" to={to} key={to}>
                                                {console.log("ina", to)}
                                                {breadcrumbNameMap[to] ? breadcrumbNameMap[to] :
                                                    value}
                                            </LinkRouter>
                                        </ChipField>
                                    );
                            })}
                        </Breadcrumbs>
                    );
                }}
            </Route>
        </div>
    );
}