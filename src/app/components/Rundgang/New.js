import React from 'react';
import MaterialTable from 'material-table'
import AllgemeinFieldForTable from '../Field/AllgemeinFieldForTable'

export default class AwesomeComponent extends React.Component {
    state = {
        loading: true,
        columns: [
            { title: 'ID', field: 'objectId', render: rowData => <p style={{ width: 200, }}>{rowData.objectId} </p> },
            { title: 'category', field: 'category' },
            { title: 'subCategory', field: 'subCategory' },
            { title: 'ID', field: 'ID', },
            { title: 'Title', field: 'title' },
            { title: 'year', field: 'year' },
            { title: 'picture', field: 'picture', },
            { title: 'artType', field: 'artType' },
            { title: 'creator', field: 'creator' },
            { title: 'material', field: 'material', },
            { title: 'size', field: 'size' },
            { title: 'location', field: 'location' },
            { title: 'description', field: 'description', render: rowData => <p style={{ width: 500, }}>{rowData.description.substring(1, 50)} </p> },
            { title: 'interdisciplinaryContext', field: 'interdisciplinaryContext' },

        ],

    }

    render() {
        return (
            <AllgemeinFieldForTable>

                <MaterialTable
                    title="Handling Selection Changes Preview"
                    columns={this.state.columns}
                    data={this.props.data}
                    options={{
                    }}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit Exponat',
                            onClick: (event, rowData) => this.props.selected(rowData)
                        }
                    ]}
                />
            </AllgemeinFieldForTable>
        )
    }
}