import React from 'react';
import AllgemeinField from '../Field/AllgemeinField'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default class AwesomeComponent extends React.Component {
    state = {
        editable: false,
        new: true,
        showEdit: false,
        ID: "",
        Title: "",
        Text: "",
        img: ""
    }
    componentWillReceiveProps(prevProps) {
        console.log("pro", this.props)
        this.props.data && this.setState({
            ID: this.props.data.ID,
            Title: this.props.data.Title,
            Text: this.props.data.Text,
            img: this.props.data.img,
            showEdit: true
        })
    }
    render() {
        console.log(this.props, "uu")

        return (
            <AllgemeinField title="Data" nopadding={false}>
                <div style={{ minWidth: 300, display: "flex" }}>
                    <div style={{ width: "50%", minWidth: 300, float: "left", padding: 0 }}>
                        {!this.state.editable ?
                            <img height="100" src={this.props.data && this.props.data.img} />

                            :
                            <div>

                                <input accept="image/*" style={{ display: 'none', }} id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file" style={{ padding: 20 }}>

                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera style={{ margin: 20, fontSize: 50 }} />
                                    </IconButton>
                                </label>
                            </div>
                        }
                    </div>
                    <div style={{ width: "50%", minWidth: 300, float: "left", padding: 0 }}>

                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }} value={this.props.data && this.props.data.ID} label="ID" variant="outlined" disabled={!this.state.editable} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }} value={this.props.data && this.props.data.Title} label="Title" variant="outlined" disabled={!this.state.editable} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            multiline style={{ margin: "1%", width: "98%" }}
                            value={this.props.data && this.props.data.Text} label="Text"
                            variant="outlined" disabled={!this.state.editable} />
                    </div>
                </div>
                <div style={{ width: "100%", minWidth: 300, padding: 0 }}>
                    <Button style={{ margin: 5 }} variant="contained"
                        onClick={() => this.setState({ showEdit: true, editable: true, new: true, ID: "", Title: "", Text: "", img: null })}>New</Button>
                    <Button style={{ margin: 5 }} variant="contained" color="primary" onClick={() => this.setState({ editable: !this.state.editable })}>
                        {!this.state.editable && this.state.new ? "Edit" : "cancel"}
                    </Button>
                    {this.state.editable ?

                        <Button style={{ margin: 5 }} variant="contained" color="secondary">
                            Save
                        </Button>
                        :
                        null}
                </div>

            </AllgemeinField>
        )
    }
}