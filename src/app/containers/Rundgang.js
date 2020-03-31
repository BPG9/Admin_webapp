/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 * Rundgängeliste 
 * 
 */


import React, { Component } from 'react';
import ListOfRundgangs from '../components/Rundgang/List'
import ListEditor from '../components/Rundgang/ListEditor'
import * as request from '../../Requests'

class Rundgang extends Component {
  state = {
    data: [],
    txt: "A",
    selected: ""
  }

  componentWillMount() {
    request.axiosGraphQL.post('', { query: request.pending(localStorage.getItem("atoken")) })
      .then(res => {
        this.setState({ data: res.data.data.allTours })
      })
      .catch(err => {
        alert("ERR" + err)
      })
  }
  render() {
    console.log(this.state.selected)
    return (
      <div >{
        this.props.data && this.props.data.length > 0 ?
          <>
            <ListOfRundgangs handelSelect={(x) => this.setState({ selected: x })} data={this.state.data} />
            <ListEditor selected={this.state.selected} />
          </> :
          <div>Loading ....</div>}
      </div >
    )

  }
}

export default Rundgang;
