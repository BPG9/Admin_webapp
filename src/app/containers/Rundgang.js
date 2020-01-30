import React, { Component } from 'react';
import ListOfRundgangs from '../components/Rundgang/List'
import ExponatErstellen from '../components/Rundgang/New'


class Rundgang extends Component {
  state = {
    data: null,
    txt: "A"
  }
  render() {
    return (
      <div >
        <ListOfRundgangs />
      </div >
    )

  }
}


export default Rundgang;
