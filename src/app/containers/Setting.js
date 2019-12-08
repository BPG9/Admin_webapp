import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/UserActions";

class Setting extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Setting))
