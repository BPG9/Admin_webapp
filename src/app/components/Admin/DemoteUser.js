import React from 'react';
import AllgemeinField from '../Field/AllgemeinField'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Pdf from "react-to-pdf";
import * as request from '../../../Requests'

const ref = React.createRef();


export default class AwesomeComponent extends React.Component {
    state = {
        email: "",
    }
    click = () => {
        request.axiosGraphQL.post('', { query: request.demoteUser(localStorage.getItem("token"), this.state.email) })
            .then(res => {
                //TODO
            })
            .catch(err => {
                //TODO
            })
    }
    render() {
        return (
            <AllgemeinField title="Demote User" nopadding={false} >
                <div ref={ref}>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: "1%", width: "98%" }}
                        value={this.state.email} label="Email"
                        onChange={x => this.setState({ email: x.target.value })}
                        variant="outlined" />

                    <Button style={{ margin: 5 }} variant="contained" onClick={() => this.click}>
                        Demote
                        </Button>
                </div>
            </AllgemeinField>
        )
    }
}   