import React, {Component, PropTypes} from "react";
// import $ from "zepto-modules/es6/_default"

import BackHeader from "../components/BackHeader";

const style={
  display: "block"
}

export default class AddProject extends Component{

  render(){
    console.log("addProject render:", this.props.children);
    return(
      <div className="page" style={style}>
        <BackHeader title="add project" />
        <p>sdjfjjj</p>
      </div>
    )
  }
}
