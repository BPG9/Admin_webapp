import React from 'react';
import MaterialTable from 'material-table'
import AllgemeinFieldForTable from '../Field/AllgemeinField'
import Exp from './Exp';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

export default class AwesomeComponent extends React.Component {
    state = {
        loading: true,
        data: [
            {
                id: "1",
                name: "qweqwe",
                type: "info",
                text: "asdojnmasdjnia oiuasdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd asj ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd as",
                aufgaben: [
                    {
                        t: "m",
                        f: "vxas das dasd asd asd asd asd cv",
                        a: [
                            { m: "asasd", l: false },
                            { m: "asasd", l: false },
                            { m: "asasd", l: true },
                            { m: "asasd", l: false },
                            { m: "asasd", l: false },
                        ]
                    },
                    {
                        t: "t",
                        f: "vxa sda da dsa sdas da sdas ddasd asdcv",
                        a: [

                        ]
                    }
                ],
                imgs: [
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                ]
            },
            {
                id: "2",
                name: "qwecvxcvxcvqwe",
                type: "route",
                text: "asdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douaasdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd asasdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd asjsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd as",

                imgs: [
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                ]
            },
            {
                id: "1",
                name: "qweqwe",
                type: "info",
                text: "asdojnmasdjnia oiuasdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd asj ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd as",
                aufgaben: [
                    {
                        t: "m",
                        f: "vxas das dasd asd asd asd asd cv",
                        a: [
                            { m: "asasd", l: false },
                            { m: "asasd", l: false },
                            { m: "asasd", l: true },
                            { m: "asasd", l: false },
                            { m: "asasd", l: false },
                        ]
                    },
                    {
                        t: "t",
                        f: "vxa sda da dsa sdas da sdas ddasd asdcv",
                        a: [

                        ]
                    }
                ],
                imgs: [
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                ]
            },
            {
                id: "2",
                name: "qwecvxcvxcvqwe",
                type: "route",
                text: "asdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douaasdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd asasdojnmasdjnia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd asjsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba ia oiuj naoshdohiuans douajsbnd opiubghas doizba osidboaib dzib aosibdoaszbdz basd as",

                imgs: [
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                    {
                        l: "1",
                    },
                ]
            },
        ]
    }

    render() {
        const classes = useStyles
        return (
            <AllgemeinFieldForTable>

                {this.state.data.map(x => {

                    return (
                        x.type != "route" ?
                            <Exp data={x} >
                                <Box width="100%" >
                                    <Box p={3} width="100%" display="flex">
                                        <Box width="50%">

                                            <TextField id="standard-basic" label="ID" variant="outlined" value={x.id} multiline fullWidth style={{ padding: 10 }} />
                                            <TextField id="standard-basic" label="Name" variant="outlined" value={x.name} multiline fullWidth style={{ padding: 10 }} />
                                        </Box>
                                        <Box width="50%">

                                            <TextField id="standard-basic" label="Frage" variant="outlined" value={x.text} multiline fullWidth style={{ padding: 10 }} />
                                        </Box>
                                    </Box>
                                    {
                                        x.aufgaben.map((y, z) => {
                                            return (
                                                <Box p={3} width="100%" display="flex">
                                                    <Box >

                                                        <TextField id="standard-basic" label={"Frage" + (z + 1)} variant="outlined" value={y.f} multiline fullWidth style={{ padding: 10 }} />
                                                        {y.a.map((v, p) => {
                                                            return <Box p={2} width="100%" display="flex">

                                                                <TextField id="standard-basic" label={"Auswahl " + (p + 1)} variant="outlined" value={v.m} multiline style={{ padding: 10 }} />
                                                                <Switch
                                                                    checked={v.l}
                                                                    // onChange={handleChange('checkedA')}
                                                                    value="checkedA"
                                                                />
                                                            </Box>
                                                        })}

                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                    {
                                        x.imgs.map((y, z) => {
                                            return (
                                                <Box p={3} width="100%" display="flex">
                                                    <Box >
                                                        <img src={y.l} alt={y.l} />
                                                        <Switch
                                                            checked={y.l}
                                                            // onChange={handleChange('checkedA')}
                                                            value="checkedA"
                                                        />

                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>

                            </Exp>
                            :
                            <Exp data={x} >
                                <Box width="100%" >
                                    <Box p={3} width="100%" display="flex">
                                        <Box width="50%">

                                            <TextField id="standard-basic" label="ID" variant="outlined" value={x.id} multiline fullWidth style={{ padding: 10 }} />
                                            <TextField id="standard-basic" label="Name" variant="outlined" value={x.name} multiline fullWidth style={{ padding: 10 }} />
                                        </Box>
                                        <Box width="50%">

                                            <TextField id="standard-basic" label="Frage" variant="outlined" value={x.text} multiline fullWidth style={{ padding: 10 }} />
                                        </Box>
                                    </Box>
                                    {
                                        x.imgs.map((y, z) => {
                                            return (
                                                <Box p={3} width="100%" display="flex">
                                                    <Box >
                                                        <img src={y.l} alt={y.l} />
                                                        <Switch
                                                            checked={y.l}
                                                            // onChange={handleChange('checkedA')}
                                                            value="checkedA"
                                                        />

                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>

                            </Exp>
                    )
                })
                }

            </AllgemeinFieldForTable>
        )
    }
}



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export function DetailedExpansionPanel() {
    // console.log("full info")
    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Location</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.column}>
                        <Chip label="Barbados" onDelete={() => { }} />
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="caption">
                            Select your destination of choice
              <br />
                            <a href="#secondary-heading-and-columns" className={classes.link}>
                                Learn more
              </a>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">
                        Save
          </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
}