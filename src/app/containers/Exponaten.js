/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 * Exponatenlieste und Edieturzung und Neu Erstellung.
 * 
 */

import React, { Component } from 'react';
import ListOfRundgangs from '../components/Rundgang/List'
import ExponatErstellen from '../components/Rundgang/New'
import EditExponaten from '../components/Rundgang/EditExponaten'
import * as request from '../../Requests'


class Rundgang extends Component {
  state = {
    data: null,
    txt: "A",
    data: [
    ],
    selected: null
  }



  componentWillMount() {
    request.axiosGraphQL.post('', { query: request.exp(localStorage.getItem("atoken")) })
      .then(res => {
        this.setState({ data: res.data.data.allObjects })
      })
      .catch(err => {
        alert("ERR" + err)
      })
  }
  render() {
    return (
      <div >
        <ExponatErstellen data={this.state.data} selected={a => this.setState({ selected: a }, console.log(a, "is selected", this.state))} />
        <EditExponaten data={this.state.selected} />
      </div >
    )

  }
}


export default Rundgang;
