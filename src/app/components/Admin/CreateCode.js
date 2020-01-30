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
        code: ""
    }
    click = () => {
        request.axiosGraphQL.post('', { query: request.createCode(localStorage.getItem("token")) })
            .then(res => {
                //TODO
            })
            .catch(err => {
                //TODO
            })
    }
    render() {
        console.log(this.props, "uu")

        return (
            <AllgemeinField title="Genarate Code" nopadding={false} >
                <div ref={ref}>

                    <Button style={{ margin: 5 }} variant="contained" onClick={() => this.click}>
                        Genarate
                        </Button>

                    <div style={{ width: "100%", minWidth: 300, padding: 0 }} >
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            multiline style={{ margin: "1%", width: "78%" }}
                            value={this.state.code} label="code" disabled
                            variant="outlined" />
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button style={{ margin: "1%", width: "18%", height: 55 }} variant="contained" color="primary"
                                onClick={toPdf}>
                                Download
                        </Button>}
                        </Pdf>
                    </div>
                </div>
            </AllgemeinField>
        )
    }
}   