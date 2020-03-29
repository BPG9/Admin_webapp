import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { withRouter } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(2),
    },
    divider: {
        height: 48,
        marginLeft: theme.spacing(2),
    },
}));

function Item(props) {
    const classes = useStyles();

    return (
        <div style={{ display: "flex" }}>
            {props.child && <Divider className={classes.divider} orientation="vertical" />}
            <ListItem button component={(props.link != null) ? RouterLink : null} to={props.link} onClick={props.handleClick} className={props.child ? classes.nested : null} title={props.text} selected={props.selected}>
                {!props.textOnly && <ListItemIcon>
                    {props.icon}
                </ListItemIcon>}
                <ListItemText primary={props.text} style={{ whiteSpace: "nowrap" }} />
                {props.drop ? props.open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
        </div>
    )
}

class NestedList extends React.Component {
    state = {
        open: false
    }

    componentWillMount() {
        var a = this.props.location.pathname.split('/');
        var query = new URLSearchParams(this.props.location.search);
        a[1] == "project" ?
            this.setState({ selected: a[1] + "_" + query.get("id") }) :
            this.setState({ selected: a[1] })

        // a[1] == "project"?
        if (this.props.location.pathname.startsWith("/projects")) {
            this.setState({ open: true })
        }

    }

    handleClick = () => {
        // !this.state.open ?
        //     this.props.changed(false) : null
        this.setState({ open: !this.state.open })
    };
    onClick = () => {
        console.log("aya")
        this.handleClick()
        this.props.openComplete(true)
    };
    render() {
        const classes = useStyles;
        console.log("tgis.props", this.props)
        return (
            <List
                component="nav"
                className={classes.root}
            >
                <Item icon={<CallSplitIcon />}
                    text="Rundgang"
                    link="/rundgang"
                    selected={this.props.location.pathname.startsWith("/rundgang") && true} />
                <Item icon={<AccountBalanceIcon />}
                    text="Exponaten"
                    link="/exponaten"
                    selected={this.props.location.pathname.startsWith("/exponaten") && true} />

                <Item
                    link="/admin"
                    icon={<SupervisorAccountIcon />}
                    text="Admin"
                    selected={this.props.location.pathname.startsWith("/admin") && true} />
                <Item
                    link="/statistik"
                    icon={<AssessmentIcon />}
                    text="Statistik"
                    selected={this.props.location.pathname.startsWith("/statistik") && true} />
                {/* <Item icon={<SettingsIcon />}
                    link="/setting"
                    text="Setting"
                    selected={this.props.location.pathname.startsWith("/setting") && true} /> */}
            </List>
        );
    }
}



export default withRouter(NestedList)