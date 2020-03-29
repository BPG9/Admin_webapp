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
        pass: "",
        code: "asd"
    }
    click = () => {
        request.axiosGraphQL.post('', { query: request.changePassword(this.state.pass, localStorage.getItem("atoken")) })
            .then(res => {
                alert('done');
            })
            .catch(err => {
                alert('err');
            })
    }
    render() {
        console.log(this.props, "uu")

        return (
            <AllgemeinField title="Change Password" nopadding={false} >
                <div ref={ref}>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        multiline style={{ margin: "1%", width: "98%" }}
                        value={this.props.data && this.props.data.Text} label="Password"
                        type="password"
                        onChange={x => this.setState({ pass: x.target.value })}
                        variant="outlined" />

                    <Button style={{ margin: 5 }} variant="contained" onClick={() => this.click()}>
                        Change
                        </Button>

                </div>
            </AllgemeinField>
        )
    }
}   