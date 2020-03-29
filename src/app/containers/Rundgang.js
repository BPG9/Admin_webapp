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
    data: null,
    txt: "A",
    selected: ""
  }



  componentWillMount() {
    request.axiosGraphQL.post('', { query: request.pending(localStorage.getItem("atoken")) })
      .then(res => {
        this.setState({ data: res.data.data.allObjects })
      })
      .catch(err => {
        alert("ERR" + err)
      })
  }
  render() {
    console.log(this.state.selected)
    return (
      <div >
        <ListOfRundgangs handelSelect={(x) => this.setState({ selected: x })} data={this.state.data} />
        <ListEditor selected={this.state.selected} />
      </div >
    )

  }
}

export default Rundgang;
