import React from 'react';
import MaterialTable from 'material-table'
import AllgemeinFieldForTable from '../Field/AllgemeinFieldForTable'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ErrorIcon from '@material-ui/icons/Error';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import * as request from '../../../Requests'

export default class AwesomeComponent extends React.Component {
    state = {
        data: this.props.data
    }
    render() {
        return (
            <AllgemeinFieldForTable>

                <MaterialTable
                    title="Liste von Rundgängen"
                    columns={[
                        { title: 'ID', field: 'id' },
                        { title: 'name', field: 'name' },
                        { title: 'Title', field: 'Title' },
                        { title: 'description', field: 'description' },
                        {
                            title: 'status', field: 'status', lookup: { "featured": 'featured', "pending": 'pending', "private": 'private' },
                            render: d => d.status == "featured" ?
                                <CheckCircleIcon style={{ color: "green" }} /> :
                                d.status == "pending" ?
                                    <HourglassEmptyIcon style={{ color: "orange" }} /> :
                                    <ErrorIcon style={{ color: "red" }} />

                        },
                    ]}
                    data={this.state.data}
                    editable={{
                        onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                            console.log(newData, oldData)
                            newData.status != oldData.status & newData.status == 0 ?

                                request.axiosGraphQL.post('', { query: request.acceptReview(localStorage.getItem("atoken"), this.state.newData.ID) })
                                    .then(res => {
                                        alert("done")
                                        const data = this.state.data;
                                        const index = data.indexOf(oldData);
                                        data[index] = newData;
                                        this.setState({ data }, () => resolve());
                                        resolve()

                                    })
                                    .catch(err => {
                                        alert("Errot" + err)
                                        reject()
                                    }) :
                                newData.status != oldData.status & newData.status != "pending" && newData.status != "featured" ?

                                    request.axiosGraphQL.post('', { query: request.denyReview(localStorage.getItem("atoken"), this.state.newData.ID) })
                                        .then(res => {
                                            alert("done")
                                            const data = this.state.data;
                                            const index = data.indexOf(oldData);
                                            data[index] = newData;
                                            this.setState({ data }, () => resolve());
                                            resolve()
                                        })
                                        .catch(err => {
                                            alert("Errot" + err)
                                            reject()

                                        }) : reject("")

                        })
                    }}
                    actions={[
                        {
                            icon: 'cloud_download',
                            tooltip: 'Download',
                            onClick: (event, rowData) => this.props.handelSelect(rowData.Id)
                        },
                    ]}
                    options={{
                        filtering: true
                    }}

                />
            </AllgemeinFieldForTable>
        )
    }
}