import React from 'react';
import AllgemeinField from '../Field/AllgemeinField'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as request from '../../../Requests'

export default class AwesomeComponent extends React.Component {
    state = {
        editable: false,
        new: true,
        showEdit: false,
        objectId: "",
        category: "",
        subCategory: "",
        title: "",
        year: "",
        picture: "",
        artType: "",
        creator: "",
        material: "",
        size_: "",
        location: "",
        description: "",
        interdisciplinaryContext: ""
    }
    componentWillReceiveProps(prevProps) {
        console.log("pro", this.props, prevProps)
        !this.state.editable && this.props.data && this.setState({
            objectId: this.props.data.objectId,
            category: this.props.data.category,
            subCategory: this.props.data.subCategory,
            title: this.props.data.datatitle,
            year: this.props.data.year,
            picture: this.props.data.picture,
            artType: this.props.data.artType,
            creator: this.props.data.creator,
            material: this.props.data.material,
            size_: this.props.data.size_,
            location: this.props.data.location,
            description: this.props.data.description,
            interdisciplinaryContext: this.props.data.interdisciplinaryContext,
            showEdit: true
        }, console.log("jo", this.state))
    }

    newF = () => {
        this.setState({
            showEdit: false, editable: true,
            new: true,
            objectId: "",
            category: "",
            subCategory: "",
            title: "",
            year: "",
            picture: "",
            artType: "",
            creator: "",
            material: "",
            size_: "",
            location: "",
            description: "",
            interdisciplinaryContext: ""
        })
    }
    click = () => {

        console.log("all", this.state)
        this.state.new && !this.state.showEdit ?
            request.axiosGraphQL.post('', {
                query: request.createMuseumObject(
                    localStorage.getItem("atoken"),
                    this.state.objectId,
                    this.state.category,
                    this.state.subCategory,
                    this.state.title,
                    this.state.year,
                    this.state.picture,
                    this.state.artType,
                    this.state.creator,
                    this.state.material,
                    this.state.size_,
                    this.state.location,
                    this.state.description,
                    this.state.interdisciplinaryContext
                )
            })
                .then(res => {
                    alert("DONE")
                    this.setState({ new: false, editable: false, showEdit: false })
                })
                .catch(err => {
                    alert("Error" + err)
                }) :
            request.axiosGraphQL.post('', {
                query: request.updateMuseumObject(
                    localStorage.getItem("atoken"),
                    this.state.objectId,
                    this.state.category,
                    this.state.subCategory,
                    this.state.title,
                    this.state.year,
                    this.state.picture,
                    this.state.artType,
                    this.state.creator,
                    this.state.material,
                    this.state.size_,
                    this.state.location,
                    this.state.description,
                    this.state.interdisciplinaryContext
                )
            })
                .then(res => {
                    alert("DONE")
                    this.setState({ new: false, editable: false, showEdit: false })
                })
                .catch(err => {
                    alert("Error" + err)
                })

    }
    render() {
        console.log(this.props, "uu", this.state)

        return (
            <AllgemeinField title="Data" nopadding={false}>
                <div style={{ minWidth: 300, display: "" }}>
                    <div style={{ width: "100%", minWidth: 300, float: "left", padding: 0, maxHeight: 200 }}>
                        {!this.state.editable ?
                            <img height="100" src={this.state.picture} />

                            :
                            <div>

                                <input accept="image/*" style={{ display: 'none', }} id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file" style={{ padding: 20 }}>

                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera style={{ margin: 20, fontSize: 48 }} />
                                    </IconButton>
                                </label>
                            </div>
                        }
                    </div>
                    <div style={{ width: "100%", minWidth: 300, float: "left", padding: 0 }}>

                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.objectId} label="objectId" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ objectId: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.category} label="category" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ category: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.subCategory} label="subCategory" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ subCategory: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.title} label="title" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ title: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.year} label="year" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ year: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.artType} label="artType" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ artType: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.creator} label="creator" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ creator: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.material} label="material" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ material: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.size_} label="size_" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ size_: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.location} label="location" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ location: x.target.value })} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.description} label="description" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ description: x.target.value })} fullWidth multiline />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: "1%", width: "48%" }}
                            value={this.state.interdisciplinaryContext} label="interdisciplinaryContext" variant="outlined" disabled={!this.state.editable}
                            onChange={x => this.setState({ interdisciplinaryContext: x.target.value })} fullWidth />
                    </div>
                </div>
                <div style={{ width: "100%", minWidth: 300, padding: 0 }}>
                    <Button style={{ margin: 5 }} variant="contained"
                        onClick={this.newF}>New</Button>
                    <Button style={{ margin: 5 }} variant="contained" color="primary" onClick={() => this.new()}>
                        {"cancel"}
                    </Button>
                    <Button style={{ margin: 5 }} variant="contained" color="primary" onClick={() => this.setState({ editable: !this.state.editable })}>
                        {this.state.showEdit && "Edit"}
                    </Button>
                    {this.state.editable ?

                        <Button style={{ margin: 5 }} variant="contained" color="secondary" onClick={this.click}>
                            Save
                        </Button>
                        :
                        null}
                </div>

            </AllgemeinField>
        )
    }
}