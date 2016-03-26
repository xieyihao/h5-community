import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

import BackHeader from "../components/BackHeader"

const style = {
  display: "block"
}

class Index extends Component {
  render(){
    console.log("index render:", this.props);
    return(
      <div className="page" style={style}>
        <BackHeader title="Application title" />
        <div className="content">
          <div>{this.props.header.title}</div>
          <Link to="/signin">sign in</Link>
          <br></br>
          <Link to="/projectlist">project list</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    header:state.indexHeader
  }
}

export default connect(mapStateToProps)(Index)
