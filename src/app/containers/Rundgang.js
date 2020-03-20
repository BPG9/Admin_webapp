import React, { Component } from 'react';
import ListOfRundgangs from '../components/Rundgang/List'
import ListEditor from '../components/Rundgang/ListEditor'


class Rundgang extends Component {
  state = {
    data: null,
    txt: "A",
    selected: ""
  }
  render() {
    console.log(this.state.selected)
    return (
      <div >
        <ListOfRundgangs handelSelect={(x) => this.setState({ selected: x })} />
        <ListEditor selected={this.state.selected} />
      </div >
    )

  }
}

export default Rundgang;
