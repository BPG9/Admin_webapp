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
        pass: ""
    }
    click = () => {
        request.axiosGraphQL.post('', { query: request.createAdmin(this.state.email, this.state.pass) })
            .then(res => {
                //TODO
            })
            .catch(err => {
                //TODO
            })
    }
    render() {
        return (
            <AllgemeinField title="Add a new User" nopadding={false} >
                <div ref={ref}>
                    {/* 
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: "1%", width: "48%" }} value={this.props.data && this.props.data.ID} label="Vorname" variant="outlined" />
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: "1%", width: "48%" }} value={this.props.data && this.props.data.Title} label="Nachname" variant="outlined" /> */}
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: "1%", width: "98%" }}
                        value={this.state.email} label="Email"
                        onChange={x => this.setState({ email: x.target.value })}
                        variant="outlined" />
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        multiline style={{ margin: "1%", width: "98%" }}
                        value={this.state.pass} label="Password"
                        type="password"
                        onChange={x => this.setState({ pass: x.target.value })}
                        variant="outlined" />

                    <Button style={{ margin: 5 }} variant="contained" onClick={() => this.click}>
                        Create
                        </Button>

                    {/*  <div style={{ width: "100%", minWidth: 300, padding: 0 }} >
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            multiline style={{ margin: "1%", width: "78%" }}
                            value={this.props.data && this.props.data.Text} label="Password" disabled
                            variant="outlined" />
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button style={{ margin: "1%", width: "18%", height: 55 }} variant="contained" color="primary"
                                onClick={toPdf}>
                                Download
                        </Button>}
                        </Pdf>
                    </div> */}
                </div>
            </AllgemeinField>
        )
    }
}   