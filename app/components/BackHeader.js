import React, {Component, PropTypes} from "react";

export default class BackHeader extends Component{
  handleClick(){
    if(window){
      window.history.back()
    }
  }
  render(){
    return(
      <header className="bar bar-nav">
        <a className="icon icon-left pull-left" onClick={this.handleClick}></a>
        <a className="icon icon-refresh pull-right"></a>
        <h1 className="title">{this.props.title}</h1>
      </header>
    );
  }
}

BackHeader.proptypes = {
  title: PropTypes.string.isRequired
}
