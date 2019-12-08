import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";


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
            <ListItem button onClick={props.handleClick} className={props.child ? classes.nested : null} title={props.text} selected={props.selected}>
                {!props.textOnly && <ListItemIcon>
                    {props.icon}
                </ListItemIcon>}
                <ListItemText primary={props.text} style={{ whiteSpace: "nowrap" }} />
                {props.drop ? props.open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
        </div>
    )
}
function childDiv(props) {
    const classes = useStyles();
    return (
        <Collapse in={props.in} timeout="auto" unmountOnExit >
            <List component="div" >
                {props.children}
            </List>
        </Collapse>
    )
}
const project = [
    { id: "1", name: "project 1 " },
    { id: "2", name: "project 2 " },
    { id: "3", name: "project 3 " },
    { id: "4", name: "project 4 " },
    { id: "5", name: "project 5 " },
    { id: "6", name: "project 6 " },
]
class NestedList extends React.Component {
    state = {
        selected: "home",
        open: false
    }

    componentWillMount() {
        var a = this.props.location.pathname.split('/');
        var query = new URLSearchParams(this.props.location.search);
        a[1] == "project" ?
            this.setState({ selected: a[1] + "_" + query.get("id") }) :
            this.setState({ selected: a[1] })

        // a[1] == "project"?

    }

    handleClick = () => {
        !this.state.open ?
            this.props.changed(false) : null
        this.setState({ open: !this.state.open })
    };
    onClick = (b) => {
        var a = b.toLowerCase()
        this.setState({ selected: a })
        var chars = a.split('_');
        chars.length == 1 ?
            this.props.history.push('/' + chars[0]) :
            this.props.history.push('/project?id=' + chars[1])
    };
    render() {
        const classes = useStyles;
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                //     subheader={
                //         <ListSubheader component="div" id="nested-list-subheader">
                //             Nested List Items
                // </ListSubheader>
                //     }
                className={classes.root}
            >
                <Item icon={<HomeIcon />} text="Home"
                    handleClick={() => this.onClick("Home")}
                    selected={this.state.selected == "home" && true} />
                <Item icon={<SettingsIcon />} text="Setting" handleClick={() => this.onClick("Setting")}
                    selected={this.state.selected == "setting" && true} />
                <Item icon={<SupervisorAccountIcon />} text="Admin" handleClick={() => this.onClick("Admin")}
                    selected={this.state.selected == "admin" && true} />
            </List>
        );
    }
}



export default withRouter(NestedList)